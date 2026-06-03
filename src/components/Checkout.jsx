import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { formatCurrency } from "../util/currencyFormatter";
import Input from "./UI/Input";
import Button from "./UI/Button";
import Error from "./Error";
import UserProgressContext from "../store/UserProgressContext";
import useHttp from "../Hooks/useHttp";
export default function Checkout() {
  const requestConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    clearData
  } = useHttp("http://localhost:3000/orders", requestConfig);
  const cartTotal = cartCtx.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  function handleClose() {
    userProgressCtx.hideCheckout();
  }
  function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const customerData = Object.fromEntries(fd.entries());
    console.log(customerData);
    sendRequest(
      JSON.stringify({
        order: {
          customer: customerData,
          items: cartCtx.items,
        },
      }),
    );
  }
  function handleFinish(){
    userProgressCtx.hideCart();
    cartCtx.clearCart();
    clearData();
  }
  let actions = (
    <>
      <Button type="button" textOnly onClick={handleClose}>
        Close
      </Button>
      <Button>Place Order</Button>
    </>
  );
  if(isSending){
    actions = <p>Sending order data...</p>
  }
  if(data && !error){
    return (<Modal open={userProgressCtx.progress === "checkout"} onClose={handleFinish}>
      <h2>Success!</h2>
      <p>Your order has been placed Successfully.</p>
      <p>We will notify you once your order is being processed.</p>
      <p className="modal-actions">
        <Button onClick={handleFinish}>Okay</Button>
      </p>
    </Modal>
    )
  }
  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {formatCurrency.format(cartTotal)}</p>
        <Input label="Full Name" id="name" type="text" />
        <Input label="E-mail Address" id="email" type="email" />
        <Input label="Street" id="street" type="text" />
        <div className="control-row">
          <Input label="Postal Code" id="postal-code" type="text" />
          <Input label="City" id="city" type="text" />
        </div>
        {error && <Error title="Failed to place order" message={error} />}
        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}
