import styled from "styled-components";

import Navbar2 from "../components/Navbar2";
//import Navbar1 from "../components/Navbar1";
import Footer from "../components/footer/Footer";
import { useEffect, useState } from "react";
//import ProductItem from "../../../components/ProductItem";
import SingleProduct from "../components/SingleProduct";
import { HomeOutlined, Category } from "@material-ui/icons";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Mission from "../components/Mission";
import Brands from "../components/Brands";
import about from '../styles/aboutus.module.css'
import { useRouter } from 'next/router';
//import axios from "axios";
//import Pagination from '@material-ui/lab/Pagination';

const About = () => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [color, setColorProduct] = useState([]);
  const [spro, setSizeProduct] = useState([
    {
      id: 1,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/1/1/11979.webp",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 2,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/0/0001420-web.webp",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 3,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/0/0001272_2.webp",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 4,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/7/0700185_2.webp",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 5,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/0/0011706-web.webp",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 6,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/0/0012367K.webp",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 7,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/0/0012736-web.webp",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 8,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/0/0011706-web.webp",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
    {
      id: 9,
      img: "https://www.ks-international.com/media/catalog/product/cache/5cbd42b6a5a30dbac7552a8bcebb8809/0/0/0012368K.webp",
      name: "REAR AXLE WHEEL BEARING KIT",
      tax: "36.00 RS",
      sku: "0700185",
      price: 4000,
    },
  ]);
  const router = useRouter();
  useEffect(() => {
    // const config = {
    //     headers: {
    //       Authorization: 'Bearer ' + localStorage.getItem('token'),
    //     },
    //   };
    //     axios.get( `http://95.111.240.143:8080/ecom-api/products/page/${1}`)//api url
    //    .then(resp =>{//calling url by method GET
    //          setItems(resp.data.data)
    //             setSizeProduct(resp.data.data)
    //         }).catch(err=>console.log(err))//setting response to state posts
  }, []);

  const handlePageChange = (event, value) => {
    //   setPage(value);
    //   console.log("val",value)
    //   axios.get(`http://95.111.240.143:8080/ecom-api/products/page/${value}`)
    //   .then(res=>{
    //     console.log('data',res.data.data)
    //     setSizeProduct(res.data.data)
    //   }) .catch(err=>console.log(err))
  };

  const move = () => {
    router.push('/contact')
  }
  function Sort(slist, value) {
    //   var cl=[]
    //     slist.map(it=>{
    //       it.variants.map(v=>{
    //            v.values.map(sz=>{
    //              if(sz==value)
    //              {
    //              cl.push(it)
    //              }
    //            })
    //       })
    //     })
    //     setSizeProduct(cl)
  }
  return (
    <>
     <Head>
        <title>About Us</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar2 />
      <Navbar />
      <Image src='/truck.jpeg' 
       width="100%" height="40%" layout="responsive"
       
      />
      
      <div className={about.container}>
        {/* <Div >
      <SideBar/>
      </Div> */}
        <div style={{display:'flex',flexDirection:'row',marginTop:'30px' }}>
          <div className={about.productshow}>
            <h2 >Welcome to MAZ Global – Your Trusted Online Auto Parts Store!</h2>
            <P>
            We are the wholesale and retail provider in theUK and across Europefor a wide range of automotive parts. We stock and supply the aftermarket parts in various categories including engine drivetrain, air compressors, truck clutches, airbrake systems, and a lot more. 
We are committed to deliver you quality by providing genuine products and services as well as implementing the industry standards to ensure customer satisfaction.
MAZ Global is way more than an aftermarket spare parts store as we provide you with authentic products at your doorstep ensuring quick delivery. 
We are here to locate and deliver the right product at the right time. 
We have access to credible suppliers in China, Japan and Europe and deliver our products across the globe.
We connect with our suppliersto get you your desired product via our fast sourcing engine.
Our warehouses are located in the UK and UAE.We firmly believe that our experienced and helpful staff will answer all of your questions.
Our product selection now includes all of the fast-moving items to keep your fleet up and running.
To get your business on the move, you only need to connect with us!

            </P>
            <Link href='/contact'><p className={about.btn}>Contact Us Now</p></Link>
           
          </div>
          <div className={about.largeView} >
          <img src='/block.jpg' 
          style={{width:"200%" ,height:"100%" }}
          />
          </div>
         
        </div>
        
      </div>
      <div className={about.striveBlock}>
        <img className={about.imgView}  src='data:image/jpeg;base64,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'/>
        <div className={about.para}>
       <h2>Striving to Ensure That We Deliver You the Best of Best!</h2> 
       <p>With the extensive combined knowledge and technical acumen of our professionals gained through years of experience, we serve you with a customer-focused approach. 
Our team always goes the extra mile to help our customers get their vehicles back on the road as soon as possible. 
We make sure you get the right parts as soon as possible – and then deliver them to you, no matter when or where you need them.
   </p>
    </div>
    </div>
    
      <Mission/>
    <div className={about.mission} style={{padding:'50px'}}>
     <h2>
     Our Vision & Mission 
     </h2>
     <p>
     Our mission is offering our customers a smooth, hassle-free and high quality sourcing experience, delivering our products in the United Kingdom and across Europe. 
We envision expanding our inventory to deliver high quality products to a wide spectrum of industries and broaden the scope by delivering across the globe.

      </p> 
    </div>

    <div className={about.mission} style={{padding:'30px'}}>
     <h2>
     Our Team of Experienced Professionals
     </h2>
     <div className={about.team} >
     <div style={{margin:'20px'}}>
      <img style={{borderRadius:'50%',width:'170px',height:'160px'}} src='/profile.jpg'/>
      <center><p>M</p></center>
     </div>
     <div style={{margin:'20px'}} >
      <img style={{borderRadius:'50%',width:'170px',height:'160px'}} src='/profile.jpg'/>
      <center><p>A</p></center>
     </div>
     <div style={{margin:'20px'}}>
      <img style={{borderRadius:'50%',width:'170px',height:'160px'}} src='/profile.jpg'/>
      <center><p>Z</p></center>
     </div>
      </div>
</div>

<Brands/>
      <Footer />
    </>
  );
};

