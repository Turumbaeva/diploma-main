import { useContext } from "react";
import "./ProductList.css";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";
import AddProduct from "../AddProduct/AddProduct";
import DeleteProduct from "../DeleteProduct/DeleteProduct";
import CategoryList from "../CategoryList/CategoryList";

export default function ProductList({ category }) {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const { products } = useContext(AppContext);

  const output = products.filter(product => product.category === category.id)
    .map(products => (
      <div key={products.id} className="BoxList">
        <NavLink to={'/products/' + products.slug} onClick={scrollToTop}>
          <img src={products.picture} alt={products.name} />
          {products.name}
        </NavLink>
        <span className="span">{products.price} $</span>
        <AddToCart product={products} />
        <DeleteProduct product={products} />
      </div>
    ))

  return (
    <div className="ProductList container">
      <div className="Categoryin">
        <CategoryList />
      </div>
      <div className="Productin">
        <h1>{category.name}</h1>
        <div className="content">
          {output}
        </div>
        <AddProduct category={category} />
      </div>
    </div>
  )
}