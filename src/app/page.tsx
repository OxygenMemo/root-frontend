'use client'

import Image from 'next/image'
import styles from './page.module.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import Navbar from './component/navbar/navbar';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import CardGallery from "react-card-image-gallery";

import CustomCard from './component/imageCard/CustomCard';
const data = [
  {
    img: "nft1.jpg",
    title: "NJ:705001",
    body: "Avocado",
    date: "22/10/2023"
  },
  {
    img: "nft2.jpg",
    title: "NJ:705002",
    body: "Avocado",
    date: "22/10/2023"
  },
  {
    img: "nft3.jpg",
    title: "NJ:705003",
    body: "Avocado",
    date: "22/10/2023"
  },
  {
    img: "nft4.jpg",
    title: "NJ:705004",
    body: "Avocado",
    date: "22/10/2023"
  },
  {
    img: "nft5.jpg",
    title: "NJ:705005",
    body: "Avocado",
    date: "22/10/2023"
  },
]
export default function Home() {
  const [account, setAccount] = useState("")

  // useEffect(() => {

  // },[account])

  const connectWallet = () => {
    if (window.ethereum) {

      // res[0] for fetching a first wallet 
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        // @ts-ignore
        .then((res) => setAccount(res[0]));
    } else {
      alert("install metamask extension!!");
    }
    // alert(account);
  }

  return (
    <>
      {/* // <div> */}
      <Navbar connectWallet={connectWallet} account={account} />
      <div style={{ width: "100%", height: "300px", backgroundImage: "url('/homeHeadBgMint.png')" }}>
        <center>
          <div style={{paddingTop:"100px",fontSize:"30px",color:"white"}}>
            <b>
            ROOOT PROJECT
            </b>
          </div>
        </center>
      </div>
      <br /><br />
      <div className='body'>
        <div style={{ marginLeft: "89px" }}>
          <h1>Gene</h1>
        </div>
        <Container>



          <Row>

            {data.map((d) => {
              return (
                <Col key={d.img + "gg"}>
                  <CustomCard key={`cd-${d.img}`} img={d.img} title={d.title} body={d.body} date={d.date} />
                </Col>
              )
            })}
          </Row>
        </Container>
        {/* <CardGallery imagesPerPage={5}>
          <div>
            <img src={"nft1.jpg"} />
            
          </div>
          <div>
            <img
              src={
                "nft1.jpg"
              }
            />
          </div>
          <div>
            <img
              src={
                "nft2.jpg"
              }
            />
          </div>
          <div>
            <img
              src={
                "nft2.jpg"
              }
            />
          </div>
          <div>
            <img
              src={
                "nft3.jpg"
              }
            />
          </div>
         
        </CardGallery> */}
      </div>
      <br /><br />
      <div style={{ width: "100%", height: "73px", backgroundColor: "#393E14" }}>
        <br />
        <Row style={{ color: "white", fontSize: "13px" }} >
          <Col xs="1" />
          <Col xs="1">
            FOLLOW US
          </Col>
          <Col xs="1">
            FACEBOOK
          </Col>
          <Col xs="1">
            TWITTER
          </Col>
          <Col xs="1">
            DISCORD
          </Col>
        </Row>
      </div>
      {/* <Button variant="primary">Primary</Button>{' '}
            {account}
    </div> */}
    </>
  )
}