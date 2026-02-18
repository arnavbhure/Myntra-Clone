import { useSelector } from "react-redux";
import BagSummary from "../../components/BagSummary";
import BagItems from "../BagItems";
import EmptyBagMessage from "../EmptyBagMessage";

const Bag = () => {
  const bagitems = useSelector((store) => store.bagSummary);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const itemIndex = bagitems.indexOf(item.id);
    return itemIndex >= 0;
  });

  if (bagitems.length === 0) {
    return <EmptyBagMessage />;
  }

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item) => (
            <BagItems item={item} key={item.id} />
          ))}
        </div>
        <div className="bag-summary">
          <BagSummary />
        </div>
      </div>
    </main>
  );
};

export default Bag;
