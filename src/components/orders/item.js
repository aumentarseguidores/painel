import React from 'react'
import { Link } from 'react-router-dom'
import { Badge, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button, Card, CardBody, Row, Col } from 'reactstrap'
import moment from 'moment'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { FormattedMessage } from 'react-intl'

class OrderListItem extends React.PureComponent {

  render()  {

    const { order } = this.props

    return (<ListGroupItem>
              <div className="d-flex justify-content-between mb-2" >
                <span>{order.panelOrder.quantity} x {order.product.label}</span>
                <span>R${order.charge}</span>
              </div>
              <div className="d-flex justify-content-between align-items-center my-2" >
                { this._renderTarget() }
                {order.source === 'api' ? <span><Badge color="info" >api</Badge></span> : '' }
              </div>
              <div className="d-flex justify-content-between my-2 text-muted" >
                <small>{order.status}</small>
                { order.panelOrder.startCount ? <small><FormattedMessage id="order_list.headers.initial_count" />{`:`} { order.panelOrder.startCount }</small> : null  }
              </div>
              <div className="mt-2 d-flex justify-content-between text-muted" >
                <CopyToClipboard text={order.id} ><small>{order.id} <FontAwesomeIcon icon="copy" /></small></CopyToClipboard>
                <small>{ moment(order.createdOn).format('DD/MM/YYYY@HH:mm') }</small>
              </div>
            </ListGroupItem>)
  }

  _renderTarget() {
  const { order: { panelOrder: { link, profile, username } }} = this.props
  return <span style={{wordWrap: 'break-word'}}>{link || profile || username}</span>
}
}

export { OrderListItem }


// import React from 'react'
// import moment from 'moment'
// import { FormattedMessage } from 'react-intl'
//
// import systemData from '../../data/system'
// const statuses = systemData.orderStatuses
//
// class OrderListItem extends React.PureComponent {
//
//   render()  {
//
//     const { order } = this.props
//
//     return (
//       <tr>
//         <td>
//             <small><a href="javascript:;" onClick={() => alert(order.id)}><FormattedMessage id="order_list.get_id" /></a></small>
//             <br/>
//             <small>{ this._renderDate() }</small>
//         </td>
//         <td>{order.product.label}</td>
//         <td>{order.panelOrder.quantity}</td>
//         <td>{ this._renderTarget() }</td>
//         <td>{ order.panelOrder.startCount || '-' }</td>
//         <td>R${order.charge}</td>
//         <td>{ this._renderOrderStatus() }</td>
//       </tr>
//     )
//   }
//
//   _renderTarget() {
//     const { order: { panelOrder: { link, profile } }} = this.props
//
//     return link || profile
//   }
//
//   _renderDate() {
//     return moment(this.props.order.createdOn).format('DD/MM - HH:mm')
//   }
//
//   _renderOrderStatus() {
//     const { order: { status }} = this.props
//
//     var textColor
//
//     switch(status)  {
//       case statuses.pending:
//         textColor = 'text-muted'
//       break
//
//       case statuses.completed:
//         textColor = 'text-success'
//       break
//
//       case statuses.canceled:
//         textColor = 'text-danger'
//       break
//
//       default:
//         textColor = ''
//     }
//
//     return <span className={`${textColor}`} >{status}</span>
//   }
// }
//
// export { OrderListItem }
