/* eslint-enable */
import React from 'react'
import styles from '../styles/Catagories.module.css'
import Link from 'next/link';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export const getStaticProps = async () => {
    const res = await fetch(`https://task-api-eosin.vercel.app/api/categories`);
    const data = await res.json()
    return {
        props: {
            catagories: data
        }
    };
};

const Catagories = React.forwardRef(({ onClick, href, catagories }, ref) => {
    return (
        <div className={styles.container}>
            <Row>
                {catagories.map(catagory => (
                    <Col key={catagory.ID}>
                        <Card style={{ width: '18rem' }} className={styles.card}>
                            <Card.Img className={styles.cardImg} variant="top" src={catagory.ImagePath} />
                            <Card.Body className={styles.cardBody}>
                                {/* eslint eqeqeq: "off", curly: "error" */}
                                <Link className={styles.cardLink} passHref href="/foodProducts"><Card.Title className={styles.cardTitle}>{catagory.Name}</Card.Title></Link>
                                <Card.Text className={styles.cardText}>
                                    {catagory.Description}
                                </Card.Text>
                                <Button className={styles.cardButton} variant="Danger"></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
})

export default Catagories