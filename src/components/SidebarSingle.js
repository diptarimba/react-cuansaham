import React from "react"
import {Link} from "react-router-dom"

class SidebarSingle extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            link: props.link,
            name: props.name,
            icon: props.icon,
            active: false
        }
    }

    render(){
        return (
            <li
                class={this.state.active ? 'sidebar-item active' : 'sidebar-item'}>
                <Link to={this.state.link} class='sidebar-link'>
                    <i class={this.state.icon}></i>
                    <span>{this.state.name}</span>
                </Link>
            </li>
        )
    }
}

export default SidebarSingle