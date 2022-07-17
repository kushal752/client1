import { Button } from "@material-ui/core";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Success = () => {
  // const location = useLocation();
  // //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  // const data = location.state.stripeData;
  // const cart = location.state.cart;
  // const currentUser = useSelector((state) => state.user.currentUser);
  // const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();
  // useEffect(() => {
  //   const createOrder = async () => {
  //     try {
  //       const res = await userRequest.post("/orders", {
  //         userId: currentUser._id,
  //         products: cart.products.map((item) => ({
  //           productId: item._id,
  //           quantity: item._quantity,
  //         })),
  //         amount: cart.total,
  //         address: data.billing_details.address,
  //       });
  //       setOrderId(res.data._id);
  //     } catch {}
  //   };
  //   data && createOrder();
  // }, [cart, data, currentUser]);

  const handleNavigate = () => {
    console.log("navigate to home");
    navigate("/");
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`} */}
      "Your order has been placed"
      <Button onClick={handleNavigate}>
        <div style={{ padding: 10, marginTop: 20 }}>Go to Homepage</div>
      </Button>
    </div>
  );
};

export default Success;