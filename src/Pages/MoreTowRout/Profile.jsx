
import Navber from "../../component/Navber/Navber";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import './Profile.css'



const Profile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div className="styleProfile">
            <Navber />
           
            <p>
                {user.emailVerified}
                {user.phoneNumber}

            </p>
             

           <div className="flex justify-center h-[93vh] items-center">
           <div className="  flex card glass flex-col rounded-xl   bg-clip-border   shadow-md">
                <div className="flex justify-center rounded-sm pt-6">
                    <img className="rounded-sm" src={user.photoURL} alt="profile-picture" />
                </div>
                <div className="p-6 text-center text-white">
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {user.displayName}
                    </h4>
                    <p>
                    Email: {user.email}
                    </p>
                    <div> <span>Email Verified: </span>
                        {
                            user.emailVerified === 'null' ? 'Yes': 'NaN'
                        }
                    </div>
                    <div>
                        <span>Phone Number: 
                            {
                                user.phoneNumber ? user.phoneNumber : ' NaN'
                            }
                        </span>
                    </div>
                </div>
                 
            </div>
           </div>
        </div>
    );
};

export default Profile;