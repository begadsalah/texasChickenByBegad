import React, { useState, useEffect } from "react";
import styles from '../styles/CartItem.module.css'
import { connect } from "react-redux";
import {
    adjustItemQty,
    removeFromCart,
} from "../redux/Shopping/shopping-actions";
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
const CartItem = ({ item, adjustQty, removeFromCart }) => {
    const [input, setInput] = useState(item.qty);

    const onChangeHandler = (e) => {
        setInput(e.target.value);
        adjustQty(item.id, e.target.value);
    };
    return (
        <div className={styles.cartItem}>
            <Image
                className={styles.cartItem__image}
                src="/images/Burger2.png"
                alt={item.title}
                fluid
                width={100}
                height={100}
            />
            <div className={styles.cartItem__details}>
                <p className={styles.details__title}>Classic Sandwich</p>
                <p className={styles.details__desc}>with  regular  fries and regular drink</p>
                <p className={styles.details__price}>$ 19</p>
            </div>
            <div className={styles.cartItem__actions}>
                <div className={styles.cartItem__qty}>
                    <label htmlFor="qty">Qty</label>
                    <input
                        min="1"
                        type="number"
                        id="qty"
                        name="qty"
                        value={input}
                        onChange={onChangeHandler}
                    />
                </div>
                <button
                    onClick={() => removeFromCart(item.id)}
                    className={styles.actions__deleteItemBtn}
                >
                    <Image
                        src="/images/trash-can.png"
                        alt=""
                        fluid
                        width={100}
                        height={100}
                    />
                </button>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
        removeFromCart: (id) => dispatch(removeFromCart(id)),
    };
};

export default connect(null, mapDispatchToProps)(CartItem);
