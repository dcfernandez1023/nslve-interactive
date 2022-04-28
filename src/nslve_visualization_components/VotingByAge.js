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

const VotingByAge = () => {
    const YEARS = [
        2016,
        2018,
        2020
    ];

    const DATA = [
        {year: 2016, ageGroup: "18-21", enrolled: 4902, voted: 1978, rate: 40},
        {year: 2016, ageGroup: "22-24", enrolled: 1897, voted: 714, rate: 38},
        {year: 2016, ageGroup: "25-29", enrolled: 1860, voted: 999, rate: 54},
        {year: 2016, ageGroup: "30-39", enrolled: 1199, voted: 711, rate: 59},
        {year: 2016, ageGroup: "40-49", enrolled: 446, voted: 309, rate: 69},
        {year: 2016, ageGroup: "50+", enrolled: 238, voted: 178, rate: 75},

        {year: 2018, ageGroup: "18-21", enrolled: 5194, voted: 1856, rate: 36}, 
        {year: 2018, ageGroup: "22-24", enrolled: 1699, voted: 620, rate: 36},
        {year: 2018, ageGroup: "25-29", enrolled: 1782, voted: 856, rate: 48},
        {year: 2018, ageGroup: "30-39", enrolled: 1069, voted: 574, rate: 54},
        {year: 2018, ageGroup: "40-49", enrolled: 405, voted: 227, rate: 56},
        {year: 2018, ageGroup: "50+", enrolled: 189, voted: 143, rate: 76},

        {year: 2020, ageGroup: "18-21", enrolled: 4503, voted: 3066, rate: 68},
        {year: 2020, ageGroup: "22-24", enrolled: 1821, voted: 1107, rate: 61},
        {year: 2020, ageGroup: "25-29", enrolled: 1714, voted: 1075, rate: 63},
        {year: 2020, ageGroup: "30-39", enrolled: 1126, voted: 722, rate: 64},
        {year: 2020, ageGroup: "40-49", enrolled: 452, voted: 311, rate: 69},
        {year: 2020, ageGroup: "50+", enrolled: 224, voted: 169, rate: 75}
    ];

    const renderAgeViz = () => {
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
                        <ResponsiveContainer width="100%" height={225}>
                            <ComposedChart
                                data={data}
                                margin={{
                                    top: 20,
                                    right: 20,
                                    bottom: 50,
                                    left: 20,
                                }}                        
                            >
                                <CartesianGrid stroke="#f5f5f5" />
                                <XAxis dataKey="ageGroup" scale="band" label={index === (YEARS.length)-1 ? { value: 'Age Group', position: 'insideBottomRight', offset: -12 } : {}}/>
                                <YAxis 
                                    label={{ value: "# of People", angle: -90, position: "insideBottomLeft" }}
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

            {renderAgeViz()}
            <br/>
            <Row>
                <Col>
                    <p>
                        This visualization contains <strong>small multiples</strong> of <strong> grouped bar charts</strong> that show the number of enrolled students in each age group vs. the number of 
                        students that voted in each age group in the University of San Francisco in 2016, 2018, and 2020. 
                    </p>
                    <p>
                        How to read this chart:
                        <ul>
                            <li><strong>Small Multiple Grouped Bar Charts</strong>: Each of the 3 bar charts represents a year (2016, 2018, and 2020)</li>
                            <li><strong>X-axis</strong>: Each age group of students</li>
                            <li><strong>Y-axis</strong>: The number of students in each age group</li>
                            <li><strong>Color</strong>: <strong style={{color: "#F4D03F"}}>Yellow</strong> maps to number of students <strong style={{color: "#F4D03F"}}>enrolled</strong> and <strong style={{color: "#52BE80"}}>Green</strong> maps to number of students that <strong style={{color: "#52BE80"}}>voted</strong></li>
                        </ul>
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default VotingByAge;