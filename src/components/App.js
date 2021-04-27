import React from "react";

import Navigation from './Navigation';
import Notes from './Notes';

import './../index.css';

const App = () => {
    return (
        <main>
            <Navigation />
            <Notes />
        </main>
    );
};

export default App;