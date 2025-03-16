'use strict';

// @bsnext-patch start
const Errors = require('./../../lib/constants/errors.js');
// @bsnext-patch end

function makeDoneCb(resolve, reject, localErr) {
  return function (err, rows, fields) {
    if (err) {
      localErr.message = err.message;
      localErr.code = err.code;
      localErr.errno = err.errno;
      localErr.sql = err.sql;
      localErr.sqlState = err.sqlState;
      localErr.sqlMessage = err.sqlMessage;
      
      // @bsnext-patch start
      // Wrap "ER_DUP_ENTRY" handler
      // Add "sqlDupIndex" field for get index-name
      if (err.errno === Errors.ER_DUP_ENTRY) {
        localErr.sqlDupIndex = err.sqlMessage.split(` for key `)[1].slice(1, -1);
      }
      // @bsnext-patch end

      reject(localErr);
    } else {
      resolve([rows, fields]);
    }
  };
}

module.exports = makeDoneCb;
