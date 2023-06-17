import { promises as fs } from 'fs'

export const checkIfExist = async (path) => {
    try {
        await fs.access(path)
        return true
    } catch {
        return false
    }
}
