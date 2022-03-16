import React from 'react'
import styles from '../styles/OrderNowSection.module.css'
import Link from 'next/link';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

const OrderNowSection = () => {
    return (
        <div className={styles.container}>
            <Row> <h1 className={styles.mainTitle}>ORDER <span className={styles.ordernowSpan}>NOW</span></h1></Row>
            <Row className={styles.mainRow} xs={6} s={6} lg={6} m={6} xlg={6}>
                <Col className={styles.elementCol} xs={2} s={2} lg={2} m={2} xlg={2}>
                    <Button className={styles.catagoryButtonFirst} variant="warning">Sandwishs</Button>
                </Col>
                <Col className={styles.elementCol} xs={3} s={3} lg={2} m={2} xlg={2}>
                    <Button className={styles.catagoryButton} variant="light">Wraps</Button>
                </Col>
                <Col className={styles.elementCol} xs={3} s={3} lg={2} m={2} xlg={2}>
                    <Button className={styles.catagoryButton} variant="light">Chicken Meals</Button>
                </Col>
                <Col className={styles.elementCol} xs={3} s={3} lg={2} m={2} xlg={2}>
                    <Button className={styles.catagoryButton} variant="light">Tenders Meals</Button>
                </Col>
            </Row>
            <Row className={styles.mainRow}>
                <Col className={styles.elementCol}>
                    <Card className={styles.elementCol} style={{ width: '18rem', backgroundColor: 'transparent' }}>
                        <div className={styles.cart}>
                            <Link href="/CartList">
                                <Image src="/images/download.png" alt="Phone" width={48} height={48}></Image>
                            </Link>
                        </div>
                        <Card.Img variant="top" src="/images/Burger1.png" />
                        <Card.Body className={styles.cardBody}>
                            <Button className={styles.cardButton} variant="danger"><Link className={styles.buttonLink} href="/foodProducts">Mexicana</Link><span>SAR<span>24</span></span></Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className={styles.elementCol}>
                    <Card className={styles.elementCol} style={{ width: '18rem', backgroundColor: 'transparent' }}>
                        <div className={styles.cart}>
                            <Link href="/CartList">
                                <Image src="/images/download.png" alt="Phone" width={48} height={48}></Image>
                            </Link>
                        </div>
                        <Card.Img variant="top" src="/images/Burger2.png" />
                        <Card.Body className={styles.cardBody}>
                            <Button className={styles.cardButton} variant="danger"><Link href="/foodProducts" className={styles.buttonLink}>Classic Sandwich</Link><span>SAR<span>19</span></span></Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className={styles.elementCol}>
                    <Card className={styles.elementCol} style={{ width: '18rem', backgroundColor: 'transparent' }}>
                        <div className={styles.cart}>
                            <Link href="/CartList">
                                <Image src="/images/download.png" alt="Phone" width={48} height={48}></Image>
                            </Link>
                        </div>
                        <Card.Img variant="top" src="/images/Burger3.png" />
                        <Card.Body className={styles.cardBody}>
                            <Button className={styles.cardButton} variant="danger"><Link href="/foodProducts" className={styles.buttonLink}>Crunchy Jalapeno</Link><span>SAR<span>25</span></span></Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className={styles.elementCol}>
                    <Card className={styles.elementCol} style={{ width: '18rem', backgroundColor: 'transparent' }}>
                        <div className={styles.cart}>
                            <Link href="/CartList">
                                <Image src="/images/download.png" alt="Phone" width={48} height={48}></Image>
                            </Link>
                        </div>
                        <Card.Img variant="top" src="/images/Burger4.png" />
                        <Card.Body className={styles.cardBody}>
                            <Button className={styles.cardButton} variant="danger"><Link href="/foodProducts" className={styles.buttonLink}>Chicken Mucho Picante</Link> <span>SAR<span>22</span></span></Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default OrderNowSection