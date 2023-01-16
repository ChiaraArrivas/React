import React from "react";
import { Route, Routes } from "react-router-dom";
import { ClickCounter } from "./ClickCounter";
import { SecondComponent } from "./secondComponent";

import { Welcome } from "./Welcome";

export function App() {
        return (
                <Routes>
                    <Route path="/" element={<Welcome name="Chiara"/>} />
                    <Route path="/counter" element={<ClickCounter/>} />
                    <Route path="/secondComponent" element={<SecondComponent/>} />
                    <Route path="/thirdComponent" element={<h1>Third Component</h1>} />
                </Routes>
        )
    }


