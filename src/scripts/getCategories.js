import { log } from 'node:console'
import * as fs from 'node:fs/promises';
import { pathToCategories} from '../data/read-file.js'
export const getCategories = async () => {
    const dataCat = await fs.readFile(pathToCategories, 'utf-8');
    const categories = JSON.parse(dataCat)
    return categories
}

log(await getCategories())