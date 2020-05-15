import React from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from 'react-redux';

export default function CompanyCandle() {
    const candle = useSelector(state => state.candle);
    const info = {
        series: [{
            data: candle
        }],
        options: {
            chart: {
                type: 'candlestick',
                height: 230
            },
            title: {
                text: 'CandleStick Chart',
                align: 'left'
            },
            xaxis: {
                type: 'datetime'
            },
            yaxis: {
                tooltip: {
                enabled: true,
                range: 1.085
                }
            }
        },
    };
        
      return (
        <div id="chart">
            <ReactApexChart options={info.options} series={info.series} type="candlestick" height={230} />
        </div>
      );
    
}