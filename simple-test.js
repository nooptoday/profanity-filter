const { plus100, censor } = require('./index')

console.assert(plus100(0) === 100, 'Simple test failed')

console.info('Simple test passed')

console.info(censor('Hello motherfucker!'))
