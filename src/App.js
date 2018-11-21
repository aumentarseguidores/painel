import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Routes from './Routes'
import { URL_DEFAULT_SITE_URL } from './data/constants'
import AppFooter from './components/layout/footer'
import SideMenu from './components/layout/side-menu'
import TopMenu from './components/layout/top-menu'

import { AppNotifications, LoadingMessage } from './components/interface'
import iconLibraryUtil from './utils/icon-library'

class App extends React.PureComponent {

  render() {

    if(!this.props.auth.isLoaded) {
      return <LoadingMessage />
    }

    return (<BrowserRouter >
              <div>

                {this._helmet()}

                <SideMenu {...this.props} />

                <div className="main-content">
                  <TopMenu {...this.props} />

                  <Routes />

                  <AppFooter />
                </div>


                <AppNotifications />

              </div>
            </BrowserRouter>);
  }

  _helmet()  {
    const title = 'Painel - AumentarSeguidores.com'
    const description = 'O número um em seguidores e curtidas para Instagram e Facebook.'
    return (
      <Helmet>
        <title>{title}</title>
        <meta name="author" content="AumentarSeguidores Social" />
        <meta name="keywords" content="seguidores instagram, seguidores facebook, curtidas instagram, curtidas facebook, famoso, fama, comprefama, comprar seguidores, comprar curtidas, instagram, facebook" />
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow,noodp" />
        <meta http-equiv="expires" content="-1" />
        <meta name="revisit-after" content="1 days" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={URL_DEFAULT_SITE_URL} />
      </Helmet>
    )
  }
}

const mapStateToProps = ({firebase: { auth }}) => ({auth})

export default connect(mapStateToProps)(App)
