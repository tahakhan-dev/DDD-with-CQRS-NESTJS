import { ConfigData } from './config.interface';

const userName = ''; // put your default db credentials if you were not specifing in env file
const pass = '';
const host = '';
const dbName = '';

export const DEFAULT_CONFIG: ConfigData = {
    env: 'DEVELOPMENT',
    port: 3000,
    db: {
        type: 'mssql',
        host,
        name: dbName,
        user: userName,
        pass,
        port: 1433,
    },
    logLevel: 'info',
};

export const EVENT_STORE_CONFIG: ConfigData = {
    env: 'DEVELOPMENT',
    port: 3000,
    db: {
        type: 'mssql',
        host,
        name: 'hk_events',
        user: userName,
        pass,
        port: 1433,
    },
    logLevel: 'info',
};
