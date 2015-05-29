const immstruct = require('immstruct')

const struct = immstruct({})

export function onChangeAnything(cb) {
  struct.on('swap', cb)
}

export function rootCursor() {
  return struct.cursor()
}
