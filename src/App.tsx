import React, {Component} from 'react';
import {Provider} from 'react-redux';
import './App.css';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "./theme/theme";
import {store} from "./store/store";
import RouterProvider from "./router/RouterProvider";

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <RouterProvider/>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
