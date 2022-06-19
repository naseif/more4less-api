import { APIController } from 'api-tools-ts';
import { readdirSync } from 'fs';
import { IEndpoint } from './types/IEndpoint';

const API = new APIController('/api/v1');

export const getAllEndpoints = (path: string) => {
    let result: IEndpoint[] = [];
    const allCommandsFolders = readdirSync(path);
    for (const folder of allCommandsFolders) {
        const commandFiles = readdirSync(`${path}/${folder}`).filter((file) => file.endsWith('.js'));

        for (const file of commandFiles) {
            const command = require(`${path}/${folder}/${file}`);
            result.push(command);
        }
    }

    return result;
};

function EndpointsRegister(array: IEndpoint[]) {
    for (const endpoint of array) {
        for (const [key, value] of Object.entries(endpoint)) {
            API.AddEndPoint(value.endpoint, value.method, value.callback);
        }
    }
}

const Endpoints = getAllEndpoints(__dirname + '/BL');
EndpointsRegister(Endpoints);

API.startServer({ useDefaultMiddlewares: 'true' });
