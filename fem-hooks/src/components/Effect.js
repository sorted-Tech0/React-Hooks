import React,{ useEffect, useState } from "react";

const EffectState = () => {
    const [time, setTime] = useState(new Date());

    useEffect( () => {
        const timer = setTimeout(() => setTime(new Date()), 1000);

        return () => clearTimeout(timer)
    })


    return (
        <h1>useEffect Example {time.toLocaleTimeString()}</h1>
    )
}

export default EffectState;