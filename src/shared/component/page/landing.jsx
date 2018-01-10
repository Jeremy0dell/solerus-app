import React from 'react'

import styles from '../styles/LandingStyles'

const LandingPage = () =>
  <div>
    <div id="container">
      {/* <img src="/static/images/iphonex-clay-mockup.png" alt="iPhone X" /> */}
      <div style={{ margin: '120px 0px 0px 100px' }}>
        <p id="heroText">Providing proof of ownership and peace of mind for your valuables</p>
        <img src="/static/images/how.png" alt="" />
      </div>
      {/* <button className="btn" id="how">How it works ↓</button> */}
      <div style={styles.authButtons}>
        <img style={styles.authButton} src="/static/images/login.png" alt="" />
        <img style={styles.authButton} src="/static/images/signup.png" alt="" />
      </div>
    </div>


    <div className="bodyText">
      <div style={{ width: 500 }}>
        <h2 className="paraTitle" id="header">Completely secure.</h2>
        <p className="text"> Solerus tokens provide proof of ownership for any product. Think of it as a receipt proving that you bought an authentic item. Tokens can be issued for any valuable asset like jewelry, watches, or handbags. Each token is exclusively created by manufacturers and recorded on the blockchain. You receive the corresponding token when you purchase a Solerus-backed product.</p>
      </div>

      <img className="imgContainer" src="/static/images/vault.png" alt="" />

    </div>

    {/* <hr align="center" /> */}

    <div className="bodyTextRight">

      <img className="imgContainer" src="/static/images/page.png" alt="" />

      <div style={{ width: 500 }}>
        <h2 className="paraTitle" id="headerTwo"> What is the blockchain? </h2>
        <p className="text"> A blockchain is a sophisticated digital ledger. It can keep records that are immune to tampering and fraud. With Solerus, your ownership of an item is written to the blockchain to keep permenent record. </p>
      </div>

    </div>

    {/* <hr align="center" /> */}

    <div className="bodyText">

      <div style={{ width: 550 }}>
        <h2 className="paraTitle" id="headerTwo"> Another line of defense against theft and loss. </h2>
        <p className="text"> Just like your car or property title, a Cora token proves that you and only you own the asset. In the case of theft or loss, you still retain the Cora token. Your item can be reported missing on the blockchain, preventing others from reselling or purchasingyour item. </p>
      </div>

      <img className="imgContainer" src="/static/images/vault.png" alt="" />

    </div>

    {/* <hr align="center" /> */}

    <div className="bodyTextRight">

      <img className="imgContainer" src="/static/images/mag.png" alt="" />

      <div style={{ width: 500 }}>
        <h2 className="paraTitle" id="headerTwo"> Easily distinguish real goods from fakes. </h2>
        <p className="text"> Since every product has a unique Cora token associated with it, it’s easy to tell what is authentic and what is fake: simply ask for the Cora token. Tokens can only be created by manufacturers, ensuring that they correspond to authentic goods. </p>
      </div>

    </div>

    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img style={{ height: '50%', width: '50%' }} src="/static/images/waiting-list.png" alt="" />
        <p style={styles.launchText}>Expected to launch mid-2018</p>
      </div>
    </div>
  </div>

export default LandingPage