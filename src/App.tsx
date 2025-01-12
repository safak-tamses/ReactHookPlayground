import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Usage1 from './hooks/state-hooks/useState/usage1';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<>{"BasePage"}</>} />
                <Route path="/useState-usage1" element={<Usage1 />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
