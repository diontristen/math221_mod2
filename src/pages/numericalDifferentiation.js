import React, { useEffect, useState } from 'react'
import { Typography, Layout, Input, Row, Col, Button, Select, Space, Table } from 'antd';
import LayoutComponent from '../components/Layout'

import { computeAnswerForFdd } from '../computation/compFdd';
import { computeAnswerForBdd } from '../computation/compBdd';


import { parseColumn } from '../util/columnData';

const { Text, Title } = Typography;
const { Option } = Select;

export default function NumericalDifferentiation() {

    const [equation, setEquation] = useState('-0.1x^4-0.15x^30-0.5x^2-0.25x+1.2')
    const [initial, setInitial] = useState('0.5')
    const [stepper, setStepper] = useState('0.25')
    const [solved, setSolved] = useState(false)
    const [roundOff, setRoundOff] = useState(5)
    const [rowData, setRowData] = useState([])
    const [error, setError] = useState('')
    const [topic, setTopic] = useState('fdd')

    const [columnData, setColumnData] = useState([
        {
            title: 'xi',
            dataIndex: 'xi',
            key: 'xi',
            width: "10%"
        },
        {
            title: `xi${topic === 'fdd' ? '+' : '-'}1`,
            dataIndex: 'x1',
            key: 'x1',
            width: "10%"
        },
        {
            title: `xi${topic === 'fdd' ? '+' : '-'}2`,
            dataIndex: 'x2',
            key: 'x2',
            width: "10%"
        },
        {
            title: 'f(xi)',
            dataIndex: 'fxi',
            key: 'fxi',
            width: "10%"
        },
        {
            title: `f(x${topic === 'fdd' ? '+' : '-'}1)`,
            dataIndex: 'fx1',
            key: 'fx1',
            width: "10%"
        },
        {
            title: `f(x${topic === 'fdd' ? '+' : '-'}2)`,
            dataIndex: 'fx2',
            key: 'fx2',
            width: "10%"
        },
        {
            title: 'Truncated',
            dataIndex: 'truncated',
            key: 'truncated',
            width: "20%"
        },

        {
            title: "More Accurate",
            dataIndex: 'accurate',
            key: 'accurate',
            width: "20%"
        },


    ])

    const [answer, setAnswer] = useState('')
    const [h1, setH1] = useState({})
    const [h2, setH2] = useState({})


    const changeEquation = (e) => {
        let equation = e.target.value
        setEquation(`${equation}`)
        setError('')
        setSolved(false)
    }

    const handleChange = (value) => {
        setTopic(value)
    }

    const resetField = () => {
        setEquation('')
        setInitial('')
        setStepper('')
        setRoundOff('')
        setSolved(false)
    }

    const validate = () => {
        if (!equation || !initial || !stepper || !roundOff) {
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
        setError('')

        let result

        if (topic === 'bdd') {
            result = computeAnswerForBdd(equation, initial, stepper, roundOff)
        } else {
            result = computeAnswerForFdd(equation, initial, stepper, roundOff)
        }
        setColumnData(parseColumn(topic))

        setRowData([result.h1, result.h2])
        setH1(result.h1)
        setH2(result.h2)
        setAnswer(result.richardson)
        setSolved(true)

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
                        Numerical Differentiation
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
                            Numerical Differentiation is the process of finding the numerical value of a derivative of a given function at a given point.
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
                                    <Input value={equation} onChange={changeEquation} type="text" placeholder="0.2+25x-200x^2+675x^3-900x^4+400x^5" />
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
                                Initial Value of x (Xi)
                            </Text>
                            <Input value={initial} onChange={(e) => {
                                setInitial(e.target.value)
                                setError('')
                                setSolved(false)

                            }} type="number" placeholder="0" />
                        </Col>
                    </Row>
                    <Row
                        style={{
                            marginTop: 15
                        }}
                        gutter={12}>
                        <Col className="gutter-row" xs={8} sm={8} md={6} lg={6} xl={6}>
                            <Text>
                                Step size (h)
                            </Text>
                            <Input value={stepper} onChange={(e) => {
                                setStepper(e.target.value)
                                setError('')
                                setSolved(false)

                            }} type="number" placeholder="2" />
                        </Col>
                        <Col className="gutter-row" xs={8} sm={8} md={6} lg={6} xl={6}>
                            <Text>
                                Decimal Places
                            </Text>
                            <Input value={roundOff} onChange={(e) => {
                                setRoundOff(e.target.value)
                                setError('')
                                setSolved(false)

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
                        <Select defaultValue="fdd" onChange={handleChange}>
                            <Option value="fdd">Forward Finite Divided Difference</Option>
                            <Option value="bdd">Backward Finite Divided Difference</Option>
                        </Select>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}
                        >
                            <Button
                                onClick={handleSolve}
                            >
                                Solve
                            </Button>
                            <Button
                                onClick={resetField}
                            >
                                Reset
                            </Button>
                        </div>
                    </Space>
                </div>
                <div
                    style={{
                        marginTop: "16px",
                        display: solved === true ? "block" : "none"
                    }}
                >
                    <Title
                        style={{
                            marginBottom: 1
                        }}
                    >
                        Result
                    </Title>
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
                                <strong>Richardson</strong>
                            </Text>
                            <Text>
                                D = (4/3 * (h2)) - (1/3 * (h1))
                            </Text>
                            <Text>
                                D = (4/3 * ({h2.truncated})) - (1/3 * ({h1.truncated}))
                            </Text>
                            <Text>
                                D = {answer} square units
                            </Text>
                        </Space>
                    </div>
                </div>
            </Layout>
        </LayoutComponent>

    )
}
