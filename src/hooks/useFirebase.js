import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.init";
import { useNavigate } from "react-router-dom";


const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app)

const useFirbase = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [])

    const loginWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(results => {
                const user = results.user
                setUser(user)
                navigate('/')
                console.log(user)
            })
            .catch(error => {
                const errorMessage = error.message
                console.log(errorMessage)
            })
    }

    const handlelogout = () => {
        signOut(auth)
            .then(() => {

            })
    }

    return { user, loginWithGoogle, handlelogout }
}

export default useFirbase