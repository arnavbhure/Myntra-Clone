import style from "./EmptyBagMessage.module.css";

const EmptyBagMessage = () => {
  return (
    <>
      <div className={style.EmptyMessage}>
        <h2>Bag is Empty !</h2>
        <p>Add Items to Bag to Complete Checkout</p>
      </div>
    </>
  );
};

export default EmptyBagMessage;
