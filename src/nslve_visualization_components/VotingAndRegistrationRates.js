import { Container, Row, Col } from "react-bootstrap";
import {
    ComposedChart,
    Line,
    Text,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
  } from 'recharts';

const VotingAndRegistrationRates = () => {

    const YEAR = "Year";
    const ENROLLMENT = "Enrollment";
    const ELIGIBLE = "Eligible";
    const REGISTERED = "Registered";
    const VOTED = "Voted";
    const REGISTRATION_RATE = "Registration Rate";
    const REGISTRATION_VOTING_RATE = "Registration Voting Rate";
    const VOTING_RATE = "Voting Rate";

    const DATA = [
        {
            [YEAR]: 2016,
            [ENROLLMENT]: 10860,
            [ELIGIBLE]: 8863,
            [REGISTERED]: 6863,
            [VOTED]: 4889,
            [REGISTRATION_RATE]: 77,
            [REGISTRATION_VOTING_RATE]: 71,
            [VOTING_RATE]: 55
        },
        {
            [YEAR]: 2018,
            [ENROLLMENT]: 10536,
            [ELIGIBLE]: 8897,
            [REGISTERED]: 6991,
            [VOTED]: 4276,
            [REGISTRATION_RATE]: 79,
            [REGISTRATION_VOTING_RATE]: 61,
            [VOTING_RATE]: 48
        },
        {
            [YEAR]: 2020,
            [ENROLLMENT]: 10036,
            [ELIGIBLE]: 8592,
            [REGISTERED]: 7323,
            [VOTED]: 6450,
            [REGISTRATION_RATE]: 85,
            [REGISTRATION_VOTING_RATE]: 88,
            [VOTING_RATE]: 75
        }
    ];

    console.log(DATA)

    return (
        <Container fluid>
            {/* Title */}
            <Row>
                <Col>
                    <h3>Voting and Registration Rates</h3> 
                </Col>
            </Row>

            {/* Visualization */}
            <Row style={{height: "500px", width: "100%"}}>
                <Col>
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart
                            data={DATA}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey={YEAR} scale="band" label={{ value: 'Year', position: 'insideBottom', offset: -12 }}/>
                            <YAxis 
                                yAxisId="left"
                                label={{ value: "# of People", angle: -90, position: "insideBottomLeft" }}
                            />
                            <YAxis 
                                yAxisId="right" 
                                orientation="right"
                                label={{ value: "% of People", angle: 90, position: "insideBottomRight" }}
                            />
                            <Tooltip />
                            <Legend align="right" layout="vertical" verticalAlign="top" margin={{ top: 0, left: 100, right: 100, bottom: 0 }}/>

                            <Bar yAxisId="left" dataKey={ENROLLMENT} stackId="a" barSize={20} fill="pink" />
                            <Bar yAxisId="left" dataKey={ELIGIBLE} stackId="b" barSize={20} fill="purple" />
                            <Bar yAxisId="left" dataKey={REGISTERED} stackId="c" barSize={20} fill="teal" />
                            <Bar yAxisId="left" dataKey={VOTED} stackId="d" barSize={20} fill="brown" />

                            <Line yAxisId="right" type="monotone" dataKey={REGISTRATION_RATE} stroke="blue" />
                            <Line yAxisId="right" type="monotone" dataKey={REGISTRATION_VOTING_RATE} stroke="orange" />
                            <Line yAxisId="right" type="monotone" dataKey={VOTING_RATE} stroke="red" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </Col>
            </Row>
        </Container>
    );
}

export default VotingAndRegistrationRates;