import { Container, Row, Col } from "react-bootstrap";
import {
    ComposedChart,
    LineChart,
    Bar,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Brush,
    AreaChart,
    Area,
    ResponsiveContainer,
  } from 'recharts';

const VotingByMethod = () => {
    const YEARS = [
        2016,
        2018,
        2020
    ];

    // const DATA = [
    //     {year: 2016, method: "Early Vote", voted: 46, rate: 1},
    //     {year: 2016, method: "In-Person on Election Day", voted: 1583, rate: 32},

    //     {year: 2018, method: "Early Vote", voted: 17, rate: 0}, 
    //     {year: 2018, method: "In-Person on Election Day", voted: 966, rate: 23},

    //     {year: 2020, method: "Early Vote", voted: 798, rate: 12},
    //     {year: 2020, method: "In-Person on Election Day", voted: 237, rate: 4}
    // ];

    const DATA = [
        {year: 2016, "Early Vote": 46, "In-Person on Election Day": 1583},
        {year: 2018, "Early Vote": 17, "In-Person on Election Day": 966}, 
        {year: 2020, "Early Vote": 798, "In-Person on Election Day": 237},
    ];

    return (
        <Container fluid>
            {/* Title */}
            <Row>
                <Col>
                    <h3>Voting by Method</h3> 
                </Col>
            </Row>

            <br/>

            <ResponsiveContainer width="100%" height={400}>
                <LineChart 
                    data={DATA}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 50,
                        left: 20,
                    }}    
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend align="right" layout="vertical" verticalAlign="top" margin={{ top: 0, left: 100, right: 100, bottom: 0 }}/>
                    <Line type="monotone" dataKey="Early Vote" stroke="#EC7063" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="In-Person on Election Day" stroke="#AF7AC5" />                    
                </LineChart>
            </ResponsiveContainer>

            <br/>
            <Row>
                <Col>
                    <p>
                        This visualization is a <strong>line chart</strong> that shows the number of students from the University of San Francisco that used 
                        <strong> Early Voting</strong>, 
                        <strong> In-Person on Election Day</strong> voting, 
                        <strong> Not-In-Person</strong> voting, 
                        and <strong>Voting Method Unknown</strong> in 2016, 2018, and 2020. There are two other voting methods listed in the NSLVE Report, but 
                        they were not included in this visualization since there is no data recorded for either of the methods. These methods are <strong>Other</strong> and 
                        <strong> Provisional</strong>.
                    </p>
                    <p>
                        How to read this chart:
                        <ul>
                            <li><strong>X-axis</strong>: Each year (2016, 2018, and 2020)</li>
                            <li><strong>Y-axis</strong>: Number of students who used the method</li>
                            <li><strong>Color</strong>: The voting method being used. Each line represents a voting method that maps to a color on the color legend to the right.</li>
                        </ul>
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default VotingByMethod;