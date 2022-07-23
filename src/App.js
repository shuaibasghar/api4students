import {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import Header from "./components/Header";
import Home from "./pages";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";

function App() {
  let [orders, setOrders] = useState([]);

  const onPlaceOrder = (order) => {
// console.log(order)
    const copyOrders = [...orders];
    
    const newOrder = { ...order, id: orders.length + 1, status: "PROCESSING" };
    copyOrders.push(newOrder);
    setOrders(copyOrders);
  }

  const deleteOrder = (order) => {
    // console.log(order)
    setOrders(orders.filter(o => o.id !== order.id));
  }

  const updateOrderStatus = (order, newStatus) => {
    let copyOrders = [...orders ];
    let index = copyOrders.findIndex(o => o.id === order.id);
    copyOrders[index] = { ...order, status: newStatus };
    setOrders(copyOrders);
    
  }


  return (
    <>
      <Header />
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route
          path="/orders"
          element={
            <Orders
              orders={orders}
              deleteOrder={deleteOrder}
              updateOrderStatus={updateOrderStatus}
            />
          }
        />
        <Route
          path="/checkout/:id"
          element={<Checkout onPlaceOrder={onPlaceOrder} />}
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
