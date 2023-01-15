import React from "react";
import { Route, Routes } from "react-router-dom";
import { ClickCounter } from "./ClickCounter"
import { Welcome } from "./Welcome";

export function App() {
    return (
        <Routes>
            <Route path="/counter" element={<ClickCounter/>} />
            <Route path="/" element={<Welcome name="Chiara"/>}/>
        </Routes>
)
} 