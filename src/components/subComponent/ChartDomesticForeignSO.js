import React from "react"
import Chart from "react-apexcharts"

class ChartDomesticForeignSO extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            
            }
    }

    render(){
        const PieData = this.props.ChartData.pie
        const series= [PieData.dVal, PieData.fVal]
        const option_data = {
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
        return (
            <Chart options={option_data} series={series} type='donut'
            width='100%'
            height='350px'/>
        )
    }

}

export default ChartDomesticForeignSO