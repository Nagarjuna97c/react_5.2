import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {light: true}

  changeMode = () => {
    this.setState(prevState => ({light: !prevState.light}))
  }

  render() {
    const {light} = this.state
    let mode
    if (light === true) {
      mode = (
        <div className="sub-container">
          <h1 className="heading">Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.changeMode}>
            Light Mode
          </button>
        </div>
      )
    } else {
      mode = (
        <div className="sub-container container-color">
          <h1 className="heading heading-color">Click To Change Mode</h1>
          <button
            className="button button-color"
            type="button"
            onClick={this.changeMode}
          >
            Dark Mode
          </button>
        </div>
      )
    }
    return <div className="main-container">{mode}</div>
  }
}
export default LightDarkMode
