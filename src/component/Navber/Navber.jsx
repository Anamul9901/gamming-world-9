import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navber = () => {
    const { user, signOutFromEmaPas } = useContext(AuthContext);

    const navItem = <>
        <ul className="md:flex">
            <li>
                <NavLink
                    to='/'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? 'text-pink-500 underline font-black md:text-xl ' : "text-pink-600 font-bold md:text-xl"
                    }>Home</NavLink>
            </li>
            {
                user && <div className="flex">
                    <li>
                        <NavLink
                            to='/yourorder'
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? 'text-pink-500 underline font-black md:text-xl ' : "text-pink-600 font-bold md:text-xl"
                            }>Your Order</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/profile'
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? 'text-pink-500 underline font-black md:text-xl ' : "text-pink-600 font-bold md:text-xl"
                            }>Profile</NavLink>
                    </li>
                </div>
            }
        </ul>
    </>

    const handleSignout = () => {
        localStorage.clear();
        signOutFromEmaPas()
            .then()
            .catch()
    }

    return (
        <div className=" bg-purple-400 ">
            <nav className=" navbar max-w-[1300px] mx-auto px-2">
                <div className="navbar-start">
                    <div className="dropdown text-white">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                        <div className="flex items-center gap-2 w-[50%] md:w-[100%]">
                        <img src={'https://designmilitary.com/preview/landing-pages/MoGame/assets/images/brand.png'} alt="" />
                     
                        </div>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu  menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?

                            <div className="flex items-center">
                                <span className="text-white text-xs md:text-lg font-bold">{user.displayName}</span>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>

                                <button onClick={handleSignout} className="btn btn-sm btn-primary  text-white font-bold">Sign Out</button>
                            </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-primary btn-sm  text-white font-bold">Log in</button></Link>
                    }

                </div>
            </nav>
        </div>
    );
};

export default Navber;