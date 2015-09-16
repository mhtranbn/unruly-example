// The Least App Configuration
// @author Daniel Sont

import fs from 'fs'
import { dirname, join } from 'path'


let file = join(dirname(require.main.filename), 'app.config')
let block = fs.readFileSync(file, 'UTF-8')

let config = {}

let pairs = block.split("\n")
	.map(x => x.trim())
	.map(x => x.split(/\s*=\s*/))
	.filter(x => x[0].length > 0)
	.map(
		([ k, v ]) => ([ k.replace(/[-\s]/g, '_'), v ])
	)
	.map(
		([k, v]) => ([ k.toLowerCase(), k.toUpperCase(), v ])
	)

for (let [k, K, value] of pairs) {
  config[k] = typeof process.env[K] !== 'undefined'
  	? process.env[K]
  	: value

}

export default config
