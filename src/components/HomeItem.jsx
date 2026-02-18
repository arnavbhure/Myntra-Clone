import { useDispatch, useSelector } from "react-redux";
import { bagSummaryActions } from "../store/BagSummarySlice";

const HomeItems = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bagSummary);
  const elementFound = bagItems.includes(item.id);

  const handleOnAddtoBag = () => {
    dispatch(bagSummaryActions.addItemToBag(item.id));
  };
  const handleOnRemoveFromBag = () => {
    dispatch(bagSummaryActions.removeItemToBag(item.id));
  };

  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {!elementFound ? (
          <button
            className="btn-add-bag btn btn-success"
            onClick={handleOnAddtoBag}
          >
            Add to Bag
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-danger btn-add-bag"
            onClick={handleOnRemoveFromBag}
          >
            Remove
          </button>
        )}
      </div>
    </>
  );
};

export default HomeItems;
