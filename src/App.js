import { useEffect, useState } from "react";
import ProductData from "./components/ProductData";

const API = "http://0.0.0.0:8080/api/v1/product";

const App = () => {

  const [products, setProducts] = useState([]);

  const fetchProducts = async(url) => {
    try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        if(data.length > 0){
          setProducts(data);
        }
    } catch (e){
        console.error(e);
    }
  }

  useEffect(() => {
    fetchProducts(API);
  }, []);

  return (
    <div className="table-container">
    <table>
      <thead>
        <tr>
        <th>Product</th>
        <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <ProductData products = {products}/>
      </tbody>
    </table>
    </div>
  );
};

export default App;
