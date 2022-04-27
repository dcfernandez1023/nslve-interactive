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
        
        2018,
        2020
    ];

    const DATA = [
        {year: 2016, ethnicity: "Asian", enrolled: 0, voted: 0, rate: 0},
        {year: 2016, ethnicity: "American Indian/Alaska Native", enrolled: 0, voted: 0, rate: 0},
        {year: 2016, ethnicity: "Black", enrolled: 0, voted: 0, rate: 0},
        {year: 2016, ethnicity: "Hispanic", enrolled: 0, voted: 0, rate: 0},
        {year: 2016, ethnicity: "Native Hawaiian/Pacific Islander", enrolled: 0, voted: 0, rate: 0},
        {year: 2016, ethnicity: "2 or More Races", enrolled: 0, voted: 0, rate: 0},
        {year: 2016, ethnicity: "White", enrolled: 0, voted: 0, rate: 0},
        {year: 2016, ethnicity: "Race Unknown", enrolled: 10542, voted: 4889, rate: 46},

        {year: 2018, ethnicity: "Asian", enrolled: 3009, voted: 784, rate: 26}, 
        {year: 2018, ethnicity: "American Indian/Alaska Native", enrolled: 19, voted: 0, rate: 0},
        {year: 2018, ethnicity: "Black", enrolled: 574, voted: 258, rate: 45},
        {year: 2018, ethnicity: "Hispanic", enrolled: 2297, voted: 1128, rate: 49},
        {year: 2018, ethnicity: "Native Hawaiian/Pacific Islander", enrolled: 75, voted: 23, rate: 31},
        {year: 2018, ethnicity: "2 or More Races", enrolled: 761, voted: 335, rate: 44},
        {year: 2018, ethnicity: "White", enrolled: 3012, voted: 1613, rate: 54},
        {year: 2018, ethnicity: "Race Unknown", enrolled: 591, voted: 130, rate: 22},

        {year: 2020, ethnicity: "Asian", enrolled: 3059, voted: 1486, rate: 49},
        {year: 2020, ethnicity: "American Indian/Alaska Native", enrolled: 14, voted: 0, rate: 0},
        {year: 2020, ethnicity: "Black", enrolled: 678, voted: 428, rate: 63},
        {year: 2020, ethnicity: "Hispanic", enrolled: 2178, voted: 1662, rate: 76},
        {year: 2020, ethnicity: "Native Hawaiian/Pacific Islander", enrolled: 46, voted: 32, rate: 70},
        {year: 2020, ethnicity: "2 or More Races", enrolled: 832, voted: 637, rate: 77},
        {year: 2020, ethnicity: "White", enrolled: 2824, voted: 2124, rate: 75},
        {year: 2020, ethnicity: "Race Unknown", enrolled: 209, voted: 72, rate: 34},
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
                <Col sm={6}>
                    <div style={{textAlign: "center", fontSize: "20px"}}>Year: {year}</div>
                    <ResponsiveContainer width="100%" height={500}>
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
            );
        });
    }

    return (
        <Container fluid>
            {/* Title */}
            <Row>
                <Col>
                    <h3>Voting by Ethnicity</h3> 
                </Col>
            </Row>

            <br/>
            <Row>
                {renderViz()}
            </Row>
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