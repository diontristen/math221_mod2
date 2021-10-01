import React, { useEffect }from 'react'
import { Typography } from 'antd'


import { computeBdd } from '../computation/compBdd';

const { Text } = Typography;

export default function Bdd() {

    useEffect(() => {
        computeBdd('-0.1x^4-0.15x^3-0.5x^2-0.25x+1.2' ,0.5, 0.25,5)
    }, [])

    return (
        <div>
            <Text>
                Backward Finite Divided Difference
            </Text>
        </div>
    )
}

