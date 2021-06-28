import React, {useEffect, useState} from 'react';
import firebase from './Firebase';

const AuthProvider = () =>{
    const [user,setUser] = useState('');
    const [nameUser, setNameUser] = useState('');
    const [ocupation, setOcupation] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('' )
    const [userErro,setUserError] = useState('')
    const [emailError,setEmailError] = useState('');
    const [passwordError,setPasswordError] = useState('' )
    const [hasAccount, setHasAccount] = useState(true);

};

const clearInputs = () => {
    setEmail('');
    setPassword('');
}

const clearErrors = () =>{
    setEmailError('');
    setPasswordError('');
}

const handleLogIn = () =>{
    clearErrors();
    firebase
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch((err) => {
        switch(err.code){
            case "auth/invalid-emal":
                setEmailError(err.message);
                break;
            case "auth/user-disable":
            case "auth/user-not-found":
                setUserError(err.message);
                break;
            case "auth/wrong-password":
                setPasswordError(err.message);
                break;
        }
    })
    .then( result =>{
        setUser(result.user);
        return true;
    });

    

}

const handleSignup = ()=>{
    clearErrors();
    firebase
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch((err) => {
        switch(err.code){
            case "auth/email-already-in-use":
            case "auth/invalid-email":
                setEmailError(err.message);
                break;
    
            case "auth/weak-password":
                setPasswordError(err.message);
                break;
        }
    });
}

const handleLogout = () =>{
    firebase.auth().signOut();
}

const authListener = ()=>{
    firebase.auth().onAuthStateChanged(user =>{
        if(user){
            clearInputs();
            setUser(user);
        }else{
            setUser("");
        }
    })
}

useEffect(()=>{
    authListener();
},[]);

const handelSingUp = () =>{
    

};
export default AuthProvider;