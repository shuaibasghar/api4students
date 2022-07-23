const orderStatusValues = ['PROCESSING', 'PACKED', 'DISPATCHED', 'DELIVERED', 'CANCELLED', 'RETURNED'];

const OrderStatus = ({ currentStatus, updateOrderStatus, order }) => {
 
  return (
    <>
      <select
        class="form-select"
        value={currentStatus}
        onChange={e => updateOrderStatus(order, e.target.value)}
      >
        {orderStatusValues.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
    </>
  );
};

const ActionButtons = ({ deleteOrder, order }) => {
  return (
    <>
      <button className="btn btn-sm btn-danger" onClick={() => deleteOrder(order)}>
        delete{" "}
      </button>
    </>
  );
};

function OrdersTable({ orders, deleteOrder, updateOrderStatus }) {
  return (
    <table className="table border border-2">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Mobile</th>
          <th scope="col">Address</th>
          <th scope="col">Products</th>
          <th scope="col">Total</th>
          <th scope="col">Status</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>

      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td scope="row" className="text-decoration-none text-dark">
              {order.id}
            </td>
            <td>{order.name}</td>
            <td>{order.mobile}</td>
            <td>{order.address}</td>
            <td>{order.product}</td>
            <td>{order.total}</td>
            <td>
              {" "}
              <OrderStatus
                order={order}
                currentStatus={order.status}
                updateOrderStatus={updateOrderStatus}
              />{" "}
            </td>
            <td>
              <ActionButtons deleteOrder={deleteOrder} order={order} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default OrdersTable;
