class ProductManager {
    constructor() {
      this.products = [];
      this.productIdCounter = 1;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.error("Todos los campos son obligatorios");
        return;
      }
  
      if (this.products.some(product => product.code === code)) {
        console.error("El código del producto ya existe");
        return;
      }
  
      const newProduct = {
        id: this.productIdCounter++,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      };
  
      this.products.push(newProduct);
      console.log("Producto agregado:", newProduct);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
  
      if (product) {
        return product;
      } else {
        console.error("Not found");
      }
    }
  }
  
  //Testing
  const productManager = new ProductManager();
  
  productManager.addProduct("Producto 1", "Descripción 1", 200, "imagen1.jpg", "ABC123", 25);
  productManager.addProduct("Producto 2", "Descripción 2", 250, "imagen2.jpg", "ABC124", 30);
  productManager.addProduct("Producto 3", "Descripción 3", 300, "imagen3.jpg", "ABC124", 35); //Producto con código repetido
  productManager.addProduct("Producto 4", "Descripción 4", "imagen4.jpg", "ABC126", 40); //Producto con un campo no completado
  productManager.addProduct("Producto 5", "Descripción 5", 400, "imagen5.jpg", "ABC127", 45);
  
  console.log("Todos los productos:", productManager.getProducts());
  
  const productIdToSearch = 2;//Reemplazar para buscar
  const foundProduct = productManager.getProductById(productIdToSearch);
  console.log(`Producto con ID ${productIdToSearch}:`, foundProduct);