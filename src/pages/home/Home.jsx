import "./home.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Feedpost from "../../components/feedpost/Feedpost";
import Rightbar from "../../components/rightbar/Rightbar";
import Logout from "../logout/Logout";

const Home = () => {
  return (
    <div>
      <Header />
      

      <div className="homeContainer">
        <Sidebar />
        <Feedpost />
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;


      // <Logout />
