import * as React from 'react';
import { useState } from 'react';
import myFinancesLogo from '../../assets/images/MyFinances.svg';
import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
import {useAuth} from "../../hooks/useAuth.ts";

// Define types for inline styles
type HeaderStyleProps = {
  position: 'fixed';
  top: number;
  left: number;
  right: number;
  backgroundColor: string;
  padding: string;
  display: 'flex';
  justifyContent: 'space-between';
  alignItems: 'center';
  borderBottom: string;
  zIndex: number;
};

type HeaderTitleStyleProps = {
  margin: number;
  color: string;
};

type NavItemsStyleProps = {
  display: 'flex';
  alignItems: 'center';
  gap: string;
};

type MainContentStyleProps = {
  marginTop: string;
  padding: string;
};

const HomePage = (): React.ReactElement => {
  const [count, setCount] = useState<number>(0);
  const {user, logout} = useAuth();
// Extract user information
  const userName = user?.profile?.name || user?.profile?.preferred_username || 'User';

  const headerStyle: HeaderStyleProps = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#1a1a1a',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #333',
    zIndex: 1000
  };

  const headerTitleStyle: HeaderTitleStyleProps = { 
    margin: 0, 
    color: '#fff' 
  };

  const navItemsStyle: NavItemsStyleProps = { 
    display: 'flex', 
    alignItems: 'center', 
    gap: '15px' 
  };

  const mainContentStyle: MainContentStyleProps = { 
    marginTop: '80px', 
    padding: '20px' 
  };

  return (
    <>
      {/* Header */}
      <div style={headerStyle}>
        <div style={navItemsStyle}>
          <img src={myFinancesLogo} alt="MyFinances"/>
          <h3 style={headerTitleStyle}>MyFinances</h3>
        </div>
        <div style={navItemsStyle}>
          <span style={{ color: '#fff' }}>
            Bonjour {userName}
          </span>
          <button
              onClick={logout}
              style={{
                backgroundColor: '#646cff',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
          >
            Déconnexion
          </button>
        </div>
      </div>

      {/* Contenu principal */}
      <div style={mainContentStyle}>
        {/* Contenu original de l'application */}
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        
        <h1>MyFinances</h1>
        
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/components/HomePage.tsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;