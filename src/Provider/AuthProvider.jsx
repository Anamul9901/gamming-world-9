/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.console";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

 
    const signUpWithEmaPas = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signinWithEmaPas = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutFromEmaPas = () =>{
        setLoading(true);
        return signOut(auth)
    }

    const logInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // kun user login ase ta sobsomy dekha jabe
    useState(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            // console.log('current user', currentUser)
            setUser(currentUser);
            setLoading(false);

        });
        return () =>{
            unSubscribe();
        }
        
    },[])





    const authInfo = {
        signUpWithEmaPas,
        signinWithEmaPas,
        user,
        signOutFromEmaPas,
        logInWithGoogle,
        loading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;