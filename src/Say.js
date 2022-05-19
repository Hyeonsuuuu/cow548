import React, {useState} from "react";

const Say = () => {
    const [message, setMesaage] = useState('초기값');
    const onClickEnter = () => setMesaage('안녕!');
    const onClickLeave = () => setMesaage('잘가!');

    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color:color}}>{message}</h1>
            <button onClick={()=>setColor('red')}>RED</button>
            </div>
    );
}

export default Say;