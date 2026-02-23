import { Bench } from 'tinybench'

import { censor } from '../index'

const b = new Bench()

b.add('non profane word', () => {
  censor('profane')
})

b.add('profane word', () => {
  censor('shit')
})

await b.run()

console.table(b.table())
