import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar2 from '../components/Navbar2'
import Footer from '../components/footer/Footer'
import Slider from '../components/Slider'
import Mission from '../components/Mission'
import FeaturedProducts from '../components/FeaturesProducts/FeaturedProducts'
import AboutUs from '../components/AboutUs'
import CustomNav from '../components/CustomNav'
import Navbar from '../components/Navbar'
import st from  '../styles/feature.module.css'
import ComingSoon from "react-coming-soon";

// import Backtotop from '../components/Backtotop'

export default function Home() {

  return (
    <>
     <Head>
        <title>Maz Global</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* <div className={st.cmng}>
      
      <center><Image style={{cursor:'pointer',paddingTop:'20px',paddingLeft:'0px'}}  height='120px' width='180px' src='/white_logo.png'/></center>
     
  
  <ComingSoon
      image='https://react-coming-soon.maksv.me/default-image.jpeg'
      bgColor="#fff"
      textColor="#000"
      illustration="development"
    />
    </div>  */}
<Navbar2/>
    <Navbar/>
    
    <Slider/>
    <Mission/>
    <FeaturedProducts/>
    <div style={{marginTop:'40px'}}>
      </div>
    <AboutUs/>
    <div style={{marginTop:'40px',marginBottom:'40px',textAlign:'center'}}>
  
    </div>
    <Footer/>  
   
    </>
      )
}
