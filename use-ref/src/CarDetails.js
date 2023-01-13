import React, {useEffect, useRef, useState } from "react"

export default function CarDetails(initialData) {
        let model = useRef();
        let year = useRef("2016");
        let color = useRef("Rosso");

        useEffect(() => {
            model.current.focus();
            model.current.value = initialData.modelCar;
            year.current.value = initialData.yearCar;
            color.current.value = initialData.colorCar
        }, [initialData])
    
    return (<div>
            <label htmlFor="model">Model</label>
            <input ref={model} type="text" id="model" name="model"></input>
            <br></br>
            <label htmlFor="Year">Year</label>
            <input ref={year} name="year" id="Year"></input>
            <br></br>
            <label htmlFor="color">Color</label>
            <input ref={color} type="text" id="color" name="color"></input>
    </div>)
}