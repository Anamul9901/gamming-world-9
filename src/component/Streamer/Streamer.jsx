import './Streamer.css'

const Streamer = () => {
    return (
       <div className=" styleStramer">
         <div className="max-w-[1300px] mx-auto pb-20 pt-20">
            <h2 className="text-5xl font-bold  mb-10 text-center text-white">Top Streamer</h2>

            <div className="grid md:grid-cols-2 gap-2 grid-cols-1 lg:grid-cols-4 md:ml-32 ml-28">
                
                <div className="w-[60%] animat animat2">
                    <figure><img className="rounded-xl" src={'https://designmilitary.com/preview/landing-pages/MoGame/assets/images/top-player/top-player02.png'} alt="Shoes" /></figure>
                   
                    <div className="card-body items-center relative -mt-20 ">
                        <h2 className="card-title text-white ">FONDO DE</h2>
                    </div>
                    
                </div>
                <div className="w-[60%] animat animat2">
                    <figure><img className="rounded-xl" src={'https://designmilitary.com/preview/landing-pages/MoGame/assets/images/top-player/top-player04.png'} alt="Shoes" /></figure>
                    <div className="card-body items-center justify-end relative -mt-20">
                        <h2 className="card-title text-white">SHANOA</h2>
                    </div>
                </div>
                <div className="w-[60%] animat animat2">
                    <figure><img className="rounded-xl" src={'https://designmilitary.com/preview/landing-pages/MoGame/assets/images/top-player/top-player03.png'} alt="Shoes" /></figure>
                    <div className="card-body items-center justify-end relative -mt-20">
                        <h2 className="card-title text-white">RAIDER</h2>
                    </div>
                </div>
                <div className="w-[60%] animat animat2">
                    <figure><img className="rounded-xl" src={'https://designmilitary.com/preview/landing-pages/MoGame/assets/images/top-player/top-player01.png'} alt="Shoes" /></figure>
                    <div className="card-body items-center justify-end relative -mt-20">
                        <h2 className="card-title text-white">DAYLIGHT</h2>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Streamer;