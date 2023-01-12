import React from "react";
import FilteredList from "./FilteredList";

    export function App() {
        
        return <div> 
                <FilteredList list={[
                        {name:"Andrea", age: 7, id:1},
                        {name:"Giulia", age: 33, id:2},
                        {name:"Giuseppe", age: 42, id:3},
                        {name:"Marina", age:25, id:4},
                        {name:"Matteo", age: 18, id:5},
        ]}/> 
                </div>
    }