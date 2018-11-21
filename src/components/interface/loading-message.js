import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function LoadingMessage() {

  return (
    <div className="my-3 text-center" >
      <FontAwesomeIcon icon="spinner" spin /> Carregando...
    </div>
  )
}

export { LoadingMessage }
