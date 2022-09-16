import React, { useState } from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from "recharts";

const Graph = () => {
    const pdata = [
        {
            productKey: 1,
            accuracy: 40
        },
        {
            productKey: 2,
            accuracy: 30
        },
        {
            productKey: 3,
            accuracy: 40
        },
        {
            productKey: 4,
            accuracy: 36
        },
        {
            productKey: 5,
            accuracy: 55
        },
        {
            productKey: 6,
            accuracy: 65
        },
        {
            productKey: 7,
            accuracy: 32
        },
        {
            productKey: 8,
            accuracy: 73
        },
        {
            productKey: 9,
            accuracy: 92
        },
        {
            productKey: 10,
            accuracy: 33
        },
        {
            productKey: 11,
            accuracy: 54
        },
        {
            productKey: 12,
            accuracy: 95
        },
        {
            productKey: 13,
            accuracy: 43
        },
        {
            productKey: 14,
            accuracy: 63
        },
        {
            productKey: 15,
            accuracy: 77
        },
        {
            productKey: 16,
            accuracy: 40
        },
        {
            productKey: 17,
            accuracy: 64
        },
        {
            productKey: 18,
            accuracy: 23
        },
    ];
    return (
        <ResponsiveContainer className="graph-container" width="100%" aspect={2}>
            <LineChart data={pdata}>
                <XAxis tick={false}  dataKey="productKey"  visibility="hidden" interval={'preserveStartEnd'} />
                <YAxis tick={false} dataKey="accuracy" visibility="hidden" interval={'preserveStartEnd'} />
                <Line fill="red" dot={false}  dataKey="accuracy" />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default Graph;