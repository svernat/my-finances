import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.tsx';
import './App.css';

function App(): React.ReactElement {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;