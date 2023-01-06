import React from "react";
import MenuItem from "./MenuItem";

function MenuList({foods}) {

    const mappedFoods= foods?.map((food) => {
      return <MenuItem
       key={food.id}
       name={food.name}
       img_url={food.img_url}
       spice={food.spice}
       />
    })

  return (
    <div>
        <ul className="cards">{mappedFoods}</ul>
    </div>
  );
}

export default MenuList;