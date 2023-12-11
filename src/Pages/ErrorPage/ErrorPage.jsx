import { Link } from "react-router-dom";
import '../../Pages/MoreTowRout/YourOrderCard.css'

 

const ErrorPage = () => {
    return (
        <div className="flex styleYourOrderCard text-center h-[100vh] items-center justify-center text-white">
            <div>
            <h2 className="text-4xl font-bold mb-2">Opps!!</h2>
            <p className="text-3xl font-semibold mb-4">No data found</p>
            <Link to='/'><button className="btn btn-sm btn-secondary font-bold text-white">Back Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;