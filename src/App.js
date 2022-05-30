/* eslint-disable jsx-a11y/anchor-is-valid */
// import logo from './logo.svg';
import './App.css';
import React from "react"
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import StockOverview from './pages/StockOverview';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import TechnicalAnalysis from './pages/TechnicalAnalysis';
import LocationChecker from './components/subComponent/LocationChecker'

function Redirect(props){
  let navigate = useNavigate()
  return navigate(props.to)
}

class App extends React.Component {
  constructor(props){
      super(props)
      this.state = {
          toggleSidebar: true,
          content: props.content,
          width: 0,
          height: 0,
          keypage: '/stockoverview'
      }
      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      this.handleValueSidebarChange = this.handleValueSidebarChange.bind(this)
      this.handleSidebarToggleClick = this.handleSidebarToggleClick.bind(this)
      this.handleSidebarLocation = this.handleSidebarLocation.bind(this)
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

  handleSidebarLocation(value){
    if(this.state.width < 992 && this.state.toggleSidebar === true && this.state.keypage !== value){
      this.setState(state => ({
          toggleSidebar: !state.toggleSidebar,
          keypage: value
      }))
    }
  }


  render(){
      const SidebarValue = this.state.toggleSidebar
      return (
          <BrowserRouter>
            <LocationChecker onLocationChange={this.handleSidebarLocation}/>
            <div className="App" onWindow>
              <Sidebar valueSidebar={SidebarValue} onValueSidebarChange={this.handleValueSidebarChange} />
              <div id="main">
                    <header class="mb-3">
                        <a href="#" class="burger-btn d-block d-xl-none" onClick={this.handleSidebarToggleClick}>
                            <i class="bi bi-justify fs-3"></i>
                        </a>
                    </header>
                    <Routes>
                      <Route exact path="/" element={<Redirect to="/stockoverview"/>}/>
                      <Route path='/stockoverview' exact element={<StockOverview/>}/>
                      <Route path='/stockoverview/:kode' exact element={<StockOverview/>}/>
                      <Route path='/technical' exact element={<TechnicalAnalysis/>}/>
                      <Route path='/technical/:kode' exact element={<TechnicalAnalysis/>}/>
                      <Route path='*' element={<NotFound/>}/>
                      {/* <Route element={<NotFound/>}/> */}
                    </Routes>
                    <Footer/>
              </div>
            </div>
          </BrowserRouter>
      )
  }
}

export default App;
