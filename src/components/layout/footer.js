import React from 'react'
import { FormattedMessage } from 'react-intl'

const AppFooter = () => {
    return (<footer className="container my-3 py-3" >

              <hr/>

              <p className="text-muted" >
                <small><FormattedMessage id="footer.copy_site_name" /></small>
              </p>
            </footer>
           )
}

export default AppFooter
