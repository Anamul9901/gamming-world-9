import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const DirectLogIn = () => {
    const { logInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleLogIn = () => {
        logInWithGoogle()
            .then(result => {
                console.log(result);
                navigate(location?.state ? location.state : '/');
                swal("Good job!", "You Sign Up successfully!", "success")
            })
            .catch(error => {
                console.error(error);
                swal("Opps!!", "Please again try", "error");
            })
    }
    return (
        <div>
            <h2 className='text-center mt-6 mb-2'><small>Sign in with another account</small></h2>
        <div className=" flex justify-center text-2xl">
            <button onClick={handleGoogleLogIn}><FcGoogle></FcGoogle></button>
        </div>
        </div>
    );
};

export default DirectLogIn;