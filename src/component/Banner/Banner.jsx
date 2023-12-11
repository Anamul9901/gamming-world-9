import './Banner.css'



const Banner = () => {


    return (
        <div className='md:h-[95vh] styleBanner'>
            <div className='max-w-[1300px] mx-auto '>
                <div className='md:flex justify-between md:px-4 '>
                    <div>
                        <div className='md:pt-40 pt-16 w-fit ml-24 md:ml-0'>
                            <p className='bg-gradient-to-r from-blue-900 font-semibold md:text-2xl   text-white md:h-20 h-10  items-center md:pt-5 pt-2 pl-2'>Discover your next Play</p>

                        </div>

                        <div className='relative md:w-[50%] w-[42%] rounded-xl ml-28 md:ml-0'>
                            <img className='ball rounded-xl pt-10 image' src={'https://i.ibb.co/QHszwTr/gammin-Taxt.png'} alt="" />
                            <img className='balll w-[90%]' src={'https://i.ibb.co/yfxd80h/coollogo-com-49701313.png'} alt="" />
                        </div>
                    </div>
                    <div className='   rounded-xl w-[50%] justify-end text-end items-end'>
                        <img className='mt-6 rounded-xl pt-10 mainImage ml-24 md:ml-0' src={'https://i.ibb.co/0GngJLV/hero-pic.png'} alt="" />
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='grid grid-cols-3 md:grid-cols-6 gap-20 max-w-[1300px] mx-auto lg:mt-20 md:mt-52 mt-20 pb-6 px-4 w-[80%]'>
                    <img src={'https://i.ibb.co/5hQHz7c/logo1.png'} alt="" />
                    <img src={'https://i.ibb.co/68R2q6W/logo2.png'} alt="" />
                    <img src={'https://i.ibb.co/Wt30BFL/logo3.png'} alt="" />
                    <img src={'https://i.ibb.co/TTKJDwt/logo4.png'} alt="" />
                    <img src={'https://i.ibb.co/VvDZLjM/logo5.png'} alt="" />
                    <img src={'https://i.ibb.co/9hPq1bX/logo6.png'} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;