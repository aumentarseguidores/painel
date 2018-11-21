import React from 'react'

class PageHeader extends React.PureComponent {

  render() {

    const { title, subtitle } = this.props

    return (<div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" style={{minHeight: '100px', backgroundColor: '#BD1932'}}>
              <span className="mask bg-gradient-default opacity-6"></span>
              <div className="container-fluid d-flex align-items-center">
                <div className="row">
                  <div className="col-12">
                    <h1 className="display-2 text-white">{title}</h1>
                    { subtitle ? <p className="text-white mt-0">{subtitle}</p> : '' }
                  </div>
                </div>
              </div>
            </div>)
  }
}

class SH extends React.PureComponent {

  render() {

    const { children } = this.props

    return (
      <div className="my-3" >
        <h4 className="title">{children}</h4>
      </div>
    )
  }
}

export { PageHeader, SH }
