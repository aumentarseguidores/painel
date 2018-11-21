import React from 'react'
import _ from 'lodash'
import { FormattedMessage } from 'react-intl'
import withLocalization from '../../languages/withLocalization'

import { ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap'

class ProductListItem extends React.PureComponent {

  render() {

    const { product } = this.props

    return (<ListGroupItem>
              <ListGroupItemHeading>{ this.renderLabel() }</ListGroupItemHeading>
              <ListGroupItemText><FormattedMessage id="products.price" />: R${product.price} / 1000</ListGroupItemText>
              <ListGroupItemText><FormattedMessage id="products.id" />: {product.id}</ListGroupItemText>
            </ListGroupItem>)
  }

  renderLabel = () => {
    const { locale, product: { label, label_en } } = this.props

    return locale === 'en' ? label_en : label
  }
}

ProductListItem = withLocalization(ProductListItem)

export { ProductListItem }
