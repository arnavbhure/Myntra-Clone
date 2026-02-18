import { useSelector } from "react-redux";
import EmptyBagMessage from "./EmptyBagMessage";

const BagSummary = () => {
  const BagItems = useSelector((store) => store.bagSummary);
  const CONVENIENCE_FEES = 99;
  const items = useSelector((store) => store.items);
  const bagFullItems = items.filter((item) => BagItems.includes(item.id));

  const totalMRP = bagFullItems.reduce(
    (total, item) => total + item.original_price,
    0,
  );

  const totalDiscount = bagFullItems.reduce(
    (total, item) => total + (item.original_price - item.current_price),
    0,
  );

  const finalPayment =
    totalMRP - totalDiscount + (BagItems.length > 0 ? CONVENIENCE_FEES : 0);
  return (
    <>
      <div className="flexContainerBagSummary">
        <div className="bag-details-container">
          <div className="price-header">
            PRICE DETAILS ({BagItems.length} Items)
          </div>
          <div className="price-item">
            <span className="price-item-tag">Total MRP</span>
            <span className="price-item-value">₹{totalMRP}</span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Discount on MRP</span>
            <span className="price-item-value priceDetail-base-discount">
              -₹{totalDiscount}
            </span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Convenience Fee</span>
            <span className="price-item-value">
              ₹{BagItems.length > 0 ? CONVENIENCE_FEES : 0}
            </span>
          </div>
          <hr />
          <div className="price-footer">
            <span className="price-item-tag">Total Amount</span>
            <span className="price-item-value">₹{finalPayment}</span>
          </div>
        </div>
        <span className="place-order-buuton-flex">
          <button className="btn-place-order">
            <div className="css-xjhrni">PLACE ORDER</div>
          </button>
        </span>
      </div>
    </>
  );
};

export default BagSummary;
