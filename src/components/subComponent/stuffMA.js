import React from "react"

function StuffMA(props){
    var tanda = props.tanda ? 'green' : 'red'
    return (
        <React.Fragment>
            {props.nilai} <dt class="the-icon"><span style={{color: tanda}}><i class={ tanda ? 'fas fa-angle-double-up' : 'fas fa-angle-double-down'} ></i></span></dt>
        </React.Fragment>
    )
}

export default StuffMA