import { pathToProducts } from '../data/read-file.js'
import { log } from 'node:console'
import * as fs from 'node:fs/promises';
import { getCategories } from './getCategories.js';
const getProducts = async () => {
    const dataProd = await fs.readFile(pathToProducts, 'utf-8');
    const products = JSON.parse(dataProd);

    const categories = await getCategories();
    const productsWithCategories = products.map(product => {
        const categoryId= product.category
        const productCategory = categories.find(category=> category.id === categoryId)
        return{
                ...product,
                category: productCategory.name
        }
    })
    return productsWithCategories
}

log(await getProducts())