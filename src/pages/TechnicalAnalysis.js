/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React from "react"
import StuffMA from "../components/subComponent/stuffMA"
import PageHeading from "../pageComponents/PageHeading"
import GuideTechnicalAnalysis from "../components/subComponent/GuideTechnicalAnalysis"

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
        this.handleTimeFrameChange = this.handleTimeFrameChange.bind(this)
    }
    componentDidMount(){
        this.setState({
            tf5: 0,
            tf15: 0,
            tf60: 0,
            tfD: 0
        })
        fetch('https://www.diptarimba.my.id/?page=listTaData')
            .then((response) => response.json())
            .then((data) => {
                this.setState({ stocklist: data})
            })
            .catch((error) => {
                console.log('Terjadi Error : ' + error)
            })
        fetch('https://www.diptarimba.my.id/?page=TAData&kode=' + this.state.stockcode)
            .then((response) => response.json())
            .then((data) => {
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

    handleTimeFrameChange(param, value){
        if(param === 'tf5' && value === true) {
            this.setState(state => ({
                tf5: state.tf5 + 0.5
            }))
        }else if(param === 'tf15' && value === true){
            this.setState(state => ({
                tf15: state.tf15 + 0.5
            }))
        }else if(param === 'tf60' && value === true){
            this.setState(state => ({
                tf60: state.tf60 + 0.5
            }))
        }else if(param === 'tfD' && value === true) {
            this.setState(state => ({
                tfD: state.tfD + 0.5
            }))
        }
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
                                                                <td><StuffMA tipe="tf5" tanda={value.tf5_up_ma ? true : false} onValueChange={this.handleTimeFrameChange} nilai={value.tf5}/></td>
                                                                <td><StuffMA tipe="tf15" tanda={value.tf15_up_ma ? true : false} onValueChange={this.handleTimeFrameChange} nilai={value.tf15}/></td>
                                                                <td><StuffMA tipe="tf60" tanda={value.tf60_up_ma ? true : false} onValueChange={this.handleTimeFrameChange} nilai={value.tf60}/></td>
                                                                <td><StuffMA tipe="tfD" tanda={value.tfD_up_ma ? true : false} onValueChange={this.handleTimeFrameChange} nilai={value.tfD}/></td>
                                                            </tr>
                                                            )
                                                        )
                                                }
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td>Rekomendasi</td>
                                                    <td><span>Bullish : {this.state.tf5}<br/>Bearish : {10 - this.state.tf5}<br/>Kesimpulan : {this.state.tf5 > 5 ? 'Beli' : (this.state.tf5 === 5 ? 'Wait n See' : 'Jual')}</span></td>
                                                    <td><span>Bullish : {this.state.tf15}<br/>Bearish : {10 - this.state.tf15}<br/>Kesimpulan : {this.state.tf15 > 5 ? 'Beli' : (this.state.tf15 === 5 ? 'Wait n See' : 'Jual')}</span></td>
                                                    <td><span>Bullish : {this.state.tf60}<br/>Bearish : {10 - this.state.tf60}<br/>Kesimpulan : {this.state.tf60 > 5 ? 'Beli' : (this.state.tf60 === 5 ? 'Wait n See' : 'Jual')}</span></td>
                                                    <td><span>Bullish : {this.state.tfD}<br/>Bearish : {10 - this.state.tfD}<br/>Kesimpulan : {this.state.tfD > 5 ? 'Beli' : (this.state.tfD === 5 ? 'Wait n See' : 'Jual')}</span></td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <GuideTechnicalAnalysis />
            </React.Fragment>
        )
    }
}

export default TechnicalAnalysis