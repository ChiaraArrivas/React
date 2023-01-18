import React from "react";
import { Route, Routes } from "react-router-dom";
import { GithubUser } from "./GithubUser";
import { Welcome } from "./Welcome";

export function App() {
        return (
                <Routes>
                    <Route path="/" element={<Welcome/>} />
                    <Route path="/:username" element={<GithubUser/>} />
                </Routes>
        )
    }


