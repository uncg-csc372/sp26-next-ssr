import productModel from "../../../../model/productModel";
import '../../products.css';

export default async function ProductTypePage({ params }) {

  const { slug } = await params;
  let products = await productModel.getProductsByType([slug]);
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
              <p>Type: {product.type}</p>
              <p>Description: {product.description}</p>
              <p><a className="btn btn-primary" href={`/products/${product.id}`}>View</a></p>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}