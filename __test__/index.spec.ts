import test from 'ava'

import { censor } from '../index'

test('sync function from native code', (t) => {
  t.is(censor('profane'), 'profane')

  t.is(censor('shit'), 's***')
})
