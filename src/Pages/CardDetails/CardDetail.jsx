/* eslint-disable react/prop-types */
import './CardDetails.css'

import { Link } from "react-router-dom";
import swal from "sweetalert";

const CardDetail = ({ page }) => {
    const {id, name, image, price, description } = page;
    // console.log(page);

    const handleGetItNow = () => {
       



        const addedOrderArray = [];
        const orderItem = JSON.parse(localStorage.getItem('order'));

        if(!orderItem){
            addedOrderArray.push(page);
            localStorage.setItem('order', JSON.stringify(addedOrderArray));
            swal("Good job!", "You get this item successfully!", "success")
        }
        else{
            const isExist = orderItem.find(card => card.id === id);
            if(!isExist){
                addedOrderArray.push(...orderItem, page);
                localStorage.setItem('order', JSON.stringify(addedOrderArray));
                swal("Good job!", "You get this item successfully!", "success")
            }
            else{
                swal("Opps!", "You alrady get this item!", "error")
            }
        }
    }

    return (
        <div className="flex justify-center h-[100vh] items-center p-4 pb-8 styleDetailsCard ">
            <div className="relative flex max-w-[50rem] flex-col rounded-xl card glass bg-clip-border text-white shadow-md  ">
                <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-white shadow-none">
                    <img className="w-full rounded-t-lg"
                        src={image}
                        alt="ui/ux review check"
                    />
                </div>
                <div className="p-6 mt-3">
                    <div className="flex items-center justify-between">
                        <h4 className="md:text-4xl text-2xl font-bold text-white">
                            {name}
                        </h4>
                        <p className="text-xl font-semibold">{price}.00</p>
                    </div>
                    <p className="text-base font-normal text-white mt-5">
                        {description}
                    </p>
                    <p className="flex justify-end">
                        <Link to='/'><button onClick={handleGetItNow} className="btn glass font-bold text-white mt-4">Get it now</button></Link>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default CardDetail;