import React, { useEffect, useState }  from 'react';
import firebase from '../firebase/Firebase';

export default function Login(){
    const [user,setUser] = useState('')
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('' )
    const [userErro,setUserError] = useState('')
    const [emailError,setEmailError] = useState('');
    const [passwordError,setPasswordError] = useState('' )
    const [hasAccount, setHasAccount] = useState(false);

    const handleLogIn = () =>{
        firebase
        .auth()
        .signInWithEmailAndPassword(email,password)
        .catch((err) => {
            switch(err.code){
                case "auth/invalid-emal":
                case "auth/user-disable":
                case "auth/user-not-found":
                    setEmailError(err.message);
                    break;
                case "auth/wrong-password":
                    setPasswordError(err.message);
                    break;
            }
        }).then(result =>{
            setUser(result.user);
        });

    };

    useEffect(()=>{
        const unsuscibe = firebase.auth().onAuthStateChanged(user => {
            setUser(user);
            setHasAccount(false);
        });

        return () => unsuscibe();
    }, []);
    
    return(
        <section className="login">
            <div className="loginContainer">
                <label>Username</label>
                <input 
                type="text" 
                autoFocus required value={email} 
                onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input
                type="password"
                required value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button>R</button>
                        <p>¿ya tienes una cuenta? <span>Ingresa</span></p>
                        </>
                    ) : (
                        <>
                        <button onClick={handleLogIn}>Ingresar</button>
                        <p>¿No tienes una cuenta? <span>Registrate</span></p>
                        </>
                        
                    )}
                </div>
            </div>

        </section>
    );
    
}

