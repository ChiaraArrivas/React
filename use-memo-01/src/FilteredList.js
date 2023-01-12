import React, {useMemo } from "react"

export default function FilteredList({list}) {

    const usersFiltered = useMemo(() => {
        return list.filter((item) => item.age >= 18)
    }, [list])
    
    return (<div>
        {usersFiltered.map((person, index) =>  <h1 key={person+index}>Name: {person.name} <br></br> Age: {person.age} <br></br> Id: {person.id}</h1>)}
    </div>)
}