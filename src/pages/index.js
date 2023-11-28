import { useEffect, useState } from 'react'; 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import Header from "@/app/components/Header"
import UserProfileCard from "@/app/components/UserProfileCard"
import firebaseConfig from "@/app/components/firebaseConfig";



export default function UserProfile() {
    const [isLoggedIn, setIsLoggedIn] = useState(null); 
    const [user, setUser] = useState(null); 

    useEffect(() => {
        const app = initializeApp(firebaseConfig);
        const auth = getAuth();
        console.log(auth)
        //check if logged in
        setIsLoggedIn(true)
        //set user info if logged in 
        setUser({}); 
    }, [])

    //if user is not logged in forward them to login page
    if (!isLoggedIn) return null; 





    return (
    <>
        <Header /> 
        <main>
            <h1>User Profile</h1>
            <UserProfileCard user={user} />
        </main>

        </>

    )
} 