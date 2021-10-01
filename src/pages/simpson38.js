import React, { useEffect }from 'react'
import { Typography } from 'antd'

import {computeSimpson38} from '../computation/compSimpson38'

const { Text } = Typography;

export default function Simpson38() {

    useEffect(() => {
        computeSimpson38('0.2+25x-200x^2+675x^3-900x^4+400x^5' ,0, 0.8, 3, 5)
    }, [])

    return (
        <div>
            <Text>
                Simpson's 3/8 Rule
            </Text>
        </div>
    )
}

