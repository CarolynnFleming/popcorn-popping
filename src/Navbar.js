import React from 'react'
import cart from './assets/cart.png';
import styles from './styles.css'


export default function Navbar() {
  return (
    <nav className={styles.nav}>
        <a href="/" className={styles.webname}> What's Popping Popcorn</a> 
        <ul>
            <li>
                <a href="/about">About</a>
            </li>
             <li>
                <a href="/popcornList">Popcorn</a>
            </li>
            <li>
                <a href="/italianiceList">Italian Ice</a>
            </li>
            <li>
                <a href="/cart"><img className='cart-img' src={cart} alt="cart image"/></a>
            </li>
            <li>
                <a href="/contact">Contact</a>

            </li>
        </ul>
    </nav>
  )
}
