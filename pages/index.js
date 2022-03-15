import Head from 'next/head'
import LocationSection from '../components/LocationSection';
import OrderNowSection from '../components/OrderNowSection';
import OurStory from '../components/OurStory';
import Slider from '../components/Slider';
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TEXAS Chicken</title>
        <meta name="description" content="Best App for Chicken Ordering" />
        <link rel="icon" href="/images/texasLogo2.png" />
      </Head>
      <Slider />
      <OrderNowSection />
      <OurStory />
      <LocationSection />
    </div>
  );
}
