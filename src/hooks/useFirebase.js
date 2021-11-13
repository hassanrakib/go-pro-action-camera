import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
    const [userFromDB, setUserFromDB] = useState({});
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    // get user from db
    useEffect(() => {
        setIsLoading(true);
        fetch(`https://glacial-headland-75671.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUserFromDB(data);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [user]);

    // create new user
    const createNewUser = (name, email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                const newUser = { displayName: name, email, role: "user" }
                // setting the user as current user
                setUser(newUser);
                // save the user in database
                fetch('https://glacial-headland-75671.herokuapp.com/users', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .catch((err) => {
                        // 
                    })

                // update displayName in firebase
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .catch((error) => {
                        // 
                    });
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    // sign in user
    const signInUser = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    // sign out user
    const signOutUser = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setError('');
            }).catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    // get the currently signed in user
    useEffect(() => {
        setIsLoading(true);
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        })
        return () => unsubscribed;
    }, [auth]);

    return { user, error, isLoading, setError, createNewUser, signInUser, signOutUser, userFromDB };
}

export default useFirebase;