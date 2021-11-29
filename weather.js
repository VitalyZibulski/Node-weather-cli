#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';

const saveToken = async (token) => {
    if (!token.length) {
        printError('did not get token');
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess('Token saved')
    } catch (e) {
        printError(e.message);
    }
}

const initClI = () => {
    const args = getArgs(process.argv);
    if (args.h) {
        printHelp()
    }

    if (args.s) {

    }

    if (args.t) {
        return saveToken(args.t); 
    }
    
    getForcast();
}

const getForcast = async () => {
    try {
        const weather = await getWeather(process.env.CITY);
        console.log(weather);
    } catch (e) {
        if (e?.response?.status == 404) {
            printError('Wrong city');
        } else if (e?.response?.status == 401) {
            printError('Wrong token');
        } else {
            printError(e.message);
        }
    }
}

initClI();