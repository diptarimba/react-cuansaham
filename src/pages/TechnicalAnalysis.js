/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React from "react"
import StuffMA from "../components/subComponent/stuffMA"
import PageHeading from "../pageComponents/PageHeading"

class TechnicalAnalysis extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            TechnicalAnalysisData: [],
            listTA: [],
            stockcode: 'IHSG',
            stocklist: [],
            tf5: 0,
            tf15: 0,
            tf60: 0,
            tfD: 0
        }
    }
    componentDidMount(){
        fetch('https://www.diptarimba.my.id/?page=listTaData')
            .then((response) => response.json())
            .then((data) => {
                this.setState({ stocklist: data})
            })
            .catch((error) => {
                console.log('Terjadi Error : ' + error)
            })
        fetch('https://www.diptarimba.my.id/?page=TAData&kode=IHSG')
            .then((response) => response.json())
            .then((data) => {
                console.log('ini data' + data)
                console.log('ini data' + data)
                this.setState({ TechnicalAnalysisData: data})
            })
            .catch((error) => {
                console.log('Terjadi Error : ' + error)
            })

            const ta_name = ['sma', 'ema']
            var listTA = []
            ta_name.map((value) => {
                const period = [5,10,20,60,100]
                period.map((valuePeriod)=>{
                    let newItem = value+valuePeriod
                    listTA[newItem] = value === 'sma' ? `Simple Moving Average ${valuePeriod}` : `Exponential Moving Average ${valuePeriod}`
                }, value)
            })
            this.setState({ listTA : listTA} )
    }

    render(){
        var dataTA = this.state.TechnicalAnalysisData
        return (
            <React.Fragment>
                <PageHeading stocklist={this.state.stocklist} title={`$${this.state.stockcode} Technical Analysis`} breadcrumb="Technical Analysis" link="/" desc="Lorem ipsum dolor sit amet"/>
                <section class="section">
                    <div class="row" id="basic-table">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title text-center">Last Price : </h4>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-lg">
                                            <thead>
                                                <th>Trend</th>
                                                <th>5 Minutes</th>
                                                <th>15 Minutes</th>
                                                <th>1 Hours</th>
                                                <th>1 Day</th>
                                            </thead>
                                            <tbody>
                                                {
                                                        dataTA.data?.map((value) => (
                                                            <tr>
                                                                <td>{this.state.listTA[value.technical]}</td>
                                                                <td><StuffMA tanda={value.tf5_up_ma ? true : false} nilai={value.tf5}/></td>
                                                                <td><StuffMA tanda={value.tf15_up_ma ? true : false} nilai={value.tf15}/></td>
                                                                <td><StuffMA tanda={value.tf60_up_ma ? true : false} nilai={value.tf60}/></td>
                                                                <td><StuffMA tanda={value.tfD_up_ma ? true : false} nilai={value.tfD}/></td>
                                                            </tr>
                                                            )
                                                        )
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default TechnicalAnalysis