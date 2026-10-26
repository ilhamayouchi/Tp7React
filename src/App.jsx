import { useState } from 'react';
import JSXDemo from './JSXDemo';
import ButtonWithLogging from './ButtonWithLogging';
import DataLoader from './DataLoader';
import './App.css';

function App() {
  const [nom, setNom] = useState('');

  return (
    <div className="page">
      <h1><span>TP JSX et Composition</span></h1>

      <section className="carte">
        <h2>JSX et JavaScript pur</h2>
        <JSXDemo nom={nom} setNom={setNom} />
      </section>

      <section className="carte">
        <h2>Higher-Order Component</h2>
        <ButtonWithLogging label="Cliquer ici" />
      </section>

      <section className="carte">
        <h2>Render Props</h2>
        <DataLoader
          nomSupplementaire={nom}
          render={(data) => (
            <ul>
              {data.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          )}
        />
      </section>
    </div>
  );
}

export default App;