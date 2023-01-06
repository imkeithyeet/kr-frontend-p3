import React,{useState, useEffect} from "react";
import MenuList from "./MenuList";
import Search from "./Search";
const API="http://localhost:9393/foods"

function MenuPage() {
  const [foods,setFoods]=useState ([])
  const [search, setSearch] = useState('')

  useEffect(() =>{
    fetch(API)
    .then(res=>res.json())
    .then (data=>setFoods(data))
  },[])
  const displayedFoods = foods.filter((food) => {
    console.log(food)
    return food.name.toLowerCase().includes(search.toLowerCase());
  })


  
  return (
    
    <main>
      <Search search ={search} setSearch={setSearch}/>
      <MenuList foods={displayedFoods}/>
    </main>
  );
}

export default MenuPage;