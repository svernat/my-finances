import { useState } from 'react';
import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';

const HomePage = ({ user, onLogout }) => {
  const [count, setCount] = useState(0);
  
  // Extract user information
  const userName = user?.profile?.name || user?.profile?.preferred_username || 'User';

  return (
    <>
      {/* Header */}
      <div style={{
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
      }}>
        <div>
          <h3 style={{ margin: 0, color: '#fff' }}>MyFinances</h3>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <span style={{ color: '#fff' }}>
            Bonjour {userName}
          </span>
          <button
            onClick={onLogout}
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
      <div style={{ marginTop: '80px', padding: '20px' }}>
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
            Edit <code>src/components/HomePage.jsx</code> and save to test HMR
          </p>
        </div>
        
        <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #333', borderRadius: '8px' }}>
          <h2>User Information</h2>
          <pre style={{ textAlign: 'left', overflow: 'auto' }}>
            {JSON.stringify(user.profile, null, 2)}
          </pre>
        </div>
      </div>
    </>
  );
};

export default HomePage;
