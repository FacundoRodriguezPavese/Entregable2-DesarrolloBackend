const { ProductManager } = require('./managers/ProductManager')

const productManager = new ProductManager('./files/Productos.json')

const env1 = async () => {
    try {
        const products = await productManager.getProducts();

        const product = {
            title: 'Remera',
            description: 'Remera lisa',
            price: 3000,
            thumbnail: 'Sin imagen',
            stock: 10,
        }

        await productManager.addproduct(product);
        await productManager.getProductById(1)

        const productosCargados = await productManager.getProducts();

        console.log(productosCargados);
        
    } catch (error) {

    }
}

env1()