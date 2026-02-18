import "../../App.css";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import FetchItems from "../fetchItems";
import LoadingSpinner from "../LoadingSpinner";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyfetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
