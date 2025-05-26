import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const ProductDetail = () => {
  const { id } = useParams(); // get product id from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <p>Loading product...</p>;

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ maxWidth: "200px" }} />
      <p><strong>Price:</strong> ${product.price}</p>
      <p style={{ maxWidth: "500px" }}><strong>Description:</strong> {product.description}</p>
      <br />
      <Link to="/"><button>Back to Home</button></Link>
    </div>
  );
};

export { ProductDetail };
