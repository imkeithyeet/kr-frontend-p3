
function MenuItem({ name, img_url, spice}) {
 
  
    return (
      
      <li className="card">
        <img height="190px" src={img_url} alt={name} />
        <h4>{name}</h4>
        <p>Spice: {spice}</p>
      </li>
    );
  }
  
  export default MenuItem;