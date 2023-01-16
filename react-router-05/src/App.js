import React from "react";
import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";

export function App() {
        return (
                <Routes>                    
                    <Route path="*" element={<h1>Not Found</h1>}/>
                    <Route path="/" element={<Welcome/>} />
                </Routes>
        )
    }


