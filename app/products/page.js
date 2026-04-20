import productsModel from '../../model/productModel';
import './products.css';
import DeleteProductButton from './DeleteProductButton';
export default async function ProductsPage() {

  let products = await productsModel.getAllProducts();
  return (
    <div>
      <main className="items-container">
        {products.map(product => (
          <article className="item" key={product.id}>
            <div className="text">
              <h3>
                {product.id}: {product.name}
              </h3>
              <p>${product.price}</p>
              <p>Type: <a href={`/products/type/${product.type}`}> {product.type}</a></p>
              <p>Description: {product.description}</p>
              <p className="detail-button"><a href={`/products/${product.id}`}>View</a></p>
              <DeleteProductButton productId={product.id} />
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}
