import {useRef, useState} from 'react';


const Calculator=()=>{
    const inputref=useRef(null);
    const resultref=useRef(null);
    const[val,setVal]=useState(0);
    function add(){
        setVal((val)=>val+Number(inputref.current.value))
    }
    function sub(){
        setVal((val)=>val-Number(inputref.current.value))
    }
    function mul(){
        setVal((val)=>val*Number(inputref.current.value))
    }
    function div(){
        setVal((val)=>val/Number(inputref.current.value))
    }
    function resetIp(){
        inputref.current.value=0;
    }
    function resetAll(){
        setVal(0);
        inputref.current.value=0;
    }
    return(
        <>
        <p ref={resultref}>{val}</p>
        <input ref={inputref} placeholder='type from 0-9' type='number'/>
        <button onClick={add}>add</button>
        <button onClick={sub}>sub</button>
        <button onClick={mul}>mul</button>
        <button onClick={div}>div</button>
        <button onClick={resetIp}>reset IP</button>
        <button onClick={resetAll}>reset All</button>
        </>
        
    );
}
export default Calculator;