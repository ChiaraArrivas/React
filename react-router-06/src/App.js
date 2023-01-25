import React from "react";
import { Route, Routes } from "react-router-dom";
import { GithubUserList } from "./GithubUserList"
import ShowGithubUser from "./ShowGithubUser";
import { Welcome } from "./Welcome";

export function App() {
        return (
                <Routes>
                    <Route path="/" element={<Welcome/>} />
                    <Route path="users" element={<GithubUserList/>}>
                        <Route path=":username" element={<ShowGithubUser/>}></Route>
                    </Route>
                </Routes>
        )
    }

