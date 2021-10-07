
export const parseColumn = (topic) => {
    return [
        {
            title: 'k',
            dataIndex: 'k',
            key: 'k',
            width: "5%"
        },
        {
            title: 'step (h)',
            dataIndex: 'h',
            key: 'h',
            width: "5%"
        },
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
            width: "10%"
        },
    
        {
            title: "More Accurate",
            dataIndex: 'accurate',
            key: 'accurate',
            width: "10%"
        },
    ]
}
