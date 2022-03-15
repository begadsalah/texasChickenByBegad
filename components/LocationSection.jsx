import React from 'react'
import styles from '../styles/LocationSection.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

const LocationSection = () => {
  return (
    <div className={styles.container}>
      <Row xs={12} s={12} lg={12} m={12} style={{ backgroundColor: "#9A3324" }}>
        <Col className={styles.contentCol}>
          <Image style={{ margin: "1rem 0" }} src='/images/LocationMap.png' width={70} height={70} />
          <h2 style={{ color: "white", margin: "1rem 0" }}>FIND YOUR NEAREST TEXAS CHICKEN</h2>
          <Button style={{ borderRadius: "0.4em", backgroundColor: "#F8B02D", color: "#2D2926", margin: "1rem 0", padding: "0.2rem 1.5rem", fontWeight: "700", fontSize: "1.3rem" }} variant="warning">LOCATIONS</Button>
        </Col>
      </Row>
    </div>
  )
}

export default LocationSection