import React from 'react';
import { Link } from 'react-router-dom';

function CardItemBlack(props) {
  return (
    <>
      <li className='cards__item'>
        <a className='cards__item__link' href={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text__white'>{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItemBlack;