import React from 'react'
import { FormattedMessage } from 'react-intl'

import { ProductsWrapper } from '../wrappers'
import { PageHeader, ContentContainer } from '../components/interface'

class ProductsPage extends React.PureComponent {

  render()  {

    return (<div>
              <PageHeader title={<FormattedMessage id="page.catalog.title" />} subtitle={<FormattedMessage id="page.catalog.subtitle" />} />
              <ContentContainer>
                <ProductsWrapper />
              </ContentContainer>
            </div>)
  }
}

export default ProductsPage
