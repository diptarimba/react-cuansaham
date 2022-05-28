/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import PageHeading from "../pageComponents/PageHeading"
import CardOhlc from "../components/subComponent/cardOHLC"
import CardTopRight from "../components/subComponent/CardTopRight"
import CardStockAnalyze from "../components/subComponent/CardStockAnalyze"

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        const StockAnalye = [
            {avatar: 'TA', url: '/technical', name: 'Technical', bgcolor: 'bg-warning'},
            {avatar: 'MA', url: '/minervini', name: 'Minervini', bgcolor: 'bg-danger'},
            {avatar: 'CP', url: '/candlestick', name: 'Candlestick', bgcolor: 'bg-success'},
        ]
        return (
            <React.Fragment>
                <PageHeading title="Tampilan" breadcrumb="Nganu" link="/" desc="Lorem ipsum dolor sit amet"/>
                <div class="page-content">
                    <section class="row">
                        <div class="col-12 col-lg-9">
                            <div class="row">
                            <CardOhlc title="Open" value="1000" icon="iconly-boldShow" bgcolor="purple"/>
                            <CardOhlc title="Last" value="1000" icon="iconly-boldClose-Square" bgcolor="blue"/>
                            <CardOhlc title="High" value="1000" icon="iconly-boldArrow---Up-Square" bgcolor="green"/>
                            <CardOhlc title="Low" value="1000" icon="iconly-boldArrow---Down-Square" bgcolor="red"/>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="card">
                                        <div class="card-header">
                                            <h4>Chart</h4>
                                        </div>
                                        <div class="card-body">
                                            <div id="chart-profile-visit"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-3">
                            <CardTopRight lastprice="1000" stockcode="IHSG"/>
                            <CardStockAnalyze saItems={StockAnalye} />
                            <div class="card">
                                <div class="card-header">
                                    <h4>Domestic/Foreign Value</h4>
                                </div>
                                <div class="card-body">
                                    <div id="chart-visitors-profile"></div>
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