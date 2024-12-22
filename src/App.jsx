import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const fetchApi = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <h2 className="font-bold">Welcome to products store!</h2>
        <button className="rounded" onClick={fetchApi}>
          Fetch
        </button>
        <div className="products-list grid grid-cols-6 gap-8">
          {data &&
            data.map((el) => (
              <div className="product-card border border-solid border-neutral-100 cursor-pointer">
                <div className="product-img p-4">
                  <img src={el.image} className="w-full h-40 object-contain" />
                </div>
                <div className="product-desc bg-neutral-50 py-3">
                  <div className="product-name truncate mb-2 font-bold">
                    {el.title}
                  </div>
                  <div className="product-price">
                    {el.price.toLocaleString("en-IN", {
                      style: "currency",
                      currency: "INR",
                    })}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
