import React from 'react'
import { connect } from 'react-redux'
import { Switch, withRouter } from 'react-router'
import { Route } from 'react-router-dom'

import {
  MANUFACTURER_INDEX,
  MANUFACTURER_CREATE_CERTIFICATES,
  MANUFACTURER_CREATE_PRODUCT,
  MANUFACTURER_TRANSFER_PAGE,
  MANUFACTURER_ANALYTICS_PAGE,
} from '../../../shared/manufacturerRoutes'

import Nav from './Nav'
import Dashboard from './Dashboard'
import CreateCertificates from './Create/CreateCertificates'
import CreateProduct from './Create/CreateProduct'
import TransferPage from './Transfer/'
import AnalyticsPage from './Analytics/'

const ManufacturerContainer = ({ user }) =>
  <div>
    <Nav />
    {/* eslint-disable */}
    <Switch>
      <Route exact path={MANUFACTURER_INDEX} render={() => <Dashboard user={user} />} />
      <Route path={MANUFACTURER_CREATE_CERTIFICATES}
        render={() => <CreateCertificates user={user} />} />
      <Route exact path={MANUFACTURER_CREATE_PRODUCT}
        render={() => <CreateProduct user={user} />} />
      <Route exact path={MANUFACTURER_TRANSFER_PAGE} render={() => <TransferPage user={user} />} />
      <Route exact path={MANUFACTURER_ANALYTICS_PAGE} render={() => <AnalyticsPage user={user} />} />
    </Switch>
  </div>

export default withRouter(connect(state => ({ user: state.authentication.user }))(ManufacturerContainer))
/* eslint-enable */
