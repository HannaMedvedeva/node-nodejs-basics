import { createReadStream, createWriteStream } from 'fs'
import { pipeline } from 'stream'
import { promisify } from 'util'
import { createUnzip } from 'zlib'

const WRITE_PATH = './src/zip/files/fileToCompress.txt'
const READ_PATH = './src/zip/files/archive.gz'

const decompress = async () => {
    const unzip = createUnzip();
    const readable = createReadStream(READ_PATH)
    const writable = createWriteStream(WRITE_PATH)

    const pipe = promisify(pipeline)

    try {
        await pipe(readable, unzip, writable)
    } catch {
        console.error('cannot compress file: ', err)
        process.exitCode = 1
    }
};

await decompress();
