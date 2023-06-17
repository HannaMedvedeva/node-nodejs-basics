import { promises as fs } from 'fs'
import { checkIfExist } from './utils/checkIfExists.js'

const PATH = './src/fs/files'

const list = async () => {
    const isExist = await checkIfExist(PATH)
    if (!isExist) throw new Error('FS operation failed')

    try {
        const files = await fs.readdir(PATH)
        files.forEach(file => console.log(file));
    } catch {
        throw new Error('FS operation failed')
    }
};

await list();
