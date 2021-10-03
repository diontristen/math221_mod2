import React, { useEffect } from 'react'
import { Typography } from 'antd'


import { computeAnswerForFdd } from '../computation/compFdd';

import { computeAnswerForBdd } from '../computation/compBdd';

const { Text } = Typography;
export default function NumericalDifferentiation() {

    useEffect(() => {
        console.log(computeAnswerForFdd('-0.1x^4-0.15x^3-0.5x^2-0.25x+1.2', 0.5, 0.5, 5))
        console.log(computeAnswerForBdd('-0.1x^4-0.15x^3-0.5x^2-0.25x+1.2', 0.5, 0.5, 5))
    }, [])

    return (
        <div>
            <Text>
                Numerical Differentitation
            </Text>
        </div>
    )
}
