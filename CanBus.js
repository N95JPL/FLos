const { exec } = require('child_process')
const fs = require('fs')
const readline = require('readline')

async function processLineByLine () {
  const files = fs.readdirSync('./CanBus Tester').filter(fn => fn.includes('.txt'))
  for (const a in files) {
    const fileStream = fs.createReadStream('./CanBus Tester/' + files[a])
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    })
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.
    console.log(files[a] + ' - Starting to run CanBus!')
    for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
      const msg = line.split(':')
      await sleep(msg[0])
      exec(msg[1])
      // console.log(`Line from file: ${line}`)
    }
    console.log(files[a] + ' - Finished this test file!')
  }
}
function sleep (ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
processLineByLine()
