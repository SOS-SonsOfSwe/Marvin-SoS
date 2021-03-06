import React, { Component } from 'react'
import InsertUserFormContainer from '../../containers/InsertUser/InsertUserFormContainer'
import { connect } from 'react-redux'
import Popup from 'react-popup'
// import store from '../store'

class InsertUser extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return (
      <main className="container">
      <Popup
                        className="mm-popup"
                        btnClass="mm-popup__btn"
                        closeBtn={false}
                        closeHtml={null}
                        defaultOk="Ok"
                        defaultCancel="Cancel"
                        wildClasses={false}
                        escToClose={true}
                    />
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Insert user</h1>
            <p><strong>{this.props.authData.payload.FC}</strong>, now you can add a user.</p>
            <InsertUserFormContainer type={this.props.location.state.type} />
          </div>
        </div>
      </main>
    )
  }
}

// export default AddUser
export default connect(state => ({
  authData: state.user.data
}))(InsertUser)
