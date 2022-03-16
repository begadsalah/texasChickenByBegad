import React, { useState, useEffect } from "react";
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";

const Navbar = React.forwardRef(({ onClick, href, cart }, ref) => {
    const [cartCount, setCartCount] = useState(0);
    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
            count += item.qty;
        });

        setCartCount(count);
    }, [cart, cartCount]);

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <div className={styles.col}>
                        <Link passHref href="/"><Image className={styles.logo} src="/images/texasLogo2.png" width={130} height={90}></Image></Link>
                    </div>
                </div>
                <div className={styles.col} style={{
                    display: "flex",
                    justifyContent: "flex-end"
                }}>
                    <u className={styles.list}>
                        <li className={styles.listItem}>
                            <Link passHref href="/Story"><a className={styles.navbarLink}>Story</a></Link>
                        </li>
                        <li className={styles.listItem}>
                            <Link passHref href="/Catagories"><a className={styles.navbarLink}>food</a></Link>
                        </li>
                        <li className={styles.listItem}>
                            <Link passHref href="/Location"><a className={styles.navbarLink}>Location</a></Link>
                        </li>
                        <li className={styles.listItemOrder}>
                            <Link passHref href="/foodCatagories"><a className={styles.navbarLinkOrder}>Order now</a></Link>
                        </li>
                    </u>
                </div>
                <div className={styles.col}>
                    <div className={styles.cart}>
                        <FontAwesomeIcon icon={['fas', 'fa-user-circle']} style={{ color: 'rgb(247, 175, 43)', width: '1.1rem', height: '1.1rem' }} />
                    </div>
                    <div className={styles.cart}>
                        <Link passHref href="/food">
                            <Image src="/images/download.png" alt="Phone" width={30} height={28}></Image>
                        </Link>
                        <div className={styles.cartCounter}>{cartCount}</div>
                    </div>
                    <div className={styles.cart}>
                        <FontAwesomeIcon icon={['fas', 'fa-earth-africa']} style={{ color: 'rgb(247, 175, 43)', width: '1.1rem', height: '1.1rem' }} />
                    </div>
                    <div className={styles.cart}>
                        <h5 style={{ color: 'rgb(247, 175, 43)' }}>عربي</h5>
                    </div>
                </div>
            </div>
        </div >
    );
})

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    };
};

export default connect(mapStateToProps)(Navbar);