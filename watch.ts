import fs from 'node:fs'
import { build } from './build'

export async function watch(): Promise<void> {
  await build()
  console.log("Watching for changes...")
  return new Promise(resolve => {
    let no = 0
    const watcher = fs.watch('index.ts', () => {
      process.stdout.write(`Build ${++no} \r`)
      build()
    })
    process.on('SIGINT', () => {
      console.log("\nStopped watching.")
      watcher.close()
      resolve()
    })
  })
}

if (import.meta.main) {
  await watch()
}
