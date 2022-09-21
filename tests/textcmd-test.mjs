
import * as lib from '../lib.mjs'
import * as textcmd from '../textcmd.mjs'

/**
Run
  node lib-test.mjs
To test
*/

//#region

/**
Tests: lib.assertAllEqual
Tests: lib.equals el at via lib.assertAllEquals
Tests: textcmdApply.substrings
Tests: textcmdApply via .substrings
*/
{
  let collection = []
  textcmd.textcmdApply.substrings('asdf \\foo(qwer) zcxv \\goo(fghj) rtyi',
    (head, body) => {
      collection.push(['inside', head, body])
    },
    (body) => {
      collection.push(['outside', body])
    }
  )
  lib.assertAllEqual(collection, [['outside', 'asdf '], ['inside', 'foo', 'qwer'], ['outside', ' zcxv '], ['inside', 'goo', 'fghj'], ['outside', ' rtyi']])
}
{
  let collection = []
  textcmd.textcmdApply.substrings('\\foo(\\goo(asdf) qwer\\hoo(zxcv))',
    (head, body) => {
      collection.push(['inside', head, body])
    },
    (body) => {
      collection.push(['outside', body])
    }
  )
  lib.assertAllEqual(collection, [['inside', 'foo', '\\goo(asdf) qwer\\hoo(zxcv)']])
}
{
  let collection = []
  textcmd.textcmdApply.substrings('',
    (head, body) => {
      collection.push(['inside', head, body])
    },
    (body) => {
      collection.push(['outside', body])
    }
  )
  lib.assertAllEqual(collection, [])
}

//#endregion


console.log('textcmd tests are ok!')