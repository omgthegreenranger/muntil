import React from 'react';
import dayjs from 'dayjs';

export default function Markers(props) {
    const {til} = props;
        let t3 = dayjs(1318781876).format("DD/MM")
        // let t3 = dayjs().unix(til.t3date).format('DD/MM/YY')
        let t2 = dayjs(til.t2Date).format('DD/MM/YY')
        let t1 = dayjs(til.t1Date).format('DD/MM/YY')
    return(
        <>
        <div>{t3}</div>
        <div>{t2}</div>
        <div>{t1}</div>
        
        </>
    )

}