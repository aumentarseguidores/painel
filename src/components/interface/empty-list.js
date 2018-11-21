import React from 'react'
import { Alert } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormattedMessage } from 'react-intl'

function EmptyList({message}) {

  return (
    <Alert color="secondary" className="my-2" >
      <FontAwesomeIcon icon="exclamation-circle" /> {message || <FormattedMessage id="interface.empty_list.message" />}.
    </Alert>
  )
}

export { EmptyList }
