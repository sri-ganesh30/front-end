    import { useState } from "react";

    function DynamicList () {
        const [list,setList] = useState([])
        const [input,setInput] = useState()

        return(
            <div>
                <input type="text" onChange={(e)=>setInput(e.target.value)}/>
                {list.length >0 ? 
                <div>
                    {
                        list.map((item) =><h1> {item}</h1>)
                    }
                </div> : <h1>no data</h1>}
                <button onClick={() => setList((prev) => [...prev, input])}>
                Add data</button>
            </div>
        )
    }
    export default DynamicList