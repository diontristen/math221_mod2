import React from 'react'
import { Typography, Row, Col, Card } from 'antd';
import { useHistory } from "react-router-dom";



export default function Index() {
    let history = useHistory()


    const changePage = (key) => {
        history.push(`/${key}`)
    }
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                maxWidth: "1600px",
                margin: "auto auto"

            }}
        >
            <Row
            style={{
                width: "80%",
                margin: "auto auto"
            }}
                justify="center"
                gutter={12}
                
            >
                <Col 
                  
                className="gutter-row" xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <img
                                style={{
                                    width: "100%", maxWidth: "750px", height: "100%"
                                }}
                                alt="example" 
                                src="assets/mp_icon.png" />
                    </div>
                </Col>
                <Col 
                  style={{
                    marginTop: 15
                }}
                className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={24}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Card
                            onClick={() => {changePage('simpsons_rule')}}
                            hoverable
                            className="img-hover-zoom"
                            style={{ width: "100%", maxWidth: "750px", height: "100%", overflow: "none" }}
                        >
                            <img
                                style={{
                                    width: "100%", maxWidth: "750px", height: "100%"
                                }}
                                alt="Simpson's Rule" 
                                src="assets/simpsons.png" />
                        </Card>
                    </div>
                </Col>
                <Col 
                  style={{
                    marginTop: 15
                }}
                className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={24}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Card
                            onClick={() => {changePage('numerical_differentiation')}}
                            hoverable
                            className="img-hover-zoom"
                            style={{ width: "100%", maxWidth: "750px", height: "100%" }}
                        >
                            <img
                                style={{
                                    width: "100%", maxWidth: "750px", height: "100%"
                                }}
                                alt="Numerical Differentiation" src="assets/numdiff.png" />
                        </Card>

                    </div>
                </Col>
            </Row>
        </div>
    )
}