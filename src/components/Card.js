import React from 'react';
import './card.css';
import star from '../assets/star.png'
import favorite from '../assets/favorite_border.png'

const Card = ({ image, name, category, rating, amount }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <p className='name'>{name}</p>
      <p>{category}</p>
      <p className='ratetext'><img src={star} alt='star' className='starimg'/> {rating}</p>
      <p className='amount'>{amount}</p>
      <div className="buttons">
        <button className='button1'>+ Add to Cart</button>
        <button className='button2'><img src={favorite} alt='favorite'/></button>
      </div>
    </div>
  );
};

export default Card;
