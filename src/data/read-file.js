import * as fs from 'node:fs/promises';
import path from 'node:path';

export const pathToCategories = path.resolve('src', 'data', 'categories.json');
export const pathToProducts = path.resolve('src', 'data', 'products.json');
/* export const dataCat = await fs.readFile(pathToCategories, 'utf-8');
export const dataProd = await fs.readFile(pathToProducts, 'utf-8'); */