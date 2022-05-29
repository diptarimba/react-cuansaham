/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
// import SidebarHeader from "./SidebarHeader"
import SidebarSingle from "./SidebarSingle"

class Sidebar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            toggleSidebar: props.valueSidebar
        }
        this.handleToggleSidebarClick = this.handleToggleSidebarClick.bind(this)
    }

    handleToggleSidebarClick(){
        console.log(!this.state.toggleSidebar)
        this.props.onValueSidebarChange(!this.state.toggleSidebar)
    }

    render(){
        const toggleSidebar = this.props.valueSidebar
        return (
            <div id="sidebar" class={toggleSidebar ? 'active' : ''}>
            <div class="sidebar-wrapper active">
                <div class="sidebar-header position-relative">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="logo">
                            <a href="#"><img src="assets/images/logo/logo.svg" alt="Logo" srcset=""/></a>
                        </div>
                        <div class="sidebar-toggler x" >
                            <a href="#" class="sidebar-hide d-xl-none d-block" onClick={this.handleToggleSidebarClick}><i class="bi bi-x bi-middle"></i></a>
                        </div>
                    </div>
                </div>
                <div class="sidebar-menu">
                    <ul class="menu">
                        <SidebarSingle link="/stockoverview" name="Stock Overview" icon="bi bi-grid-fill"/>
                        <SidebarSingle link="/technical" name="Technical Analysis" icon="bi bi-stack"/>
                        <SidebarSingle link="/minervini" name="Minervini" icon="bi bi-person-circle"/>
                        <SidebarSingle link="/candlestick" name="Candlestick" icon="bi bi-bar-chart-fill"/>
                        <SidebarSingle link="/screener" name="Screener Saham" icon="bi bi-filter-square-fill"/>
                        <SidebarSingle link="/stocklist" name="List Saham" icon="bi bi-lightning-fill"/>
                        <SidebarSingle link="/news" name="News" icon="bi bi-layers-fill"/>
                        <SidebarSingle link="/education" name="Education" icon="bi bi-collection-play-fill"/>
                        <SidebarSingle link="/contact" name="Contact Me" icon="bi bi-collection-fill"/>
                    </ul>
                </div>
            </div>
            </div>
        )
    }
}

export default Sidebar