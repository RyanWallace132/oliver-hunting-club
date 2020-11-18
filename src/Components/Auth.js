import React from 'react'
import { Page, Text, Button, Row, useToasts } from '@geist-ui/react'
import { useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import './Auth.css'


import initFirebase from '../services/firebase'

// initFirebase()

const provider = new firebase.auth.GoogleAuthProvider()




function Auth(props) {
    const [ authorizing, setAuthorizing ] = useState(false)

    const handleAuthentication = async () => {
        setAuthorizing(true)

        try{
            const result = await firebase.auth().signInWithPopup(provider)

            const { user, credentials } = result

            console.log({user, credentials})

            window.location = "/Dashboard"

            if (!user) {
                throw new Error("There was an issue authorizing")
            }
        } catch(error) {

        }

        setAuthorizing(false)
    }

    const handleRegister = () => {
        window.location = "/Register"
    }
    

    return (
        <div className="container">
            <div className="conatiner-center">
            <h2 className="welcome">Welcome To Oliver Hunting Club!</h2>
            <img className="deer" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB1dKDbLXXXXXclXXXXq6xXFXXXA%2F13-7-13-7CM-Deer-in-Crosshairs-Funny-Car-Stickers-Vinyl-Car-Styling-Animal-Car-Body.jpg&f=1&nofb=1"/> 
                <h2 className="signin">Sign In With: </h2>
                <img className="google-icon" src="https://maxcdn.icons8.com/Share/icon/Logos/google_logo1600.png" onClick={handleAuthentication} />
                <button className="sign-in-email" onClick={handleRegister}>Or, Sign In With Email</button>
            </div>
        </div>
    )
}

export default Auth
