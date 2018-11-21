import moment from 'moment'
import _ from 'lodash'

import { generateQuantity, generateFieldsValues, calculateCharge } from './'

const generateOrder = (values, product, customPrices) => {

  const date = moment().format()
  const status = 'pending'
  const quantity = generateQuantity(values, product.quantityModifier)

  return {
    product: _.pick( product, ['id', 'label', 'label_en', 'price', 'provider', 'service_id', 'category'] ) , // We use the full Product object because a product might change but an order should not
    charge: calculateCharge(quantity, product, customPrices),
    panelOrder: {
      ...quantity,
      ...generateFieldsValues(values)
    },
    status,
    createdOn: date,
    modifiedOn: date,
    type: product.type,
    user: null,
    source: 'web'
  }
}

export { generateOrder }
