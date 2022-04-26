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

const VotingByEthnicity = () => {
    const YEARS = [
        2016,
        2018,
        2020
    ];

    const DATA = [
        {year: 2016, ethnicity: "Asian", enrolled: 0, voted: 0, rate: 0},
        {year: 2016, ethnicity: "American Indian/Alaska Native", enrolled: 0, voted: 0, rate: 0},
        {year: 2016, ethnicity: "Black", enrolled: 0, voted: 0, rate: 0},

        {year: 2018, ethnicity: "Asian", enrolled: 3009, voted: 784, rate: 26}, 
        {year: 2018, ethnicity: "American Indian/Alaska Native", enrolled: 19, voted: 0, rate: 0},
        {year: 2018, ethnicity: "Black", enrolled: 574, voted: 258, rate: 45},

        {year: 2020, ethnicity: "Asian", enrolled: 3059, voted: 1486, rate: 49},
        {year: 2020, ethnicity: "American Indian/Alaska Native", enrolled: 14, voted: 0, rate: 0},
        {year: 2020, ethnicity: "Black", enrolled: 678, voted: 428, rate: 63}
    ];

    const renderViz = () => {
        return YEARS.map((year, index) => {
            let data = [];
            DATA.forEach((d) => {
                if(d.year === year) {
                    data.push(d);
                }
            });
            return (
                <Row>
                    <Col sm={12}>
                        <div style={{textAlign: "center", fontSize: "20px"}}>Year: {year}</div>
                        <ResponsiveContainer width="100%" height={400}>
                            <ComposedChart
                                data={data}
                                layout="vertical"
                                margin={{
                                    top: 20,
                                    right: 20,
                                    bottom: 50,
                                    left: 20,
                                }}                        
                            >
                                <CartesianGrid stroke="#f5f5f5" />
                                <XAxis type="number" label={index === (YEARS.length)-1 ? { value: '# of People', position: 'insideBottomRight', offset: -15 } : {}}/>
                                <YAxis 
                                    dataKey="ethnicity" 
                                    type="category" 
                                    scale="band"
                                />                        
                                <Tooltip />
                                <Legend align="right" layout="vertical" verticalAlign="top" margin={{ top: 0, left: 50, right: 100, bottom: 0 }}/>

                                <Bar dataKey="enrolled" barSize={20} fill="#F4D03F" />
                                <Bar dataKey="voted" barSize={20} fill="#52BE80" />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </Col>
                </Row>
            );
        });
    }

    return (
        <Container fluid>
            {/* Title */}
            <Row>
                <Col>
                    <h3>Voting by Age</h3> 
                </Col>
            </Row>

            <br/>

            {renderViz()}
            <br/>
            <Row>
                <Col>
                    <p>
                        This visualization contains <strong>small multiples</strong> of <strong>grouped bar charts</strong> that show the number of enrolled students in from ethnicity vs. the number of 
                        students that voted from each ethnicty in the University of San Francisco in 2016, 2018, and 2020. 
                    </p>
                    <p>
                        How to read this chart:
                        <ul>
                            <li><strong>Small Multiple Grouped Bar Charts</strong>: Each of the 3 bar charts represents a year (2016, 2018, and 2020)</li>
                            <li><strong>X-axis</strong>: The number of enrolled/voted students</li>
                            <li><strong>Y-axis</strong>: Each ethnicity</li>
                            <li><strong>Color</strong>: <strong style={{color: "#F4D03F"}}>Yellow</strong> maps to number of students <strong style={{color: "#F4D03F"}}>enrolled</strong> and <strong style={{color: "#52BE80"}}>Green</strong> maps to number of students that <strong style={{color: "#52BE80"}}>voted</strong></li>
                        </ul>
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default VotingByEthnicity;