import React from "react"
import Chart from "react-apexcharts"

class ChartStockOverview extends React.Component{
    constructor(props){
        super(props);
        this.state = {
		}
        
        }

    render(){
        var dataChart = this.props.ChartData;
        var rawCategories = dataChart.chart.T;
        var remakeCategories = rawCategories.map((value) => {
            return value.substr(0,2) + ':' + value.substr(2,2)
        })
        var remakeValue = dataChart.chart.C
        var Colour = [dataChart.data.LAST > dataChart.data.OPEN ? "#00BAEC" : "#ec3200"]
        var option_data = {
            chart: {
                id: "chart2",
                height: 300,
                foreColor: "#ccc",
                toolbar: {
                autoSelected: "pan",
                show: true
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2
            },
            grid: {
                borderColor: "#555",
                clipMarkers: true,
                yaxis: {
                lines: {
                    show: false
                }
                }
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                gradient: {
                enabled: true,
                opacityFrom: 0.55,
                opacityTo: 0
                }
            },
            markers: {
                colors: Colour,
                strokeColor: Colour[0],
            },
            zoom: {
                enabled: true
            },
            tooltip: {
                theme: "light"
            },
            xaxis: {
                categories: remakeCategories,
                tickPlacement: 'on'
            },
            yaxis: {
                tickAmount: 4
            }
        }
        var series= [
            {
                name: "Value",
                data: remakeValue
            }
        ]
        return (
            <Chart
                options={option_data}
                series={series}
                type="area"
            />
        )
    }
}

export default ChartStockOverview

