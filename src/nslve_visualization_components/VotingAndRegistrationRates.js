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
                <Col style={{textAlign: "center"}}>
                    <h3>Voting and Registration Rates</h3> 
                </Col>
            </Row>

            {/* Visualization */}
            <Row style={{height: "450px", width: "100%"}}>
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

                            <Bar yAxisId="left" dataKey={ENROLLMENT} stackId="a" barSize={20} fill="#EC7063" />
                            <Bar yAxisId="left" dataKey={ELIGIBLE} stackId="b" barSize={20} fill="#AF7AC5" />
                            <Bar yAxisId="left" dataKey={REGISTERED} stackId="c" barSize={20} fill="#5499C7" />
                            <Bar yAxisId="left" dataKey={VOTED} stackId="d" barSize={20} fill="#48C9B0" />

                            <Line yAxisId="right" type="monotone" dataKey={REGISTRATION_RATE} stroke="#F4D03F" />
                            <Line yAxisId="right" type="monotone" dataKey={REGISTRATION_VOTING_RATE} stroke="#DC7633" />
                            <Line yAxisId="right" type="monotone" dataKey={VOTING_RATE} stroke="#5D6D7E" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col sm={2}></Col>
                <Col sm={8}>
                    <p>
                    ℹ️ This visualization is a <strong>Grouped Bar + Line Timeline</strong> chart showing the total student <strong style={{color: "#EC7063"}}>enrollment</strong>, the number of students <strong style={{color: "#AF7AC5"}}>eligible</strong> to vote, the number of students who <strong style={{color: "#5499C7"}}>registered</strong> to vote, the number of students who <strong style={{color: "#48C9B0"}}>voted</strong>, 
                        and the <strong style={{color: "#F4D03F"}}>registration rate</strong>, <strong style={{color: "#DC7633"}}>voting rate of registered students</strong>, and <strong style={{color: "#5D6D7E"}}>voting rate of all students</strong> in the University of San Francisco in 2016, 2018, and 2020.
                    </p>
                    <p>
                    🔎 How to read this chart:
                        <ul>
                            <li><strong>X-axis</strong>: Each year (2016, 2018, 2020)</li>
                            <li><strong>Left Y-axis</strong>: The number of students (values of the bars)</li>
                            <li><strong>Right Y-axis</strong>: The rates of voting/registration (values of the lines)</li>
                            <li><strong>Colors</strong>: The legend to the right of the chart maps color to the bars/lines in the chart</li>
                        </ul>
                    </p>
                </Col>
                <Col sm={2}></Col>
            </Row>
        </Container>
    );
}

export default VotingAndRegistrationRates;