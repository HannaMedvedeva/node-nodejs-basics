import { createReadStream, createWriteStream } from 'fs'
import { pipeline } from 'stream'
import { promisify } from 'util'
import { createGzip } from 'zlib'

const READ_PATH = './src/zip/files/fileToCompress.txt'
const WRITE_PATH = './src/zip/files/archive.gz'


const compress = async () => {
    const gzip = createGzip();
    const readable = createReadStream(READ_PATH)
    const writable = createWriteStream(WRITE_PATH)

    const pipe = promisify(pipeline)

    try {
        await pipe(readable, gzip, writable)
    } catch {
        console.error('cannot compress file: ', err)
        process.exitCode = 1
    }
};

await compress();
