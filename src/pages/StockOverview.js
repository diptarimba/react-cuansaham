/* eslint-disable eqeqeq */
/* eslint-disable no-useless-concat */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import {useParams} from "react-router-dom"
import PageHeading from "../pageComponents/PageHeading"
import CardOhlc from "../components/subComponent/cardOHLC"
import CardTopRight from "../components/subComponent/CardTopRight"
import CardStockAnalyze from "../components/subComponent/CardStockAnalyze"
import ChartStockOverview from "../components/subComponent/ChartStockOverview"
import ChartDomesticForeignSO from "../components/subComponent/ChartDomesticForeignSO"

function GetParams(props){
    let kodenya = useParams().kode ?? 'IHSG'
    // console.log(kodenya + ' ' + props.nowCode)
    if(kodenya.toString().toUpperCase() !== props.nowCode.toString()){
        props.getParamsSaham(kodenya)
    }
}

class StockOverview extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            stocklist: [],
            stockcode: 'IHSG',
            pagedata: {
                'CODE' : 'IHSG',
                'data' : {
                    'LAST' : 0,
                    'OPEN' : 0,
                    'CLOSE' : 0,
                    'HIGH' : 0
                },
                'chart' : {
                    'T' : [],
                    'C' : []
                },
                'pie' : {
                    'fVal' : 0,
                    'dVal' : 0
                }
            }
        }
        this.handleKodeSaham = this.handleKodeSaham.bind(this)
    }

    getData(){
        // console.log('Kode Saham ' + this.state.stockcode )
        fetch('https://www.diptarimba.my.id' + '/?page=Overview&kode=' + this.state.stockcode)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ pagedata: data})
            })
            .catch((error)=> {
                console.log('Terjadi Error ' + error)
            })
        fetch('https://www.diptarimba.my.id/?page=listTaData')
            .then((response) => response.json())
            .then((data) => {
                // console.log('ini data tadata')
                // console.log(data)
                this.setState({ stocklist: data})
            })
            .catch((error) => {
                console.log('Terjadi Error : ' + error)
            })

    }

    handleKodeSaham(kode){
        this.setState({
            stockcode : kode.toUpperCase()
        }, () => {
            this.getData()
        })
        
    }

    componentDidMount(){
        this.getData()
    }

    render(){
        const {pagedata} = this.state
        // console.log(pagedata)
        const StockAnalye = [
            {avatar: 'TA', url: '/technical', name: 'Technical', bgcolor: 'bg-warning'},
            {avatar: 'MA', url: '/minervini', name: 'Minervini', bgcolor: 'bg-danger'},
            {avatar: 'CP', url: '/candlestick', name: 'Candlestick', bgcolor: 'bg-success'},
        ]
        const OHLC = pagedata.data
        // console.log(this.state.stocklist)
        return (
            <React.Fragment>
                <PageHeading UrlTujuan="/stockoverview/" stocklist={this.state.stocklist} title="Stock Overview" breadcrumb="Stock Overview" link="/" desc="Lorem ipsum dolor sit amet"/>
                <GetParams nowCode={this.state.stockcode} getParamsSaham={this.handleKodeSaham}/>
                <div class="page-content">
                    <section class="row">
                        <div class="col-12 col-lg-9">
                            <div class="row">
                            <CardOhlc title="Open" value={OHLC.OPEN ?? 0} icon="iconly-boldShow" bgcolor="purple"/>
                            <CardOhlc title="Last" value={OHLC.LAST ?? 0} icon="iconly-boldClose-Square" bgcolor="blue"/>
                            <CardOhlc title="High" value={OHLC.HIGH ?? 0} icon="iconly-boldArrow---Up-Square" bgcolor="green"/>
                            <CardOhlc title="Low" value={OHLC.LOW ?? 0} icon="iconly-boldArrow---Down-Square" bgcolor="red"/>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="card">
                                        <div class="card-header">
                                            <h4>Chart</h4>
                                        </div>
                                        <div class="card-body">
                                            <ChartStockOverview ChartData={pagedata}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-3">
                            <CardTopRight lastprice={OHLC.LAST ?? 0} stockcode={this.state.stockcode}/>
                            <CardStockAnalyze saItems={StockAnalye} />
                            <div class="card">
                                <div class="card-header">
                                    <h4>Domestic/Foreign Value</h4>
                                </div>
                                <div class="card-body">
                                    <ChartDomesticForeignSO ChartData={pagedata}/>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </React.Fragment>
        )
    }
}

export default StockOverview