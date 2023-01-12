import React from "react";

    export function App() {
        
        return <div> 
                <FilteredList list={[
                        {name:"Andrea", age: 7, id:1},
                        {name:"Giulia", age: 33, id:2},
                        {name:"Giuseppe", age: 42, id:3},
                        {name:"Marina", age:20, id:4},
                        {name:"Matteo", age: 12, id:5},
                        {name:"Sara", age: 22, id:6},
                        {name:"Fabrizio", age:17, id:7},
                        {name:"Chiara", age:29, id:8},
        ]}/> 
                </div>
    }
