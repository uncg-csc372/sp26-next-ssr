import productsModel from '../../model/productModel';
export default function getAllProducts() {
  return productsModel.getAllProducts();
}

export function getProductById(id) {
  return productsModel.getOneProductById(id);
}

export function getProductsByType(type) {
  return productsModel.getProductsByType([type]);
}

export function deleteProduct(id) {
  return productsModel.deleteProduct(id);
}

export function addProduct(name, type, price, description) {
  return productsModel.addProduct(name, type, price, description);
}



