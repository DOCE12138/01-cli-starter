#!/usr/bin/env node
import { Command } from "commander";
import { buildGreeting } from "./greet.js";

const program = new Command();

program
    .command('hello')
    .option('--name <name>', 'name to greet', 'CLI')
    .option('--upper', 'convert greeting to uppercase', false)
    .action((opts: { name: string, upper: boolean }) => {
        console.log(buildGreeting(opts.name, opts.upper));
    })

program.parse();
