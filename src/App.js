import React from "react";
import "./App.css";
import * as config from "./config";

const { tenantName, backgroundColor } = config;

function App() {
    return (
        <div className="App">
            <header className="App-header" style={{ backgroundColor }}>
                <p data-testid="companyName">{tenantName}</p>
            </header>
            <footer className="Footer" data-testid="companyFooter">
                2020. By Awesome Company
            </footer>
        </div>
    );
}

export default App;