export default About;


const Div= styled.h1`
  margin-left:50px;
  @media (max-width: 700px) {
   margin:20px;
}
@media (max-width: 300px) {
  margin:20px;
  
}

`;
const Title = styled.h1`
  margin: 20px;
  text-align: center;
`;

const P = styled.p`
    font-family: 'Montserrat', sans-serif;
    margin-top:20px;
`;
const Bar = styled.div`
  display: flex;
  width: 245px;
  flex-direction: row;
  background-color: whitesmoke;
  //border-style:groove;
  border-bottom-color: whitesmoke;
  text-align: center;
`;

const FilterContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;
const GridArea = styled.div`
  display: flex;
  flex-direction: row;
`;

const Filter = styled.div`
  //margin: 20px;
  display: flex;
  flex-direction: column;

  //height:40px;
  // background-color:white;
`;

const FilterHome = styled.div`
  //margin: 20px;
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  //height:40px;
`;
const Images = styled.div`
  //margin: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  //height:40px;
`;
const LeftBar = styled.div`
  margin-left: 30px;
  margin-top: 55px;
  width: 250px;

  border-color: whitesmoke;
  border-style: ridge;
  // border-style:groove;
  box-shadow: 0 2px 2px rgb(11 25 28 / 10%);
`;

const SearchBar = styled.div`
  margin-left: 30px;
  margin-top: 55px;
  width: 250px;
  margin-bottom: 40px;
  border-color: whitesmoke;
  border-style: ridge;
  // border-style:groove;
  box-shadow: 0 2px 2px rgb(11 25 28 / 10%);
`;

const Right = styled.div`
  margin-left: 30px;
`;

const FilterText = styled.span`
  font-size: 16px;
  padding: 8px;
  font-weight:300;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 10px;
`;
const FilterHomeText = styled.span`
  font-size: 14px;
  padding: 6px;
  /* padding:20px;
  margin-top: 10px;
  margin-left:20px */
`;
const SortText = styled.span`
  font-size: 14px;
`;
const FilterTitle = styled.span`
  font-size: 16px;
  font-weight: 500;
  padding: 9px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: whitesmoke;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const Productshow = styled.div`
  padding: 20px;
  flex:2;
  text-align:justify;
 
  margin-bottom: 50px;
  
  @media (max-width: 700px) {
   margin:20px;
   width:90%;
}
@media (max-width: 300px) {
  margin:20px;
  width:90%;
  
}
`;

const Container = styled.div`
  
  padding:20px;
  margin-left:10%;
  margin-right:20%;
  @media (max-width: 700px) {
    display: flex;
  flex-direction: column;
}
@media (max-width: 300px) {
  display: flex;
  flex-direction: column;
  
}

`;
