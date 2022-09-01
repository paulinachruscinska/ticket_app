import React, {useState} from "react";
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


export default function Header(){
    return(
        <>
            <header>
                <span className='header-logo'><Link to='/'>eBilet</Link></span>
                <div className='header-items'>
                    <nav className='navbar' >
                        <input type='checkbox' className='header-items--navigation'/>
                        <ul>
                            <li><HashLink to='/#section-howtobuy'  className='a-heder-text'>Jak kupić eBilet?</HashLink></li>
                            <li><HashLink to='/#section-benefits' className='a-heder-text'>Korzyści z eBiletu</HashLink></li>
                            <li><HashLink to='/#section-aboutUs' className='a-heder-text'>O nas</HashLink></li>
                            <li><HashLink to='/#section-opinions' className='a-heder-text'>Opinie klientów</HashLink></li>
                        </ul>
                    </nav>

                </div>
            </header>
        </>
    )
}