import React from 'react';
import './Cards.css';
import CardItemBlack from './CardItemBlack';

function CardsBlack() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItemBlack
              src='images/paper.png'
              text="A Demonstration of Mechanic Maker: An AI for Mechanics Co-Creation — Published at AAAI Conference on AI and Interactive Digital Entertainment (AIIDE)"
              label='AAAI / AIIDE 2021'
              path="https://ojs.aaai.org/index.php/AIIDE/article/view/7450/7349"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsBlack;
