import React from 'react'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

// Select product
const Dropdown = ({ transferState, setCurrProduct }) =>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
    dropdown
    <div style={{ display: 'flex', flexDirection: 'row', lineHeight: '3.6' }}>
      <p style={{ marginRight: '0px', marginBottom: '0px', bottom: '0px' }}> Select Product Line:</p>
      <DropDownMenu
        name="product"
        value={transferState.currProduct}
        onChange={setCurrProduct}
      >
        {
          Object.values(transferState.inventory).map((product, idx) => <MenuItem
            key={idx} // eslint-disable-line
            value={product}
            name="product"
            primaryText={product.name}
          />)
        }
        {/* {
          products.list.map((product, idx) => <MenuItem
            key={idx} // eslint-disable-line
            value={idx}
            name="product"
            primaryText={product.name}
          />)
        } */}
      </DropDownMenu>
      {/* <DropDownMenu name="product" value={form.product} onChange={handleProductDropdown}>
        {
          products.list.map((product, idx) => <MenuItem
            key={idx} // eslint-disable-line
            value={idx}
            name="product"
            primaryText={product.name}
          />)
        }
      </DropDownMenu> */}
    </div>
  </div>

export default Dropdown
