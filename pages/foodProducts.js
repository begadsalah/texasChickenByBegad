import React from 'react'
import styles from '../styles/foodProducts.module.css'
import Link from 'next/link';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { connect } from "react-redux";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Image from 'react-bootstrap/Image';
import {
    loadCurrentItem,
    addToCart,
} from "../redux/Shopping/shopping-actions";


export const getStaticProps = async () => {
    const res = await fetch(`https://task-api-eosin.vercel.app/api/products?catID=19`);
    const data = await res.json()
    return {
        props: {
            foodProduct: data
        }
    };
};
const FoodProducts = React.forwardRef(({ onClick, href, foodProduct, product, addToCart, loadCurrentItem }, ref) => {

    return (
        <div className={styles.container}>
            <Row className={styles.mainRow}>
                <Col className={styles.mainFirstCol} xs={2} s={2} md={2} lg={2} xl={2}>
                    <Row className={styles.SubRow}><h4>SANDWICHES</h4></Row>
                    <Row className={styles.SubRow}><h4>WRAPS</h4></Row>
                </Col>
                <Col className={styles.mainSecondCol} xs={10} s={10} md={10} lg={10} xl={10}>
                    <Row className={styles.productsRow} xs={12} s={12} md={12} lg={12} xl={12}>
                        <h1>SANDWICHES</h1>
                        {foodProduct.map(product => (
                            <Col className={styles.card} key={product.ID} md={3} lg={3} xl={3}>
                                <Card className={styles.card} >
                                    <Card.Img className={styles.cardImg} variant="top" src={product.ImagePath} />
                                    <Card.Body className={styles.cardBody}>
                                        <Card.Title className={styles.cardTitle}>{product.Name}</Card.Title>
                                        {/*<Card.Text className={styles.cardTesxt}>
                                            {product.Description}
                        </Card.Text>*/}
                                        <OverlayTrigger
                                            placement="bottom"
                                            overlay={<Tooltip id="button-tooltip-2">SANDWICHES<br />Meal<br />SANDWICHES<br />meal<br /></Tooltip>}
                                        >
                                            {({ ref, ...triggerHandler }) => (
                                                <Button
                                                    className={styles.cardButton} variant="Danger" onClick={() => addToCart(product.id)}
                                                    {...triggerHandler}
                                                >
                                                    <Image
                                                        ref={ref}
                                                        src="/images/plus.png"
                                                        width={20} height={20}
                                                        style={{ color: "rgb(248, 180, 56) !important" }}
                                                    />
                                                    <span className="ms-1">Add to Cart</span>
                                                </Button>
                                            )}
                                        </OverlayTrigger>
                                    </Card.Body>
                                </Card>
                            </Col>))}
                    </Row>
                </Col>
            </Row>
        </div>
    )
})
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    };
};

export default connect(null, mapDispatchToProps)(FoodProducts);

