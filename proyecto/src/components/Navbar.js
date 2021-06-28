import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] =useState(true);

    const handleClick = () => setClick(click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };


    useEffect(()=>{
        showButton()
    },[]);

    window.addEventListener('resize',showButton);

    return (
       <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className="navbar-logo"  onClick={closeMobileMenu}>
                        RAS <i className='fab fa-typo3' />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/rasapp' className='nav-links' onClick={closeMobileMenu}>
                                RASapp
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/rasopatias' className='nav-links' onClick={closeMobileMenu}>
                                ¿RASopatiás?
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link 
                                to='/herramienta'
                                className='nav-links' 
                                onClick={closeMobileMenu}
                             >
                                Herramienta
                            </Link>
                        </li>
                        
                    </ul>
                    <ul>

                    {button && <Button butonStyle='btn--outline'>INGRESAR</Button>}
                    </ul>
                </div>
            </nav>
       </>
    )
}

export default Navbar
