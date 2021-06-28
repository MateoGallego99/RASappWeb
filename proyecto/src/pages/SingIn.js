import React, {useState,useEffect} from 'react';
import 'firebase/auth';
import Firebase from '../firebase/Firebase';
import firestore from '../firebase/Firebase';
import userEvent from '@testing-library/user-event';

const SignUp = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const { register } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      { label: 'Medico', value: 'Medico' },
      { label: 'Estudiante', value: 'Estudiante' }
    ]);

    const handleSingUp = () => {
        Firebase
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .then(()=>{
            
        })
    }
}
