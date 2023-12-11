import { useEffect, useState } from "react";
import Navber from "../../component/Navber/Navber";
import YourOrderCard from "./YourOrderCard";
import './YourOrderCard.css'
 

const YourOrder = () => {

    const [orderd, setOrderd] = useState([]);
    const [noFound, setNoFound] = useState(false);


    useEffect(()=>{
        const orderItem = JSON.parse(localStorage.getItem('order'));
        if(orderItem){
            setOrderd(orderItem);
        }
        else{
            setNoFound('No Data Found');
        }
    },[])


    return (
        <div className=" styleYourOrderCard h-[100vh]">
            <Navber/>
            <div className="max-w-[1300px] mx-auto ">
            <div >
            {noFound ? <p className="text-3xl text-white text-center justify-center font-bold  mt-32">{noFound}</p> :
            
                
                 <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 px-4 gap-6 md:pt-20 pt-10">
                    {
                        orderd.map(card =><YourOrderCard key={card.id} card={card}></YourOrderCard> )
                    }
                 </div>
               
            
            }
            </div>
            </div>
        </div>
    );
};

export default YourOrder;