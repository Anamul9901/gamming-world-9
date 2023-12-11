/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";



const Card = ({ card }) => {
    const { id, name, image, price, description } = card
    // console.log(card)
    return (
        <div>
            <div   className=" card glass flex-row rounded-xl   text-white shadow-1xl">
                <div className="relative  md:w-2/5 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none  ">
                    <img
                        src={image}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-2">
                     

                    <div className="ml-1">
                        <h4 className="md:text-2xl text-xl font-semibold">
                            {name}
                        </h4>
                    </div>
                    <div className="ml-1 ">
                        <h2  className="text-base font-semibold">{price}.00</h2>
                    </div>
                    <div className="ml-1 text-gray-300">
                        {
                           description.length > 50 && <div>{description.slice(0,50)}...</div>
                        }
                    </div>
                   
                        <div className=" mt-2 ml-1">
                        <Link to={`/card/${id}`}>
                        <button 
                             className="btn btn-sm glass text-white  font-semibold">Details</button></Link>
                        </div>
                   
                
                </div>
            </div>
        </div>
    );
};

export default Card;