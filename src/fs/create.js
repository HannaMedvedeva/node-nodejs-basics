import { promises as fs } from 'fs'
import { checkIfExist } from './utils/checkIfExists.js'

const PATH = './src/fs/files/fresh.txt'

const create = async () => {
    const isExist = await checkIfExist(PATH)
    if (isExist) throw new Error('FS operation failed')

    try {
        await fs.appendFile(PATH, 'I am fresh and young')
    } catch (e) {
        console.log(e)
        throw new Error('FS operation failed')
    }
};

await create();
