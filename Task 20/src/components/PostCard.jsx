import React from 'react';
import { Link } from 'react-router-dom';
import "/src/styles/postcard.css";

export default function PostCard({ title, price, id, img, description }) {

  return (
    <div className="post_card">
      <img src={img} alt={title} />
      
      <div className="details">
        <Link to={`/posts/category/${id}/${title}`}>
          <h4>{title}</h4>
        </Link>
        <p>${price}</p>
        <input type="text" value={id} readOnly />
        <button>Add to Cart</button>

        <h3>Product Details</h3>
        <p>{description}</p> 

        
      </div>
    </div>
  );
}
