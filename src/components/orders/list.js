import React from 'react'
import _ from 'lodash'
import { ListGroup } from 'reactstrap'

//import { FormattedMessage } from 'react-intl'

import { OrderListItem } from './'

class OrderList extends React.PureComponent {

  render() {

    return (<ListGroup>
              {_.map( _.orderBy(this.props.orders, ['id'], ['desc'] ) , order => <OrderListItem order={order} key={`${order.id}`} /> )}
            </ListGroup>)
  }
}

export { OrderList }
