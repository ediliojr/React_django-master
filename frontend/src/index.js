import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <body>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  <footer className="container mx-auto p-6" >
				<div className="flex flex-col md:flex-row items-center d-flex justify-content-center ">
					<p className="mb-4 md:mb-0 md:text-xl"></p>

					<div className="flex -mx-8 ">
						<a href="https://www.ASm.br/sobre-nos" className="mx-3 hover:opacity-80 duration-150">Sobre Nós</a> | 
						<a href="https://www.eASsASm.br/politicas-de-privacidade" className="mx-3 hover:opacity-80 duration-150">Privacidade</a> | 
						<a href="https://www.eASAScom.br/contato" className="mx-3 hover:opacity-80 duration-150">Contato</a>
					</div>
				</div>
			</footer>
  </body>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
