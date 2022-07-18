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
import { useState, useEffect } from "react";
import TopProducts from '../components/FeaturesProducts/TopProducts'
//import ComingSoon from "react-coming-soon";

// import Backtotop from '../components/Backtotop'
import axios from 'axios'
import ProductCategories from '../components/ProductCategories'
import ProductVehicles from '../components/ProductVehicles'
import Brands from '../components/Brands'
export default function Home() {

  const [products,setProducts]=useState([])
  useEffect(() => {

    axios.get(`https://api.mazglobal.co.uk/maz-api/products`)//api url
    .then(resp =>{//calling url by method GET
          console.log('alll prooo',resp.data.data)
          let path1="https://api.mazglobal.co.uk/";
      
          let list=[]
          resp.data.data.map(it=>{
            let pp=''
            it['path']=path1+it.path
            list.push(it.path)
            console.log("path22",pp)
          
          
          })
          
             setProducts(resp.data.data)
         }).catch(err=>console.log(err))
    // alert('Finished loading');
  }, []);
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
    <div style={{textAlign:'center',margin:'20px',padding:'20px'}}>
    <h1 >MAZ Global –The Reliable Online Auto Parts Store in the UK</h1>
    <p style={{marginLeft:'auto',marginRight:'auto',width:'50%'}}>We are the one of the top stockist of a broad range of automotive spare parts from various auto brands, delivering across the UK and Europe.</p>
    </div>
    {/* <Mission/> */}
    {products.length!=0?<FeaturedProducts products={products}/>:''}
    <ProductCategories/>
   
    <div style={{marginTop:'40px'}}>
      </div>
    <AboutUs/>
    <div style={{marginTop:'40px',marginBottom:'40px',textAlign:'center'}}>
  
    </div>
    <ProductVehicles/>
    <div style={{marginTop:'40px',marginBottom:'40px',textAlign:'center'}}>
  
    </div>
    <div style={{background:'whitesmoke',padding:'10px'}}>
    {products.length!=0?<TopProducts products={products}/>:''}
    </div>
    
    <Brands/>
    <Footer/>  
   
    </>
      )
}
