import React from "react"
import Chart from "react-apexcharts"

class ChartStockOverview extends React.Component{
    constructor(props){
        super(props);
        var ChartDataMin = props.ChartData
        var rawCategories = ChartDataMin.chart.T;
        var remakeCategories = rawCategories.map((value) => {
            return value.substr(0,2) + ':' + value.substr(2,2)
        })
        var Colour = [ChartDataMin.data.LAST > ChartDataMin.data.OPEN ? "#00BAEC" : "#ec3200"]
        this.state = {
            option_data : {
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
            },
			series: [
				{
					name: "Value",
					data: ChartDataMin.chart.C
				}
			],
			}
        }

    render(){
        return (
            <Chart
                options={this.state.option_data}
                series={this.state.series}
                type="area"
            />
        )
    }
}

export default ChartStockOverview

