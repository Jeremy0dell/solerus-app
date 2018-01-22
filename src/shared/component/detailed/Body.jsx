import React from 'react'

import ItemView from './ItemView'
import ItemInfo from './ItemInfo'
import TransferModal from './TransferModal'
// import TopBar from './TopBar'
// import Inventory from './Inventory'
import styles from '../styles/DetailedStyles'

// <Picture with Title />
// <div>
//   <Descriptions>
//   <Buttons />
// </div>

const TransferButton = ({ text }) =>
  <button
    style={styles.transferButton}
    data-toggle="modal"
    data-target="#transferModal"
  >
    {text}
  </button>

const LostButton = ({ text }) => <button style={styles.lostButton}>{text}</button>


const Body = ({ item, email }) =>
  <div style={styles.body}>
    <ItemView item={item} />
    <div style={{ width: '40%' }}>
      <ItemInfo item={item} />
      <div style={{ display: 'flex', marginTop: '5%' }}>
        <TransferButton text="Transfer" />
        <LostButton text="Report Lost" />
        <TransferModal email={email} id={item._id} />
      </div>
    </div>
  </div>

export default Body
