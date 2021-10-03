import React, { useEffect } from 'react'
import { Typography } from 'antd'

import { computeSimpson13 } from '../computation/compSimpson13';
import { computeSimpson38 } from '../computation/compSimpson38'

const { Text } = Typography;


export default function SimpsonsRule() {
    useEffect(() => {
        console.log(computeSimpson13('0.2+25x-200x^2+675x^3-900x^4+400x^5', 0, 0.8, 2, 5))
        console.log(computeSimpson38('0.2+25x-200x^2+675x^3-900x^4+400x^5' ,0, 0.8, 3, 5))
    }, [])

    return (
        <div>
            <Text>
                Simpson's Rule
            </Text>
        </div>
    )
}
