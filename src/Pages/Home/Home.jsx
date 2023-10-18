import { useEffect } from "react";
import Banner from "../../Components/Banner/Banner";
import Brands from "../../Components/BrandsName/Brands";
import Aos from "aos";
import 'aos/dist/aos.css';
import OurPackeges from "../../Components/OurPackege/OurPackeges";
import AboutCars from "../../Components/AboutCars/AboutCars";

const Home = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <OurPackeges></OurPackeges>
            <AboutCars></AboutCars>
        </div>
    );
};

export default Home;