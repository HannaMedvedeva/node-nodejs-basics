import { createReadStream } from 'fs'
const PATH = './src/streams/files/fileToRead.txt'

const read = async () => {
    const readableStream = createReadStream(PATH);

    readableStream.on('data', (chunk) => {
        process.stdout.write(chunk)
    })
};

await read();
