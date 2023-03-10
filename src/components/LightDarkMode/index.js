// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onChangeMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const colorContainer = isDarkMode ? 'Dark-Mode' : 'Light-Mode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'
    const headingText = isDarkMode ? 'Light-text' : 'dark-text'

    return (
      <div className="app-container">
        <div className={`container ${colorContainer}`}>
          <h1 className={headingText}>Click To Change Mode</h1>
          <button type="button" className="btn-1" onClick={this.onChangeMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
