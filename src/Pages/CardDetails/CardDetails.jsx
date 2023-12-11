import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardDetail from "./CardDetail";
import Navber from "../../component/Navber/Navber";


const CardDetails = () => {
    const [page, setPage] = useState({});

    const {id } = useParams();
    // console.log(id);
    const idInt = parseInt(id);
    // console.log(idInt)

    const cards = useLoaderData();

    useEffect(() =>{
        const cardFind = cards?.find(card => card.id === idInt);
        setPage(cardFind);
    },[cards, idInt])

    return (
        <div>
            <Navber/>
            <CardDetail page={page}></CardDetail>
        </div>
    );
};

export default CardDetails;