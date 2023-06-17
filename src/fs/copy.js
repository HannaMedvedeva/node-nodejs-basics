import { promises as fs } from 'fs'
import { checkIfExist } from './utils/checkIfExists.js'

const copy = async () => {
    const isSrcExist = await checkIfExist('./src/fs/files')
    const isDistExist = await checkIfExist('./src/fs/files_copy')

    if (!isSrcExist || isDistExist) throw new Error('FS operation failed')

    try {
        await fs.cp('./src/fs/files', './src/fs/files_copy', { recursive: true })
    } catch {
        throw new Error('FS operation failed')
    }
};

await copy();
