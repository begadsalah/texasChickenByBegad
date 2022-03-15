import React from 'react'
import styles from '../styles/OurStory.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
const OurStory = () => {
    return (
        <div className={styles.container}>
            <Row xs={12} s={12} lg={12} m={12}>
                <Col style={{ backgroundColor: "#2D2926", margin: '0' }}>
                    <Image src='/images/ourStory1.png' fluid />
                </Col>
                <Col className={styles.contentCol} style={{ backgroundColor: "#2D2926", margin: '0' }}>
                    <h1 style={{ color: "#F8B02D", fontSize: "4.5rem" }}><span className={styles.ourStoryH1} style={{ color: 'white', fontSize: "3.5rem" }}>DISCOVER</span> <span className={styles.ourStorySpan}></span>TEXAS CHICKEN</h1>
                    <p style={{ color: "#A39382" }}>At Texas Chicken®, we like to push boundaries while staying true to our method- “The Texas Way”. Everything about Texas Chicken® is BIG! Our popping flavors, personalities, servings, are nothing short of bold and daring.</p>
                    <Button className={styles.ourStoryButton} style={{ backgroundColor: "transparent", color: "#F8B02D" }} variant="warning">Our Story</Button>
                </Col>
            </Row>
        </div>
    )
}

export default OurStory