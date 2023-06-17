import { promises as fs } from 'fs'
import { checkIfExist } from './utils/checkIfExists.js'

const PATH = './src/fs/files/fileToRead.txt'

const read = async () => {
    const isExist = await checkIfExist(PATH)
    if (!isExist) throw new Error('FS operation failed')

    try {
        const text = await fs.readFile(PATH, { encoding: 'utf8' })
        console.log(text)
    } catch {
        throw new Error('FS operation failed')
    }
};

await read();
