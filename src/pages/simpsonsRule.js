import React, { useState, useEffect } from 'react'
import LayoutComponent from '../components/Layout'

import { Typography, Layout, Input, Row, Col, Button, Select, Space, Table } from 'antd';

import { computeSimpson13 } from '../computation/compSimpson13';
import { computeSimpson38 } from '../computation/compSimpson38'


const { Text, Title } = Typography;
const { Option } = Select;

export default function SimpsonsRule() {

    const [equation, setEquation] = useState('0.2+25x-200x^2+675x^3-900x^4+400x^5')
    const [upperLimit, setUpperLimit] = useState('0.8')
    const [lowerLimit, setLowerLimit] = useState('0')
    const [segment, setSegment] = useState(2)
    const [solved, setSolved] = useState(false)
    const [roundOff, setRoundOff] = useState(5)
    const [rowData, setRowData] = useState([])
    const [error, setError] = useState('')
    const [topic, setTopic] = useState('1/3')

    const [columnData, setColumnData] = useState([
        {
            title: 'k',
            dataIndex: 'k',
            key: 'k',
            width: "20%"
        },
        {
            title: 'X',
            dataIndex: 'x',
            key: 'x',
            width: "20%"
        },
        {
            title: 'f(x)',
            dataIndex: 'fx',
            key: 'fx',
            width: "20%"
        },
        {
            title: "Simpson's Pattern",
            dataIndex: 'pattern',
            key: 'pattern',
            width: "20%"
        },
        {
            title: 'Result',
            dataIndex: 'computed',
            key: 'computed',
            width: "20%"
        },


    ])

    //RESULT
    const [stepper, setStepper] = useState('')
    const [summation, setSummation] = useState('')
    const [answer, setAnswer] = useState('')

    const changeEquation = (e) => {
        let equation = e.target.value
        setEquation(equation)
        setError('')
    }

    const handleChange = (value) => {
        setTopic(value)
    }

    const validate = () => {
        if (!equation || lowerLimit || upperLimit || segment || roundOff) {
            setError("Make sure to fill up all the fields to proceed.")
            return false
        }
        return true
    }

    const handleSolve = () => {

        let validation = validate()
        if (validation === false) {
            return
        }

        let result
        if (topic === '1/3') {
            result = computeSimpson13(equation, lowerLimit, upperLimit, segment, roundOff)
        } else {
            result = computeSimpson38(equation, lowerLimit, upperLimit, segment, roundOff)
        }
        console.log(result)

        let tableData = result.result
        tableData.push({
            pattern: "∑f(x)",
            computed: result.summation
        })
        setStepper(result.stepper)
        setRowData(result.result)
        setSummation(result.summation)
        setAnswer(result.answer)
    }


    return (
        <LayoutComponent>
            <Layout
                style={{
                    margin: 15
                }}
            >
                <div>
                    <Title
                        style={{
                            marginBottom: 1
                        }}
                    >
                        Simpson's Rule
                    </Title>
                    <Space
                        size={0.5}
                        direction="vertical">
                        <Text
                            style={{
                                marginTop: 1,
                                marginBottom: 0
                            }}
                        >
                            Numerical method for approximating the integral of a function between two limits, a and b
                        </Text>
                        <Text
                            strong
                            type="success"
                            italic
                            style={{
                                marginTop: 0,
                                fontSize: "12px"
                            }}
                        >
                            Note: Solve polynomial equations only
                        </Text>
                    </Space>
                </div>

                <div>
                    <Row
                        style={{
                            marginTop: 15
                        }}
                        gutter={12}>
                        <Col className="gutter-row" xs={24} sm={24} md={18} lg={12} xl={12}>
                            <div style={{ display: 'grid', marginBottom: '10px' }}>
                                <Text
                                    strong
                                >
                                    Input the f(x) equation below. You can use ^ to indicate the exponent of x.
                                </Text>
                                <Text
                                    italic
                                >
                                    *Note: Fractions and square roots needs to be simplified.
                                    <br />
                                    Example: <br />
                                    √4 should be entered as 2,
                                    <br />
                                    4/2 should be entered as 2,
                                    <br />
                                    2/4 should be entered as 0.5
                                </Text>
                            </div>
                            <Row
                                gutter={12}
                            >
                                <Col className="gutter-row" xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <Text
                                        type="danger"
                                        style={{
                                            display: error === '' ? "none" : "block"
                                        }}
                                    >
                                        {error}
                                    </Text>
                                    <Text>
                                        Equation f(x)
                                    </Text>
                                    <Input onChange={changeEquation} type="text" placeholder="0.2+25x-200x^2+675x^3-900x^4+400x^5" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row
                        style={{
                            marginTop: 15
                        }}
                        gutter={12}>
                        <Col className="gutter-row" xs={8} sm={8} md={6} lg={6} xl={6}>
                            <Text>
                                Lower Limit
                            </Text>
                            <Input onChange={(e) => {
                                setLowerLimit(e.target.value)
                                setError('')

                            }} type="number" placeholder="0" />
                        </Col>
                        <Col className="gutter-row" xs={8} sm={8} md={6} lg={6} xl={6}>
                            <Text>
                                Upper Limit
                            </Text>
                            <Input onChange={(e) => {
                                setUpperLimit(e.target.value)
                                setError('')

                            }} type="number" placeholder="0.8" />
                        </Col>
                    </Row>
                    <Row
                        style={{
                            marginTop: 15
                        }}
                        gutter={12}>
                        <Col className="gutter-row" xs={8} sm={8} md={6} lg={6} xl={6}>
                            <Text>
                                Number of Segmet (n)
                            </Text>
                            <Input onChange={(e) => {
                                setSegment(e.target.value)
                                setError('')

                            }} type="number" placeholder="2" />
                        </Col>
                        <Col className="gutter-row" xs={8} sm={8} md={6} lg={6} xl={6}>
                            <Text>
                                Decimal Places
                            </Text>
                            <Input onChange={(e) => {
                                setRoundOff(e.target.value)
                                setError('')
                            }} type="number" placeholder="5" />
                        </Col>
                    </Row>
                </div>
                <div
                    style={{
                        marginTop: 15
                    }}
                >
                    <Space direction="vertical">
                        <Select defaultValue="1/3" onChange={handleChange}>
                            <Option value="1/3">Simpsons' Rule 1/3</Option>
                            <Option value="3/8">Simpsons' Rule 3/8</Option>
                        </Select>
                        <Button
                            onClick={handleSolve}
                        >
                            Solve
                        </Button>
                    </Space>
                </div>
                <div
                    style={{
                        marginTop: "16px"
                    }}
                >
                    <Title
                        style={{
                            marginBottom: 1
                        }}
                    >
                        Result
                    </Title>
                    <div>
                        <Space direction="vertical">
                            <Text
                            >
                                @n = {segment}
                            </Text>
                            <Text style={{
                                margin: "16px 0px",
                                fontSize: "24px"
                            }}>
                                <strong>Computation of the Step</strong>
                            </Text>
                            <Text
                            >
                                h = ({upperLimit} - {lowerLimit})/ {segment}
                            </Text>
                            <Text
                            >
                                h = <strong>{stepper}</strong>
                            </Text>
                        </Space>
                    </div>
                    <div
                        style={{
                            marginTop: "16px"
                        }}
                    >
                        <Text style={{
                            margin: "16px 0px",
                            fontSize: "24px"
                        }}>
                            <strong>Tabulated Result</strong>
                        </Text>
                        <Table key="k" pagination={false} columns={columnData} dataSource={rowData} />
                    </div>
                    <div
                        style={{
                            marginTop: "16px"
                        }}
                    >
                        <Space direction="vertical">
                            <Text style={{
                                margin: "16px 0px",
                                fontSize: "24px"
                            }}>
                                <strong>Computation of the integral</strong>
                            </Text>
                            <Text>
                                I = ({stepper}/3)*{summation}
                            </Text>
                            <Text>
                                I = {answer} square units
                            </Text>
                        </Space>
                    </div>
                    <div
                        style={{
                            marginTop: "16px"
                        }}
                    >
                        <Text
                            style={{
                                fontSize: "24px"
                            }}
                        >
                            The answer is {answer} square units
                        </Text>
                    </div>
                </div>
            </Layout>
        </LayoutComponent>

    )
}
