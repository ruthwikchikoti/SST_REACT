import './ProductCard.css';
import ReduxAddToCart from '../ReduxAddToCart';
import { useRef, useState } from 'react';
import logo1 from '../../assests/logo1.png';
function ProductCard({ product }) {
  var a = 10;
  a = a + 1;
  let pRef = useRef(0);
  let iRef = useRef(0);
  let oRef = useRef(0);
  let [inputV, setInputV] = useState('');
  console.log("pc", product.id)

  function printTitle() {

    if (pRef.current.style.display === "none") {
      pRef.current.style.display = "block";
    } else {
      pRef.current.style.display = "none";
    }
  }
  function displayOutput(e) {
    // console.log(iRef.current);
    // console.log(oRef.current);
    // oRef.current.innerText = `Output here: ${ iRef.current.value }`;
    // oRef.current.innerText = oRef.current.innerText + iRef.current.value;
    setInputV(e.target.value);
  }

  return (
    <div className="product-card">
      <p onClick={printTitle}> {product.title}</p>
      <p ref={pRef}> {product.price.value}</p>
      <img   className='img-logo' src={logo1} />
      <input type="text" onChange={displayOutput} ref={iRef} value={inputV} />
      <p ref={oRef}>Over here the output would arrive - {inputV}</p>
      <ReduxAddToCart product={product} />
    </div>
    )
  }
  
export default ProductCard;
  

