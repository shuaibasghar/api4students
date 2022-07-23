import React from "react";
import OrderTable from "../components/OrderTable";

function Orders({ orders, deleteOrder, updateOrderStatus }) {
  return (
    <div className="container">
      <h1> Orders Info </h1>
      {orders.length > 0 ? (
        <OrderTable
          orders={orders}
          deleteOrder={deleteOrder}
          updateOrderStatus={updateOrderStatus}
        />
      ) : (
        <h4 className="text-danger">No orders received yet!</h4>
      )}
    </div>
  );
}

export default Orders;
