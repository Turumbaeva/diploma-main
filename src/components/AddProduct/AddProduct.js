import { useContext, useState } from "react";
import { AppContext } from "../../App";
import { productsCollection, uploadProductPhoto } from "../../firebase";
import { addDoc } from "firebase/firestore";
import "./AddProduct.css";

export default function AddProduct({ category }) {
  const { user } = useContext(AppContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [picture, setPicture] = useState(null);
  const [info, setInfo] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!user || !user.isAdmin) {
    return null;
  }

  function onChangeName(event) {
    setName(event.target.value);
  }
  function onChangePrice(event) {
    setPrice(event.target.value);
  }
  function onChangePicture(event) {
    const file = event.target.files[0];
    setPicture(file);
  }
  function onChangeInfo(event) {
    setInfo(event.target.value);
  }

  function onFormSubmit(event) {
    event.preventDefault();

    if (!picture) {
      alert("Please upload an image");
      return;
    }

    setIsSubmitting(true);
    uploadProductPhoto(picture)
      .then((pictureUrl) =>
        addDoc(productsCollection, {
          category: category.id,
          name: name,
          price: price,
          picture: pictureUrl,
          info: info,
          slug: name.replaceAll(" ", "-").toLowerCase(),
        })
      )
      .then(() => {
        setName("");
        setPrice("");
        setPicture(null);
      })
      .catch((error) => {
        console.log("Failed to add product:", error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <div className="AddProduct">
      <form onSubmit={onFormSubmit} className="add-product-form">
        <h3 className="add-product-heading">Create a new product</h3>
        <label className="add-product-label">
          Name:
          <input
            type="text"
            value={name}
            name="name"
            onChange={onChangeName}
            required
          />
        </label>
        <label className="add-product-label">
          Price:
          <input
            type="number"
            value={price}
            name="price"
            onChange={onChangePrice}
            min={0}
            required
          />
        </label>
        <label className="add-product-label">
          Picture:
          <input
            type="file"
            name="picture"
            onChange={onChangePicture}
            required
          />
        </label>
        <label className="add-product-label">
          Info:
          <input
            type="text"
            value={info}
            name="info"
            onChange={onChangeInfo}
            required
          />
        </label>
        <button type="submit" disabled={isSubmitting} className="add-product-button">
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
