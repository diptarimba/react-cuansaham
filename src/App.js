/* eslint-disable jsx-a11y/anchor-is-valid */
// import logo from './logo.svg';
import './App.css';
import React from "react"
import { BrowserRouter } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import StockOverview from './pages/StockOverview';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(props){
      super(props)
      this.state = {
          toggleSidebar: true,
          content: props.content,
          width: 0,
          height: 0
      }
      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      this.handleValueSidebarChange = this.handleValueSidebarChange.bind(this)
      this.handleSidebarToggleClick = this.handleSidebarToggleClick.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ 
      width: window.innerWidth,
      height: window.innerHeight,
      toggleSidebar: window.innerWidth < 992 ? false : true
    });
  }

  handleValueSidebarChange(value){
      this.setState({
          toggleSidebar: value
      })
  }

  handleSidebarToggleClick(){
      this.setState(state => ({
          toggleSidebar: !state.toggleSidebar
      }))
  }


  render(){
      const SidebarValue = this.state.toggleSidebar
      return (
          <BrowserRouter>
            <div className="App" onWindow>
              <Sidebar valueSidebar={SidebarValue} onValueSidebarChange={this.handleValueSidebarChange} />
              <div id="main">
                    <header class="mb-3">
                        <a href="#" class="burger-btn d-block d-xl-none" onClick={this.handleSidebarToggleClick}>
                            <i class="bi bi-justify fs-3"></i>
                        </a>
                    </header>
                    <StockOverview/>
                    <Footer/>
              </div>
            </div>
          </BrowserRouter>
      )
  }
}

export default App;