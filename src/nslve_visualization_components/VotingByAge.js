import { Container, Row, Col } from "react-bootstrap";
import {
    Line,
    LineChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';

const VotingByAge = () => {
    const FULL_DATA = [
        {
            year: 2016,
            data: [
                {"18-21 enrolled": 4902},
                {"22-24 enrolled": 1897},
                {"25-29 enrolled": 1860},
                {"30-39 enrolled": 1199},
                {"40-49 enrolled": 446},
                {"50+ enrolled": 238},
                {"18-21 voted": 1978},
                {"22-24 voted": 714},
                {"25-29 voted": 999},
                {"30-39 voted": 711},
                {"40-49 voted": 309},
                {"50+ voted": 178}
            ]
        }
    ];
    const DATA = [
        {
            year: 2016,
            "18-21 enrolled": 4902,
            "22-24 enrolled": 1897,
            "25-29 enrolled": 1860,
            "30-39 enrolled": 1199,
            "40-49 enrolled": 446,
            "50+ enrolled": 238,
            "18-21 voted": 1978,
            "22-24 voted": 714,
            "25-29 voted": 999,
            "30-39 voted": 711,
            "40-49 voted": 309,
            "50+ voted": 178,
        },
        {
            year: 2018,
            "18-21 enrolled": 5194,
            "22-24 enrolled": 1699,
            "25-29 enrolled": 1782,
            "30-39 enrolled": 1069,
            "40-49 enrolled": 405,
            "50+ enrolled": 189,
            "18-21 voted": 1856,
            "22-24 voted": 620,
            "25-29 voted": 856,
            "30-39 voted": 574,
            "40-49 voted": 227,
            "50+ voted": 143
        },
        {
            year: 2020,
            "18-21 enrolled": 4503,
            "22-24 enrolled": 1821,
            "25-29 enrolled": 1714,
            "30-39 enrolled": 1126,
            "40-49 enrolled": 452,
            "50+ enrolled": 224,
            "18-21 voted": 3066,
            "22-24 voted": 1107,
            "25-29 voted": 1075,
            "30-39 voted": 722,
            "40-49 voted": 311,
            "50+ voted": 169
        }
    ];

    return (
        <Container fluid>
            {/* Title */}
            <Row>
                <Col>
                    <h3>Voting by Age</h3> 
                </Col>
            </Row>

            {/* Visualization */}
            <Row style={{height: "500px", width: "100%"}}>
                <Col>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                        data={DATA}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Legend align="right" layout="vertical" verticalAlign="top" wrapperStyle={{paddingLeft: "20px"}} />
                        <Line type="monotone" dataKey="18-21 voted" stroke="red" />
                        <Line type="monotone" dataKey="22-24 voted" stroke="blue" />
                        <Line type="monotone" dataKey="25-29 voted" stroke="orange" />
                        <Line type="monotone" dataKey="30-39 voted" stroke="purple" />
                        <Line type="monotone" dataKey="40-49 voted" stroke="pink" />
                        <Line type="monotone" dataKey="50+ voted" stroke="brown" />
                        </LineChart>
                    </ResponsiveContainer>
                </Col>
            </Row>
        </Container>
    );
}

export default VotingByAge;