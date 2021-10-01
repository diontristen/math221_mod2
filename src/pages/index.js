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
                    href="/simpsons_1_3"
                >Simpson’s 1/3 Rule</a>
                <a>Simpson’s 3/8 Rule</a>
                <a>Forward Finite</a>
                <a>Backward Finite</a>
            </div>
        </div>
    )
}
