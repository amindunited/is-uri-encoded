/**
 * @license
 * Copyright Robin Buckley. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
'use strict';

const isURIEncoded = function (inputString) {

  // If there are whitespace characters, it's not encoded
  if (inputString.match(/\s/gm)) { return false; }

  // These common chars won't appear in an encoded string
  const otherChars = ['<', '>', '^', '~', '"', '{', '}', '[', ']'];
  let matches = otherChars.some((char) => {
    if ( inputString.indexOf(char) >= 0 ) {
      return true;
    }
  });

  if (matches) { return false; }

  // Generally most unencoded strings do not have more than one '%'
  return !!inputString.match(/%.*%/gm);

}

module.exports = isURIEncoded;
