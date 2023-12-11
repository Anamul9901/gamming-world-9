import { useLoaderData } from "react-router-dom";
import Footer from "../../component/Footer/Footer";
import Navber from "../../component/Navber/Navber";
import Cards from "../../component/Cards/Cards";
import Banner from "../../component/Banner/Banner";
import Streamer from "../../component/Streamer/Streamer";
import NextMatch from "../../component/NextMatch/NextMatch";

 

const Home = () => {
    const cards = useLoaderData();
    return (
        <div>
            <Navber/>
            <Banner/>
           <Cards cards={cards}></Cards>
           <Streamer/>
           <NextMatch/>
            <Footer/>
        </div>
    );
};

export default Home;