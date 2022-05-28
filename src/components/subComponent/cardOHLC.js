import React from "react"

class cardOHLC extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return (
            <div class="col-6 col-lg-3 col-md-6">
                <div class="card">
                    <div class="card-body px-3 py-4-5">
                        <div class="row">
                            <div class="col-md-4">
                                <div class={'stats-icon ' + this.props.bgcolor}>
                                    <i class={this.props.icon}></i>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <h6 class="text-muted font-semibold">{this.props.title}</h6>
                                <h6 class="font-extrabold mb-0">{this.props.value}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default cardOHLC