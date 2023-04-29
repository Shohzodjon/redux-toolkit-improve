import { Link } from "react-router-dom";
import products from "../data";
const Products = () => {
  return (
    <section className="section">
      <h2>Products list</h2>
      {products.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <Link to={`/product/${item.id}`} className="btn">
            Product details
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Products;
