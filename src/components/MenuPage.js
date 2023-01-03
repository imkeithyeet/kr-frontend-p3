import React,{useState, useEffect} from "react";
import MenuList from "./MenuList";
import Search from "./Search";
// import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';
const API="http://localhost:3000/foods"

function MenuPage() {
  const [foods,setFoods]=useState ([])
  const [search, setSearch] = useState('')

  useEffect(() =>{
    fetch(API)
    .then(res=>res.json())
    .then (data=>setFoods(data))
  },[])
  const displayedFoods = foods.filter((food) => {
    return food.title.toLowerCase().includes(search.toLowerCase());
  })

  // function valuetext(value: number) {
  //   return `${value}°C`;
  // }
  
  return (
    
    <main>
       {/* <Box sx={{ width: 300 }}></Box> */}
       
      <Search search ={search} setSearch={setSearch}/>
      <MenuList foods={displayedFoods}/>
    </main>
  );
}

export default MenuPage;