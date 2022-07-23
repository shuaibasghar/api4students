import { useParams, useNavigate } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import OrderSummary from "../components/OrderSummary";
import { getProductById } from "../services/products";

export default function Checkout({onPlaceOrder}) {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  let product = getProductById(id);

  const onSubmitOrder = (data) => {
    // console.log(data)
    const order = {
      name: data.username,
      mobile: data.phoneNumber,
      address: `${data.address}, ${data.city}, ${data.province}`,
      product: `1 x ${product.title}`,
      total: `Rs. ${product.price}`
    };
    onPlaceOrder(order);
    navigate('/orders');
    alert("Thanks for Placing Order!");
  }

  return (
    <>
      <div className="row mx-md-none mx-sm-3">
        <div className="col-md-4 d-flex align-items-center justify-content-center flex-column">
          <OrderSummary product={product}/>
        </div>

        <div className="col-md-8">
          <ContactForm onSubmitOrder={onSubmitOrder}/>
        </div>
      </div>
    </>
  );
}
