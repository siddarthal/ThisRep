import { useState } from "react";
import Child from "./Child";
export default function Statesprops(){
    const [man,setMan]=useState("Siddartha");
    return(
        <>
            <Child mssg={man + "is phiamon"}/>
            <button onClick={()=> setMan("Siddartha Reddy")}>Click</button>
        </>
    );
}