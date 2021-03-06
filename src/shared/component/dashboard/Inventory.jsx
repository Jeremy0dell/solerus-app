import React from 'react'

import Card from './Card'

const Inventory = ({ user }) =>
  <div className="row justify-content-between">
    {console.log('Inventory items are', user.ownership)}
    { user && user.ownership.map((item, idx) =>
      <Card key={idx} item={item} />, // eslint-disable-line
    ) }
  </div>

export default Inventory
