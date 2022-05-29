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

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            stocklist: [],
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
    }

    getData(){
        fetch('https://www.diptarimba.my.id' + '/?page=Overview&kode=' + this.state.pagedata.CODE)
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
                console.log('Diselesaikan')
                this.setState({ stocklist: data})
            })
            .catch((error) => {
                console.log('Terjadi Error : ' + error)
            })

    }

    componentDidMount(){
        this.getData()
    }

    render(){
        
        const {pagedata} = this.state
        const StockAnalye = [
            {avatar: 'TA', url: '/technical', name: 'Technical', bgcolor: 'bg-warning'},
            {avatar: 'MA', url: '/minervini', name: 'Minervini', bgcolor: 'bg-danger'},
            {avatar: 'CP', url: '/candlestick', name: 'Candlestick', bgcolor: 'bg-success'},
        ]
        const OHLC = pagedata.data
        console.log(this.state.stocklist)
        return (
            <React.Fragment>
                <PageHeading stocklist={this.state.stocklist} title="Tampilan" breadcrumb="Stock Overview" link="/" desc="Lorem ipsum dolor sit amet"/>
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
                            <CardTopRight lastprice={OHLC.LAST ?? 0} stockcode={pagedata.CODE}/>
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

export default Home