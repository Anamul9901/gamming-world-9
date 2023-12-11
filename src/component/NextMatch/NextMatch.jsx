import './NextMatch.css'

const NextMatch = () => {
    return (
        <div className="styleNextMatch pt-12 pb-20">
            <div className="max-w-[1300px] mx-auto ">
                <h2 className="text-5xl font-bold text-center text-white m-6 mb-12">Next Match</h2>
                <div className='flex text-center items-center justify-center text-white mb-8'>
                    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                        <div className="flex flex-col">
                            <span className="countdown font-mono text-3xl">
                                <span style={{ "--value": 15 }}></span>
                            </span>
                            days
                        </div>
                        <div className="flex flex-col">
                            <span className="countdown font-mono text-3xl">
                                <span style={{ "--value": 10 }}></span>
                            </span>
                            hours
                        </div>
                        <div className="flex flex-col">
                            <span className="countdown font-mono text-3xl">
                                <span style={{ "--value": 24 }}></span>
                            </span>
                            min
                        </div>
                        <div className="flex flex-col">
                            <span className="countdown font-mono text-3xl">
                                <span style={{ "--value": 7 }}></span>
                            </span>
                            sec
                        </div>
                    </div>
                </div>
                <div className="md:flex justify-between items-center gap-20 md:ml-32 ml-24 ">
                    <div className='nextMatch'>
                        <img src={'https://designmilitary.com/preview/landing-pages/MoGame/assets/images/games/teamA-logo.png'} alt="" />
                    </div>
                    <div className='text-white' >
                        <div>

                        </div>
                        <h2 className="text-6xl font-black md:text-center text-fuchsia-700 ml-12 md:-ml-16 mb-10 md:mb-0 ">VS</h2>
                    </div>
                    <div className='nextMatch2'>
                        <img className='-ml-8' src={'https://designmilitary.com/preview/landing-pages/MoGame/assets/images/games/teamB-logo.png'} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NextMatch;