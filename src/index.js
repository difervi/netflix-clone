import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa desde 'react-dom/client' en React 18+
import App from './App';

// Obtén el contenedor raíz
const root = ReactDOM.createRoot(document.getElementById('root'));

// Monta la aplicación dentro del contenedor raíz
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
