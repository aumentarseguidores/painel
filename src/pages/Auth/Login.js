import React from 'react'
import { Helmet } from 'react-helmet'

import { AuthLogin } from '../../components/auth'
import { ContentContainer } from '../../components/interface'

const LoginPage = () => {

  return (<ContentContainer>
            <AuthLogin />
            <Helmet><title>{title}</title><meta property="og:title" content={title} /><meta property="og:url" content={`https://mercadomaritimo.com.br/login`} /></Helmet>
          </ContentContainer>)
}

export default LoginPage

const title = "Login - AumentarSeguidores.com"
