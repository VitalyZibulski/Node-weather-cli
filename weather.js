#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp } from './services/log.service.js';

const initClI = () => {
    const args = getArgs(process.argv);
    if (args.h) {
        printHelp()
    }

    if (args.s) {

    }

    if (args.t) {
        
    }
}

initClI();