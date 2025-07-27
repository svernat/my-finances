import * as React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './components/homepage/HomePage.tsx';
import './styles/App.css';
import {useTranslation} from "react-i18next";
import { useAuth } from "./hooks/useAuth";
import Loader from "./components/shared/Loader.tsx";

function App(): React.ReactElement {
  const { t } = useTranslation();
  const { isLoading } = useAuth();

  if (isLoading) {
    return (
      <Loader text={t("download")} height="64" size="xlarge" color="inherit"/>
    );
  }

  return (
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage/>
            }
          />
        </Routes>
      </div>
  );
}

export default App;