import React from 'react'
import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'

import { PageHeader, ContentContainer, PageToolbar  } from '../../components/interface'
import { OrderStatusFilter, OrderQuantityFilter } from '../../components/orders'
import { OrdersWrapper } from '../../wrappers'

class OrdersPage extends React.Component {

  state = { status: null, limitToLast: 200 }

  render()  {

    return (
      <div>
        <PageHeader title={<FormattedMessage id="page.orders.title" />} />
        <ContentContainer>
          <PageToolbar left={[ {label: <FormattedMessage id="page.orders.toolbar.create" />, to: `/orders/add`}] } />

          <div className="d-flex justify-content-start align-items-center" >
            <div className="mr-3" >
              <OrderQuantityFilter quantity={this.state.limitToLast} handleClick={this._selectQuantity} />
            </div>
            <OrderStatusFilter status={this.state.status} handleClick={this._selectStatus} />
          </div>

          <OrdersWrapper status={this.state.status} limitToLast={this.state.limitToLast} />
        </ContentContainer>
        { this._helmet() }
      </div>
    )
  }

  _selectStatus = (status) => {
    this.setState({status})
  }

  _selectQuantity = (quantity) => {
    this.setState({ limitToLast: quantity })
  }

  _helmet() {
    return <Helmet><title>Orders/ Pedidos - PainelAS</title></Helmet>
  }
}

export default OrdersPage
