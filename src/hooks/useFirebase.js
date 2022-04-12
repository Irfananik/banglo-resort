import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase.init";


const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app)

const useFirbase = () => {
    const [user, setUser] = useState({})

    useEffect(() => {

    }, [])

    const loginWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(results => {
                const user = results.user
                setUser(user)
                console.log(user)
            })
            .catch(error => {
                const errorMessage = error.message
                console.log(errorMessage)
            })
    }

    return { user, loginWithGoogle }
}

export default useFirbase