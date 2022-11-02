import React from 'react'
import Item from './Item'

function ItemListContainer(props) {
  return (
    <div>
        <h1>{props.greeting}</h1>
        
        <Item
          imgurl="https://images.ctfassets.net/s5n2t79q9icq/3jY3utIFxSyBAbHSVWf2xn/386e373a22ef12623b30b4f86b2c5f0e/PJCNG48G7g_en.png?fm=webp"
          title="Mazo"
          price={100}
          />

        <Item
          imgurl="https://images.ctfassets.net/s5n2t79q9icq/5bPF5O6tV1lSkxUc4xPHXj/df059a81afc495b7e3261bad1975d202/qDxXlO7Jkl_en.png?fm=webp"
          title="Caja"
          price={200}
        />
    </div>
  );
}

export default ItemListContainer