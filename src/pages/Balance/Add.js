import React, { Component } from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import { FormattedMessage } from 'react-intl'

import { PageHeader, ContentContainer, PageToolbar, SH } from '../../components/interface'
import { BankAccountsWrapper } from '../../wrappers'
import { TEMP_ADD_BALANCE_PRODUCT_URL } from '../../data/constants'

class AddBalancePage extends Component {

  render()  {

    return (
      <div>
        <PageHeader
          title={<FormattedMessage id="page.balance.add.title" />}
          subtitle={<FormattedMessage id="page.balance.add.subtitle" />}
        />

        <ContentContainer>

          <PageToolbar left={[{label: <FormattedMessage id="page.balance.add.back" />, to: `/`}]} />

          <SH><FormattedMessage id="page.balance.add.section_title.brazil_pagseguro" /></SH>

          <Card>
            <CardHeader><FormattedMessage id="page.balance.add.brazil_credit_card_boleto" /></CardHeader>
            <CardBody>
              <a href={TEMP_ADD_BALANCE_PRODUCT_URL} target="_blank" className="btn btn-primary" >
                 <FormattedMessage id="page.balance.add.brazil_pay_now_pagseguro" />
              </a>
            </CardBody>
          </Card>

          <SH><FormattedMessage id="page.balance.add.section_title.brazil_bank_transfer" /></SH>

          <BankAccountsWrapper />
        </ContentContainer>
      </div>
    )
  }
}

export default AddBalancePage
