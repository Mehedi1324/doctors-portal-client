import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";
// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState("");


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();



    // Create User

    const registerUser = (email, name, password, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError("");
                const newUser = { email, displayName: name };
                setUser(newUser);

                // Save user to the database

                saveUser(email, name, "POST");

                // Save name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });

                history.push('/');



            })
            .catch((error) => {
                const errorCode = error.code;
                setAuthError(error.message);
                // ..
            })
            .finally(() => setIsLoading(false));
    }


    // Sign in with google
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.name, "PUT");
                setAuthError("");
            }).catch((error) => {

                setAuthError(error.message);
            }).finally(() => setIsLoading(false));


    }






    // Login

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.start?.from || "/";
                history.replace(destination);
                setAuthError("");
            })
            .catch((error) => {
                const errorCode = error.code;
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }





    // Observer user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])


    useEffect(() => {
        fetch(`https://secret-temple-89765.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])


    // signOut
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // sign-out successful
        }).catch((error) => {
            // An error happened
        })
            .finally(() => setIsLoading(false));
    }

    //  Save user for the server storage

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch("https://secret-temple-89765.herokuapp.com/users", {
            method: method,
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then()

    }

    return {
        user,
        isLoading,
        token,
        admin,
        authError,
        signInWithGoogle,
        registerUser,
        logout,
        loginUser,
    }
}
export default useFirebase;