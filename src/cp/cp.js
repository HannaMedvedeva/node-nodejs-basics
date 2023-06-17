import { fork } from 'child_process'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
    fork(__dirname + `${path.sep}files${path.sep}script.js`, args)
};

// Put your arguments in function call to test this functionality
spawnChildProcess([]);
