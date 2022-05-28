import React from "react"

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
                <a href={this.state.link} class='sidebar-link'>
                    <i class={this.state.icon}></i>
                    <span>{this.state.name}</span>
                </a>
            </li>
        )
    }
}

export default SidebarSingle