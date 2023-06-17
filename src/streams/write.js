import { createWriteStream } from 'fs'
const PATH = './src/streams/files/fileToWrite.txt'

const write = async () => {
    const writableStream = createWriteStream(PATH);

    process.stdin.pipe(writableStream);

    process.stdin.resume();
};

await write();
