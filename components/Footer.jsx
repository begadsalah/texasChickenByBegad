import React from 'react'
import styles from '../styles/footer.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className={styles.container}>
      <Row xs={12} s={12} lg={12} m={12}>
        <Col className={styles.sideCol}>
          <h6><a>DISCOVER TEXAS</a></h6>
          <a className={styles.aLinks}>Our Story</a>
          <a className={styles.aLinks}>HALAL</a>
        </Col>
        <Col className={styles.sideCol}>
          <h6><a>WORK WITH US</a></h6>
          <a className={styles.aLinks}>Careers</a>
          <a className={styles.aLinks}>Franchising</a>
        </Col>
        <Col className={styles.sideCol}>
          <h6><a>TEXAS WAY</a></h6>
          <a className={styles.aLinks}>Birthday Package</a>
        </Col>
        <Col className={styles.sideCol}>
          <h6><a>LET'S TALK</a></h6>
          <a className={styles.aLinks}>Contact Us</a>
          <a className={styles.aLinks}>FAQs</a>
        </Col>
        <Col className={styles.sideCol}>
          <h6><a>TEXAS CHICKEN | <span className={styles.sideSpan}>UAE</span></a></h6>
        </Col>
      </Row>
      <Row>
        <Col><h6 style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-end",
          height: "70%"
        }}>JOIN OUR COMMUNITY</h6></Col>
        <Col>
          <Row xs={12} s={12} lg={12} m={12}>
            <Col xs={4} s={4} lg={4} m={4}><Image src='/images/HalaLogo.png' fluid /></Col>
            <Col xs={4} s={4} lg={4} m={4}><Image src='/images/TexasDeliveryLogo.png' fluid /></Col>
          </Row>
        </Col>
        <Col>
          <h6>CONNECT WITH</h6>
          <Row>
            <FontAwesomeIcon className={styles.brandsLogo} icon={['fab', 'twitter']} style={{ color: 'white', width: '1.2rem', height: '1.2rem' }} />
            <FontAwesomeIcon className={styles.brandsLogo} icon={['fab', 'facebook']} style={{ color: 'white', width: '1.2rem', height: '1.2rem' }} />
            <FontAwesomeIcon className={styles.brandsLogo} icon={['fab', 'youtube']} style={{ color: 'white', width: '1.2rem', height: '1.2rem' }} />
            <FontAwesomeIcon className={styles.brandsLogo} icon={['fab', 'instagram']} style={{ color: 'white', width: '1.2rem', height: '1.2rem' }} />
          </Row>
        </Col>
      </Row>
      <Row>
        <hr className={styles.solidLine} />
        <Col><p className={styles.aLinks}>All rights reserved. | Developed & Designed byPSdigital.</p></Col>
        <Col><a>Privacy Policy</a>
          <a>Terms & Condition</a></Col>
        <Col><Row xs={12} s={12} lg={12} m={12}>
          <Col xs={4} s={4} lg={4} m={4}><Image src='/images/googlePlay.png' fluid /></Col>
          <Col xs={4} s={4} lg={4} m={4}><Image src='/images/appStore.png' fluid /></Col>
        </Row></Col>
      </Row>
    </div>
  );
}

export default Footer