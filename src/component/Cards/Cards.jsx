/* eslint-disable react/prop-types */


import Card from "./Card";
import './Cards.css'

const Cards = ({ cards }) => {

    return (
        <div className="m styleCards pb-20">
            <div className="max-w-[1300px] mx-auto">

                <h2 className="text-5xl text-center font-bold pt-20 mb-10 text-white">Our Services</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-between gap-4 px-5 ">
                    {
                        cards.map(card => <Card key={card.id} card={card}></Card>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Cards;