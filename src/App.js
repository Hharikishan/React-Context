import {Component} from 'react'

import Header from './components/Header'
import LandingSection from './components/LandingSection'
import FeaturesSection from './components/FeaturesSection'

class App extends Component {
  // eslint-disable-next-line react/no-unused-state
  state = {activeLanguage: 'EN'}

  changeLanguage = activeLanguage => {
    // eslint-disable-next-line react/no-unused-state
    this.setState({activeLanguage})
  }

  render() {
    return (
      <>
        <Header />
        <LandingSection />
        <FeaturesSection />
      </>
    )
  }
}

export default App
