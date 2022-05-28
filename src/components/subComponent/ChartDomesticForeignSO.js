import React from "react"
import Chart from "react-apexcharts"

class ChartDomesticForeignSO extends React.Component{
    constructor(props) {
        super(props);
        console.log(props.ChartData.pie)
        const PieData = props.ChartData.pie
        this.state = {
            series: [PieData.dVal, PieData.fVal],
            option_data: {
                labels: ['Domestic', 'Foreign'],
                colors: ['#55c6e8','#435ebe'],
                legend: {
                    position: 'bottom'
                },
                plotOptions: {
                    pie: {
                        donut: {
                            size: '30%'
                        }
                    }
                }
            }
        }
    }

    render(){
        return (
            <Chart options={this.state.option_data} series={this.state.series} type='donut'
            width='100%'
            height='350px'/>
        )
    }

}

export default ChartDomesticForeignSO