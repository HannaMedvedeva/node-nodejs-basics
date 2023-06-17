import { Transform, pipeline } from 'stream'

const transform = async () => {

    const readableStream = process.stdin
    const writableStream = process.stdout

    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            const reversedChunk = chunk.toString().split('').reverse().join('')
            this.push(reversedChunk)
            callback();
        },
    });

    pipeline(readableStream, reverse, writableStream, (err) => { throw new Error('streaming failed') })
};

await transform();
