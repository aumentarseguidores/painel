import React from 'react'
import { Helmet } from 'react-helmet'

import { AuthRegister } from '../../components/auth'
import { ContentContainer } from '../../components/interface'
const RegisterPage = () => {

  return (
      <ContentContainer>
        <AuthRegister />
        <Helmet><title>{title}</title><meta property="og:title" content={title} /><meta property="og:url" content={`https://painel.AumentarSeguidores.com.br/register`} /></Helmet>
      </ContentContainer>
  )
}

export default RegisterPage

const title = "Registration / Cadastro - AumentarSeguidores.com"
