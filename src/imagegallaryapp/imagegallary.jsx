import React,{useState,useEffect} from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./imagegallery.css"

function Imagegallary() {
const [search,setSearch] = useState('');
const [data,setData] = useState([]);
const [actualdata,setActualdata] = useState([]);
const [showActualData, setShowActualData] = useState(true);
const [navdata,setNavdata] = useState([])
const product = search.toLowerCase();
const onchangehandler =(e)=>{
    setSearch(e.target.value)
}

useEffect(()=>{
  axios.get( `https://fakestoreapi.com/products`).then(response=>setActualdata(response.data))

},[])

const onSubmithandler =(e)=>{
    e.preventDefault()
 axios.get( `https://fakestoreapi.com/products/category/${product}`).then(response=>setData(response.data))
 
 setShowActualData(false);

}

const onClickhandler=(category)=>{
  setNavdata(category);
  console.log(navdata)
}

  return (
    <>
  
    <div className='container-fluid'>
        <header className='d-flex text-white justify-content-between p-2 bg-primary  w-100 '>
            <div className="d-flex align-items-center">
            <span className='h4'>kalyan store</span>
            <form onSubmit={onSubmithandler}>
            <input type='text' onChange={onchangehandler}/>
            <input type='submit'value="search" />
            </form>
            </div>
            <div>
            <span className="mx-2">Home</span>
          <span className="mx-2" onClick={() => onClickhandler("electronics")}>Electronics</span>
          <span className="mx-2" onClick={() => onClickhandler("Jewelery")}>Jewelery</span>
          <span className="mx-2" onClick={() => onClickhandler("men's clothing")}>Men's clothing</span>
          <span className="mx-2" onClick={() => onClickhandler("women's clothing")}>Women's clothing</span>

            </div>
            <div>
            <button className="bi bi-cart4 btn btn-warning position-relative">
            <span className="badge rounded position-absolute top-0 start-100 translate-middle bg-danger">
              0
            </span>
          </button>
          </div>
        </header>
        <div className='col-10 d-flex flex-wrap overflow-auto'>
  {data.map((items) => (
    <div key={items.id}>
      <div style={{ width: "auto" }}>
        {items.title}
        <br />
        price: {items.price.toLocaleString("en-in", { style: "currency", currency: "INR" })}
        <br />
      </div>
      <img src={items.image} alt={items.title} style={{ height: "200px" }} />
    </div>
  ))}
</div> 
{showActualData && (
<div className='col-10 d-flex flex-wrap overflow-auto' id='actualdata'>
  {actualdata.map((items) => (
    <div key={items.id}>
      <div style={{ width: "auto" }}>
        {items.title}
        <br />
        price: {items.price.toLocaleString("en-in", { style: "currency", currency: "INR" })}
        <br />
      </div>
      <img src={items.image} alt={items.title} style={{ height: "200px" }} />
    </div>
  ))}
</div>
)}
      </div>
    </>  
 );
}



export default Imagegallary;
