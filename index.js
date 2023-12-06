// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: true, lastName: true}

  hideFirstName = () => {
    const {firstName} = this.state
    if (firstName === true) {
      this.setState({firstName: false})
    } else {
      this.setState({firstName: true})
    }
  }

  hideLastName = () => {
    const {lastName} = this.state
    if (lastName === true) {
      this.setState({lastName: false})
    } else {
      this.setState({lastName: true})
    }
  }

  render() {
    const {firstName, lastName} = this.state
    let firstNameCard = null
    let lastNameCard = null
    let buttonFirstName = null
    let buttonLastName = null
    if (firstName === true) {
      firstNameCard = <p className="name-card">Joe</p>
      buttonFirstName = (
        <button
          type="button"
          className="border-black-button"
          onClick={this.hideFirstName}
        >
          Show/Hide FirstName
        </button>
      )
    } else {
      firstNameCard = null
      buttonFirstName = (
        <button type="button" className="button" onClick={this.hideFirstName}>
          Show/Hide FirstName
        </button>
      )
    }
    if (lastName === true) {
      lastNameCard = <p className="name-card">Jonas</p>
      buttonLastName = (
        <button
          type="button"
          className="border-black-button"
          onClick={this.hideLastName}
        >
          Show/Hide LastName
        </button>
      )
    } else {
      lastNameCard = null
      buttonLastName = (
        <button type="button" className="button" onClick={this.hideLastName}>
          Show/Hide LastName
        </button>
      )
    }
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-section">
          {buttonFirstName}
          {buttonLastName}
        </div>
        <div className="display-card">
          {firstNameCard}
          {lastNameCard}
        </div>
      </div>
    )
  }
}

export default ShowHide
