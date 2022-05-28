import React from "react"
import Chart from "react-apexcharts"

class ChartStockOverview extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            option_data : {
                chart: {
                    id: "chart2",
                    type: "area",
                    height: 300,
                    foreColor: "#ccc",
                    toolbar: {
                    autoSelected: "pan",
                    show: true
                    },
                }
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
				colors: ["#00BAEC"],
				strokeColor: "#00BAEC",
			},
			series: [
				{
					name: "Value",
					data: props.ChartData.chart.C.toString().split(',')
				}
			],
			zoom: {
				enabled: true
			},
			tooltip: {
				theme: "light"
			},
			xaxis: {
				categories: props.ChartData.chart.T.toString().split(','),
				tickPlacement: 'on'
			},
			yaxis: {
				tickAmount: 4
			}
			}
        }

    render(){
        return (
            <Chart
                options={this.state.option_data}
                colors={this.state.colour_data}
                stroke={this.state.stroke}
                grid={this.state.grid}
                dataLabels={this.state.dataLabels}
                fill={this.state.fill}
                markers={this.state.markers}
                series={this.state.series}
                zoom={this.state.zoom}
                tooltip={this.state.tooltip}
                xaxis={this.state.xaxis}
                yaxis={this.state.yaxis}
            />
        )
    }
}

export default ChartStockOverview

