import { useEffect, useState } from "react";
//import { useSelector } from "react-redux";
//import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {
  Search,
  ShoppingCartOutlined,
  LocalShippingOutlined,
  VerifiedUser,
  Person,
  PhoneOutlined,
  EmailOutlined,
} from "@material-ui/icons";
import { Avatar, Badge } from "@material-ui/core";

import Link from "next/link";
import nav from "../styles/navbar.module.css";
import axios from "axios";
//import logo from "../public/pernia.png";
import jwt_decode from "jwt-decode";

//import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
//import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Navbar, Nav, } from "react-bootstrap";
import Image from "next/image";
import { NavDropdown,Form,FormControl } from "react-bootstrap";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Container } from "react-bootstrap";
import { toast, ToastContainer } from 'react-nextjs-toast';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from '@material-ui/core'
import CustomNav from "./CustomNav";
import router from 'next/router';
//import DropdownC from './Dropdown'
const Navbar2 = () => {
  const [part,setPart]=useState('')
  const [id,setId]=useState()
  const [products,setProducts]=useState('');
  const [errormodal, setErrorModal] = useState(false);
  const errortoggle = () => setErrorModal(!errormodal);
  const handleChange=(e)=>{
   setPart(e.target.value)
  }
  useEffect(() => {
    axios.get(`https://mazglobal.co.uk/maz-api/products`)
    .then(res=>{
      setProducts(res.data.data)
    }).catch(err=>console.log(err))
    // alert('Finished loading');
  }, [id]);


  const Search=()=>{
     let status=false
    products.map(pr=>{
      console.log('name',pr.name)
      console.log('part',part)
      if(pr.part_no==part)
      {
        setId(pr.id)
        console.log('ifff',pr.name)
        setPart('')
        
        router.push(`/productdescp/${pr.id}`);
      }
     
    })
    if(status==false)
    {
    // errortoggle()
    router.push(
      { pathname: "/products", query: { part: part } }
     
    );
    }
  }
  // const [blist, setBlist] = useState(false);
  // const [loggedIn, setloggedIn] = useState("");
  // const [user, setUser] = useState({
  //   first_name: "",
  // });
  // const [items, setItems] = useState([]);
  // const [cats, setCats] = useState([]);
  // const [coll, setColl] = useState([]);
  // const [show, setShow] = useState(false);

  //const { cartItems } = useSelector((state) => state.cart);
  
 

  // const removeToken = () => {
  //   console.log("hry removvee");
  //   localStorage.removeItem("token");
  //   router.push("/");
  // };
  // useEffect(() => {
  //   if(localStorage.getItem('token'))
  //   {
  //   setloggedIn(localStorage.getItem('token'))
  //  var decoded = jwt_decode(localStorage.getItem('token'));
  //  setUser(decoded.result)
  //   }
  //   else{
  //       setloggedIn('')
  //   }
  // },[])
  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     setloggedIn(localStorage.getItem('token'))
  //     console.log('token',localStorage.getItem('token'))
  //     //setloggedIn("");
  //     var decoded = jwt_decode(localStorage.getItem("token"));
  //     setUser(decoded.result);
  //   } else {
  //     setloggedIn("");
  //   }
  //   let list = [];
  //   axios
  //     .get(`http://localhost:8080/ecom-api/suppliers`)
  //     .then((resp) => {
  //       resp.data.data.map((it, i) => {
  //         list.push(it);
  //       });
  //       setItems(list);
  //     })
  //     .catch((err) => console.log(err));

  //   axios
  //     .get(`http://localhost:8080/ecom-api/categories`)
  //     .then((resp) => {
  //       setCats(resp.data.data);
  //     })
  //     .catch((err) => console.log(err));
  //   axios
  //     .get(`http://localhost:8080/ecom-api/collections`)
  //     .then((respo) => {
  //       setColl(respo.data.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const [state,setState]=useState({
    dropdownOpen: false
  })
  
 const  toggle=()=> 
    setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  
  return (
    <div className={nav.Container}>
      <div className={nav.Wrapper}>
        <div className={nav.Topbar}>
     

         <PhoneOutlined
           style={{color:'rgba(16, 103, 138, 0.933)', marginTop: "9px", marginLeft: "140px", fontWeight: "300" }}
           width="25px"
           height="25px"
        
         />
          <p
            style={{
              marginTop: "9px",
              marginLeft: "10px",
              fontWeight: "300",
            }}
          >
            +92-3315677071
          </p>

         
          <EmailOutlined 
          style={{color:'rgba(16, 103, 138, 0.933)', marginTop: "9px", marginLeft: "50px", fontWeight: "300" }}
          width="25px"
          height="25px"/>
          <p style={{ marginTop: "9px",
              marginLeft: "10px",
              fontWeight: "300",}}>
            info@mazglobal.com
          </p>
          <TextField
          style={{marginLeft:'auto',marginTop:'4px',background:'white',height:'30px',marginRight:'200px',paddingLeft:'8px', fontFamily: "'Montserrat', sans-serif"}}
          className={nav.Search}
          onChange={ (event) => setPart(event.target.value) }
          
            value={part}
            //label="   Enter Chance No.OEM No"
            placeholder="Enter Part No"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon style={{marginTop:'0px'}} onClick={()=>Search()}/>
                  </IconButton>
                </InputAdornment>
              )
            }}
           />
         
        </div>

      {/* <CustomNav/> */}


      <ToastContainer align={'right'} position={'top'} /> 

      </div>
      <Modal isOpen={errormodal} toggle={errortoggle}>
        <ModalHeader toggle={errortoggle}>!OOpps</ModalHeader>
        <ModalBody>
          <>!Not Found Product With this part no</>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={errortoggle}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Navbar2;
