import React from 'react';
import styles from '../styles/Slider.module.css'
import Link from 'next/link';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const Slider = () => {
    <script>
        document.getElementById('vid').play();
    </script>

    return (
        <div>
            <Carousel className={styles.container} autoPlay={true} infiniteLoop={true} interval={2000}>
                <Row className={styles.sliderRow}>
                    <video width="100%" autoPlay muted loop>
                        <source src={"/images/Slider0.mp4"} type="video/mp4" />
                    </video>
                </Row>
                <Row className={styles.sliderRow}>
                    <div className={styles.SliderButtons}>
                        <Button className={styles.SliderButton} variant="warning">Order now</Button>
                    </div>
                    <Image src="/images/Slider1.webp" alt="image1" fluid />
                </Row>
                <Row className={styles.sliderRow}>
                    <div className={styles.SliderButtons}><Button className={styles.SliderButton} variant="warning">Order now</Button></div>
                    <Image src="/images/Slider2.webp" alt="image2" fluid />
                </Row>
                <Row className={styles.sliderRow}>
                    <div className={styles.SliderButtons}><Button className={styles.SliderButton} variant="warning">View Menu</Button></div>
                    <Image src="/images/Slider3.webp" alt="image3" fluid />
                </Row>
                <Row className={styles.sliderRow}>
                    <div className={styles.SliderButtons}><Button className={styles.SliderButton} variant="warning">Location</Button></div>
                    <Image src="/images/Slider4.webp" alt="image4" fluid />
                </Row>
                <Row className={styles.sliderRow}>
                    <Image src="/images/Slider5.webp" alt="image5" fluid />
                </Row>
            </Carousel >
        </div >
    )
}

export default Slider