import React from 'react'
import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'

import { PageHeader, ContentContainer, PageToolbar  } from '../../components/interface'
import { SubscriptionStatusFilter } from '../../components/subscriptions'
import { SubscriptionsWrapper } from '../../wrappers'

class SubscriptionsPage extends React.Component {

  state = { status: 'active' }

  render()  {

    return (
      <div>
        <PageHeader title={<FormattedMessage id="page.subscriptions.title" />} />

        <ContentContainer>
          <PageToolbar left={[ {label: <FormattedMessage id="page.subscriptions.toolbar.create" />, to: `/orders/add`}] } />
          <SubscriptionStatusFilter status={this.state.status} handleClick={this._selectStatus} />
          <SubscriptionsWrapper status={this.state.status} />
        </ContentContainer>
        { this._helmet() }
      </div>
    )
  }

  _selectStatus = (status, child) => {
    this.setState({status, child})
  }

  _helmet() {
    return <Helmet><title>Subscriptions / Assinaturas - PainelAS</title></Helmet>
  }
}

export default SubscriptionsPage
