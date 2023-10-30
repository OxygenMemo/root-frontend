import React from 'react';
import "./navbar.module.css"
import Link from 'next/link'

interface Params {
    connectWallet: Function,
    account: string
}
function Navbar(params: Params) {
    return (
        <div className="container-fluid ">
            <div className="row align-items-center text-white" style={{ height: '50px', backgroundColor: "#393E14" }}>

                {/* Menu Icon */}
                <div className="col-2 text-center">
                    <i className="fa fa-bars"></i>
                </div>
                <div className="col-3 " />
                <div className="col-4 text-center">
                    {/* Tree Button */}
                    <div className='d-flex flex-row'>
                        <Link href={"/"}><button className="btn  btn-outline-light" style={{ borderRadius: "5px 0px 0px 5px" }}>TREE</button></Link>
                        <Link href={"MintPage"}><button className="btn btn-outline-light" style={{ borderRadius: "0px 5px 5px 0px" }} >MINT</button></Link>
                    </div>
                    {/* Mint Button */}
                    {/* <div className='d-flex'>
                        
                    </div> */}
                </div>

                <div className="col-1" />


                {/* Connect Wallet Button */}
                <div className="col-2 text-center">
                    {params.account ?
                        <button className="btn btn-outline-light">{params.account.slice(0, 6) + '...' + params.account.slice(-3)}</button> :
                        <button className="btn btn-outline-light" onClick={() => { params.connectWallet() }}>CONNECT WALLET</button>}

                </div>

            </div>
        </div>
    );
}

export default Navbar;
