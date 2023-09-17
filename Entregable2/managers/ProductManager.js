const fs = require('fs')

class ProductManager {
    constructor(path) {
        this.path = path
    }
    
    getProducts = async () => {
        try {
            if (fs.existsSync(this.path)) {
                const data = await fs.promises.readFile(this.path, 'utf-8');
                const products = JSON.parse(data);
                return products
            } else {
                return [];
            }
        } catch (error) {
            console.log(error);
        }
    }

    addproduct = async (product) => {
        try {
            // 1er punto: obtener todos los usuarios que tenga almacenado hasta el momento.
            const products = await this.getProducts();

            if (products.length === 0) {
                product.id = 1;
            } else {
                product.id = products[products.length - 1].id + 1;
            }

            products.push(product);

            await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'))

            return products;

        } catch (error) {
            console.log(error);
            console.log('mi error');
        }
    }

    getProductById = async (id) => {
        const productosCargados = await this.getProducts()
        const getProductById = 'Producto obtenido por id:' + JSON.stringify(productosCargados[id - 1])
        console.log(getProductById);
        // console.log(`Productos buscado por id: ${productosCargados[id]}`);

    }
}




module.exports = {
    ProductManager
}