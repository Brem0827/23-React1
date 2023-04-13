import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_XAPACITY = 10;

function Accmmodate(props){
    cosnt [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect(() => {
        console.log("====================");
        console.log("useEffect() is called");
        console.log(`isFull : ${isFull}`);
    });

    useEffect(() => {
        setIsFull(count >= MAX_XAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return(
        <div style={{ padding : 16 }}>
          <p>{`총 ${count}명 수용했습니다.`}</p>

          <button onclick={increaseCount} disabled={isFull}> 입장 </button>
          <button onclick={decreaseCount}> 퇴장 </button>

          {isFull && <p style={{color: "red"}}>정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accmmodate;