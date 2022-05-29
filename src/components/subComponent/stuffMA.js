import React from "react"

class StuffMA extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        this.props.onValueChange(this.props.tipe, this.props.tanda)
    }
    render(){
        var tanda = this.props.tanda ? 'green' : 'red'
        return (
            <React.Fragment>
                {this.props.nilai} <dt class="the-icon"><span style={{color: tanda}}><i class={ tanda ? 'fas fa-angle-double-up' : 'fas fa-angle-double-down'} ></i></span></dt>
            </React.Fragment>
        )
    }
}

export default StuffMA