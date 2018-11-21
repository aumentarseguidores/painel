import React from 'react'
import { Helmet } from 'react-helmet'
import { UncontrolledAlert } from 'reactstrap'
import { FormattedMessage } from 'react-intl'
import { isLoaded, isEmpty } from 'react-redux-firebase'

import { PageHeader, Whatsapp, ContentContainer, LoadingMessage, EmptyList } from '../../components/interface'
import { CreateOrderWrapper } from '../../wrappers'
import { CreateOrder } from '../../components/create-order'

import { PHONE_SUPPORT_PHONE } from '../../data/constants'

class CreateOrderPage extends React.Component {

  render()  {

    return (
      <div>
        <PageHeader title={<FormattedMessage id="page.orders.create.title" />} />

        <ContentContainer>

          <UncontrolledAlert>
            <h6><FormattedMessage id="page.orders.create.alert.problems_or_questions" /></h6>
            <Whatsapp number={PHONE_SUPPORT_PHONE} />
          </UncontrolledAlert>

          <UncontrolledAlert color="warning" >
            <h6><FormattedMessage id="page.orders.create.warnings.title" /></h6>
            <ul>
              <li><b><FormattedMessage id="page.orders.create.warnings.private_profile" /></b></li>
              <li><FormattedMessage id="page.orders.create.warnings.no_double_order" /></li>
  	          <li><FormattedMessage id="page.orders.create.warnings.attention_to_data" /></li>
            </ul>
          </UncontrolledAlert>

        <CreateOrderWrapper categoryId={this.props.match.params.categoryId} >
          {
            ({products, customPrices, placeOrder, processing}) => {

              if(!isLoaded(products) && !isLoaded(customPrices)) {
                return <LoadingMessage />
              }

              if(isEmpty(products)) {
                return <EmptyList />
              }

              return <CreateOrder products={products} handleAction={placeOrder} customPrices={customPrices} processing={processing} />
            }
          }
        </CreateOrderWrapper>

        </ContentContainer>
        { this._helmet() }
      </div>
    )
  }

  _selectStatus = (status, child) => {
    this.setState({status, child})
  }

  _helmet() {
    return <Helmet><title>New order / Novo pedido - PainelAS</title></Helmet>
  }
}

export default CreateOrderPage
