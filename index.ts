import { cpus } from 'os'
import chalk from 'chalk'
let s = JSON.stringify(cpus())
console.log(chalk.red(s))