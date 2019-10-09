import React from 'react'

import './search-box.styles.css'

export default function SearchBox(props) {
  return (
    <input className='search' type='text' placeholder={props.placeholder} onChange={props.onChange}/>
  );
}