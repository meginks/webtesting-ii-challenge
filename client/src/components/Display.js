import React from 'react'; 

const Display = props => {
    console.log(props, "display props");
    return (
        <div>
        <h1>SCOREBOARD</h1>
        <p>Hit Count: {props.hitCount}</p>
        <p>Strike Count: {props.strikeCount}</p>
        <p>Ball Count: {props.ballCount}</p>
        </div>
    )
}

export default Display;