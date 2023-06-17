import { promises as fs } from 'fs'
import { checkIfExist } from './utils/checkIfExists.js'

const SRC_PATH = './src/fs/files/wrongFilename.txt'
const DIST_PATH = './src/fs/files/properFilename.md'


const rename = async () => {
    const isSrcExist = await checkIfExist(SRC_PATH)
    const isDistExist = await checkIfExist(DIST_PATH)

    if (!isSrcExist || isDistExist) throw new Error('FS operation failed')

    try {
        await fs.rename(SRC_PATH, DIST_PATH)
    } catch {
        throw new Error('FS operation failed')
    }
};

await rename();
