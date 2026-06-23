#!/usr/bin/env node
import { Command } from "commander";
import { buildGreeting } from "./greet.js";

const program = new Command();

program
    .command('hello')
    .option('--name <name>', 'name to greet', 'CLI')
    .action((opts: { name: string }) => {
        console.log(buildGreeting(opts.name));
    })

program.parse();
