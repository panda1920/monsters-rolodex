import React from 'react';

import './cardlist.styles.css';
import Card from '../card/card.component';

export default function CardList(props) {
  return (
    <div className='cardlist'>
      {props.monsters.map(
        monster => <Card key={monster.id} monster={monster}/>
      )}
    </div>
  );
}