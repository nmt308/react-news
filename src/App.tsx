import React from 'react';
import './App2.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './route';
import DefaultLayout from './layout';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route, index) => {
                    const Page = route.component;
                    let Layout = DefaultLayout;
                    if (route.layout) {
                        Layout = route.layout;
                    }
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
