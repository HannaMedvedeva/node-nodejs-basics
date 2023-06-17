import { sep, dirname } from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';
import firstFile from './files/a.json' assert { type: 'json' }
import secondFile from './files/b.json' assert { type: 'json' }
import { fileURLToPath } from 'url';

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = firstFile;
} else {
    unknownObject = secondFile;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);
let __fileName = fileURLToPath(import.meta.url)
console.log(`Path to current file is ${__fileName}`);
console.log(`Path to current directory is ${dirname(__fileName)}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export default {
    unknownObject,
    myServer,
};

