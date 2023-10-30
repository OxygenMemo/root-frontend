'use client'

import Image from 'next/image'
import styles from './page.module.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import Navbar from '../component/navbar/navbar';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import CardGallery from "react-card-image-gallery";

import CustomCard from '../component/imageCard/CustomCard';
import { Typography } from '@mui/material';
import Web3 from "web3"
import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider
  }
}
const abi = [
  {
    "inputs": [],
    "name": "mint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
]
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
  // {
  //   img: "nft4.jpg",
  //   title: "NJ:705004",
  //   body: "Avocado",
  //   date:"22/10/2023"
  // },
  // {
  //   img: "nft5.jpg",
  //   title: "NJ:705005",
  //   body: "Avocado",
  //   date:"22/10/2023"
  // },
]
export default function Home() {
  const [account, setAccount] = useState("")
  const mintNFT = async () => {
    if (account == "") {
      alert("connect wallet first")
      return
    }
    // console.log("window.ethereum.provider",window.ethereum)
    // @ts-ignore
    const web3 = new Web3(window.ethereum)
    const nodeGasPrice = await web3.eth.getGasPrice();
    // @ts-ignore
    const contract = new web3.eth.Contract(abi, "0x5Df10b8BfbC5e925e86d152a92D7d4d29aB8E847")
    console.log("account", account)
    const x = await contract.methods.mint().send({ from: account })

  }
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
      <div style={{ width: "100%", height: "300px", backgroundImage: "url('/homeHeadBgmint.png')" }}>
        {/* <CustomSidebar /> */}
        <center style={{ paddingLeft: "100px", fontSize: "20px" }}>
          <div style={{ paddingTop: "100px", color: "white" }}>Plant Today, Prosper Tomorrow<br />
            Investing in a Greener Future.</div>
        </center>
      </div>
      <div className='body'>
        <div>
          {/* <h1>Gene</h1> */}
        </div>
        <Container style={{ paddingTop: "100px" }} className='align-content-center'>
          <Row className="justify-content-md-center">

            {data.map((d) => {
              return (
                <Col key={d.img} xs="3">
                  <CustomCard key={`cd-${d.img}`} img={d.img} title={d.title} body={d.body} date={d.date} />
                </Col>
              )
            })}
          </Row>

          <br />
          <Row className="justify-content-md-center">
            <Col xs="12" style={{ alignItems: "center" }}>
              <center>
                <Typography>
                  Digitally Plant, Real-World Impact
                </Typography>
                <br />
                <Button onClick={mintNFT} type="button" className="btn btn-success">Mint Your Tree NFT Now!</Button>
              </center>
            </Col>
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
        <Row style={{color:"white",fontSize:"13px"}} >
        <Col xs="1"/>
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