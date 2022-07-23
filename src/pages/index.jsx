import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-100">
      <h1 className="text-center">Welcome to My online Shop</h1>
      <Link to="/shop" className="d-block text-danger text-center">Go to Shop</Link>
    </div>
  );
}
