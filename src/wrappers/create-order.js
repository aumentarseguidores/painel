import React from 'react'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import _ from 'lodash'
import axios from 'axios'
import { notifySuccess, notifyError } from '../actions'

import productsSelector from '../selectors/products'

import { URL_PLACE_ORDER } from '../data/constants'

class CreateOrderWrapper extends React.Component {

  state = { processing: false }
  render = () => <div>{ this.props.children({...this.props, placeOrder: this._placeOrder, processing: this.state.processing })}</div>

  _placeOrder = async (order) => {

    const { auth } = this.props

    order.user = auth.uid

    // Change Loading status
    this.setState({ processing: true })

    console.log(order)

    // Will place remote order
    const response = await axios.post(URL_PLACE_ORDER, order).catch(({response: { data }}) => this.props.notifyError('Por favor insira créditos.', 'Saldo insuficiente') )

    if(response.data && !response.data.error) {
      this.props.notifySuccess(response.data.message)
    }

    this.setState({processing: false})

    return
  }
}

const mapStateToProps = (state, props) =>  {
  const { firebase: { data, auth } } = state
  return { auth, products: productsSelector(state, props), customPrices: data.customPrices }
}

const firebaseData = ({categoryId}, store) =>  {

  const uid = store.getState().firebase.auth.uid

  return [
    { path: `/customPrices/${uid}`, storeAs: 'customPrices' },
    (categoryId ? {path: `/categoryProducts/${categoryId}`, storeAs: 'products' } : '/products')
  ]
}

CreateOrderWrapper = firebaseConnect(firebaseData)(CreateOrderWrapper)
CreateOrderWrapper = connect(mapStateToProps, { notifySuccess, notifyError } )(CreateOrderWrapper)

export { CreateOrderWrapper }
