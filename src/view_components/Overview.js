import { Container, Row, Col } from "react-bootstrap";

const Overview = () => {
    return (
        <Container>
            <Row>
                <Col sm={2}></Col>
                <Col sm={8}>
                    <h3>Overview</h3>
                    <br/>
                    <p>
                        The purpose of this webpage is to re-create many of the visualizations from the <a className="custom-link" href="https://drive.google.com/file/d/1yLMTuYYEwG68x4w-9KOlbcB-KUbc4vl3/view" rel="noreferrer" target="_blank">2020 NSLVE Campus Report</a> into 
                        dynamic visualizations that viewers can interact with. In other words, instead of having to scroll through a long report filled with static visualizations and long text descriptions, 
                        viewers will be able to explore the NSLVE report data by selecting and interacting with the different visualizations from the dropdown button below.
                    </p>

                    <p>
                        Each visualization has a short description beneath it indicating what data it is visualizing and also has a brief set of instructions on how 
                        to read/interpret the visualization.
                    </p>

                    <p>
                        We hope you find this webpage informative, fun, and helpful. All data was taken from the <a className="custom-link" href="https://drive.google.com/file/d/1yLMTuYYEwG68x4w-9KOlbcB-KUbc4vl3/view" rel="noreferrer" target="_blank">2020 NSLVE Campus Report</a>.
                    </p>

                    <p><strong>Made By</strong>: <a className="custom-link" href="mailto:dcfernandez@dons.usfca.edu">Dominic Fernandez</a> and <a className="custom-link" href="mailto:cmkramer@dons.usfca.edu">Cameron Kramer</a></p>
                    <hr/>
                    <br/>
                </Col>
                <Col sm={2}></Col>
            </Row>
            
        </Container>
    );
}

export default Overview;