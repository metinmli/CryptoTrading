import React from "react";
import {Line} from 'react-chartjs-2'
import {Col, Row, Typography} from "antd";
import moment from "moment/moment";
const { Title } = Typography;

function LineChart({coinHistory, currentPrice, coinName}){
const coinPrice = [];
const coinTimestamp = [];
console.log("AAAAAAAAAAAAAAAAAAAA")
console.log(coinHistory)
console.log(coinHistory?.data?.history?.length)
    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory?.data?.history[i].price);
    }

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        var fulldate = new Date((coinHistory?.data?.history[i].timestamp)*1000);
        var converted_date = moment(fulldate).format("llll");
        coinTimestamp.push(converted_date);
    }
    console.log(coinTimestamp)
    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price In USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd',
            },
        ],
    };
    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };
    return(
        <>
        <Row className="chart-header">
            <Title level={2} className="chart-title">{coinName} Price Chart</Title>
            <Col className="price-container">
                <Title level={5} className="price-change">Change: {coinHistory?.data?.coin?.change}%</Title>
                <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
            </Col>
        </Row>
            <Line data={data} options={options} />
        </>
    );
};
export default LineChart;