import React from "react";
import { Route, Routes } from "react-router-dom";
import { GithubUsers } from "./GitHubUsersSWG";

export function App() {
        return (
                <Routes>
                    <Route path="/" element={<GithubUsers user="ChiaraArrivas"/>} />
                </Routes>
        )
    }


