'use strict';

const common = require('../../common.test.cjs');
const { assert } = require('poku');
const process = require('node:process');

const connection = common.createConnection({
	transformNestKeys: { cache: false }, // Преобразование test.value в test: { value: ... }
	minifyQueries: true, // Минификация
	deleteNulls: true, // Удаление NULL-ов
	deleteUndefined: true, // Удаление Undefined-ов
	booleanEnum: true, // Преобразование true/false ENUM в boolean
	replaceQuotes: `'` // Замена кавычек на ``
});

let row;

connection.query(`
	CREATE TEMPORARY TABLE 
		'announcements' (
			'id' int(11) NOT NULL AUTO_INCREMENT,
			'title' varchar(255) DEFAULT NULL,
			'test.value' varchar(255) DEFAULT NULL,
			'enabled' ENUM("true", "false") DEFAULT NULL,
			'realnull' ENUM("nothing") DEFAULT NULL,
			PRIMARY KEY ('id')
		) 
	ENGINE=InnoDB DEFAULT CHARSET=utf8`,
  (err) => {
    if (err) {
      throw err;
    }
  }
);

connection.execute(
  `INSERT INTO 
  	announcements ('title', 'test.value', 'enabled') 
  VALUES
  	(?, ?, ?)`,
  ['Есть место, где заканчивается тротуар', 'Я тебе твой пиздак расхуярю, Евгений', true],
  (err) => {
    if (err) {
      throw err;
    }
  }
);

connection.execute('SELECT * FROM announcements', async (err, _rows) => {
  row = _rows[0];
  connection.end();
});

process.on('exit', () => {
  assert.deepEqual(row, {
	id: 1, 
	title: 'Есть место, где заканчивается тротуар',
	test: {
		value: 'Я тебе твой пиздак расхуярю, Евгений'
	},
	enabled: true
  });
});
