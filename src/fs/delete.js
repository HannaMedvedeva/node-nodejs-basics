import { promises as fs } from 'fs'
import { checkIfExist } from './utils/checkIfExists.js'

const PATH = './src/fs/files/fileToRemove.txt'

const remove = async () => {
    const isExist = await checkIfExist(PATH)
    if (!isExist) throw new Error('FS operation failed')

    try {
        await fs.unlink(PATH)
    } catch {
        throw new Error('FS operation failed')
    }
};

await remove();
