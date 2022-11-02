import React from 'react'
import "./item.css"

function Item(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.imgurl} alt={props.title}/>
        </div>
        <div className="card-detail">
        <h3>{props.title}</h3>
        <h3>{props.price}</h3>
      </div>
    </div>
  );
}

export default Item