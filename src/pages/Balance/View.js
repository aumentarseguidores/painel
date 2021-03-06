import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'

import { PageHeader, ContentContainer,PageToolbar, SH } from '../../components/interface'
import { BalanceTransactionsWrapper } from '../../wrappers'

class ViewBalancePage extends Component {

  render()  {

    return (
      <div>
        <PageHeader title={<FormattedMessage id="page.balance.view.title" />} subtitle={`R$${this.props.balance.current}`} />
        <PageToolbar left={[{label: <FormattedMessage id="page.balance.toolbar.back" />, to: `/`}, {label: <FormattedMessage id="page.balance.view.toolbar.add" />, to: `/balance/add`}]} />
        <ContentContainer>
          <SH><FormattedMessage id="page.balance.view.section_title.balance_history" /></SH>
          <BalanceTransactionsWrapper />
        </ContentContainer>
      </div>
    )
  }
}

function mapStateToProps({balance}) {
  return { balance }
}

ViewBalancePage = connect(mapStateToProps)(ViewBalancePage)

export default ViewBalancePage
