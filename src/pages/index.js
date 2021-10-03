import React from 'react'

import { Typography } from 'antd'

const { Text } = Typography;

export default function index() {
    return (
        <div>
            <Text>Index Page</Text>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column"
                }}
            >
                <a
                    href="/simpsons_rule"
                >Simpson’s Rule</a>
                <a href="/numerical_differentiation">Numerical Differentiation</a>
            </div>
        </div>
    )
}
