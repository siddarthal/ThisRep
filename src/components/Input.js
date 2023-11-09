import { useState } from 'react';
export default function Input(){
    const [value, setValue] = useState("Hello");
    function handleChange(e) {
        setValue(e.target.value);
    }
    return (
        <>
            <input value={value} onChange={handleChange}/>
            <p>u typed; {value}</p>
            <button onClick={()=>setValue("Hello")}>Reset </button>
        </>
    );
}