import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'

import { PageHeader, PageToolbar, LinkList, LinkListItem, ContentContainer } from '../../components/interface'
import { ApiKeyWrapper } from '../../wrappers'

class ApiKeyPage extends Component {

  render()  {

    return (
      <div>

        <PageHeader
          title={<FormattedMessage id="page.account.api.title" />}
          subtitle={<FormattedMessage id="page.account.api.subtitle" />}
        />

        <ContentContainer>

          <PageToolbar left={[{label: <FormattedMessage id="page.account.api.back" />, to: `/`}]} />
          
          <ApiKeyWrapper />

          <LinkList>
            <LinkListItem to="/apidocs" ><FormattedMessage id="page.account.api.api_docs" /></LinkListItem>
          </LinkList>
        </ContentContainer>

      </div>
    )
  }
}

export default ApiKeyPage
