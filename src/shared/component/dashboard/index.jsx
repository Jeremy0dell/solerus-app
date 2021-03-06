import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { assign, isObject } from 'lodash'

import Dashboard from './Dashboard'
import { PRODUCT_INDEX } from '../../routes'

class DashboardContainer extends Component { // eslint-disable-line
  constructor(props) {
    super(props)

    this.state = { items: [] }
  }

  componentDidMount() {
    const { user } = this.props
    console.log('user is now', user.ownership)

    user.ownership.forEach(
      item => Promise.all([axios.get(
        `/api${PRODUCT_INDEX}/${isObject(item.product) ? item.product._id : item.product}`,
        // ^^ This is weird... coming back from the detailed view product is an Object
        // but entering normally/refreshing has product as an id-string... Will look into
      ), item])
      .then((res) => {
        const { data } = res[0]; const item = res[1] // gathering data from Promise
        assign(item, { product: data }) // making item with Product
        this.setState({}) // this is basically a hack
      }),
    )
  }

  render() {
    const { user } = this.props

    return (
      <Dashboard user={user} />
    )
  }
}

export default connect(state => ({ user: state.authentication.user }))(DashboardContainer)
