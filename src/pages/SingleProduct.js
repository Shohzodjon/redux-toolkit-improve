import { Link, useParams } from "react-router-dom";
import products from "../data";
const SingleProduct = () => {
  const { productId } = useParams();
  const singleProduct = products.find((item) => item.id === productId);
  return (
    <section className="section product">
      <h2>{singleProduct.name}</h2>
      <img src={singleProduct.image} />
      <Link to="/product" className="btn">
        Back to products
      </Link>
    </section>
  );
};

export default SingleProduct;
