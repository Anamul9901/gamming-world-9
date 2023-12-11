

const YourOrderCard = (card) => {
    console.log(card.card.name)
    return (
        <div className=''>
          <div className="pt-5 text-white">
                <div className="card glass">
                    <figure><img className="w-full h-[250px]" src={card.card.image} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{card.card.name}</h2>
                        <p>Price: {card.card.price}.00</p>
                         
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourOrderCard;