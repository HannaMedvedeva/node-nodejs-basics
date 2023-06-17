import crypto from 'crypto'
import { promises as fs } from 'fs'
const PATH = './src/hash/files/fileToCalculateHashFor.txt'

const calculateHash = async () => {
    const text = await fs.readFile(PATH)
    console.log(crypto.createHash('sha256').update(text).digest('hex'))
};

await calculateHash();
