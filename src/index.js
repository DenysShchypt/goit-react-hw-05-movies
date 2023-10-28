import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyle';
import { ThemeProvider } from 'styled-components';


const theme = {
  colors: {
    grey: 'grey',
    blue: 'blue',
    white: 'white',
    black: 'black',
    yellow: 'yellow',
    error: 'red',
  },
  spacing: value => `${value * 2}px`,
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter 
    basename="/goit-react-hw-05-movies"
    >
       <ThemeProvider
        theme={theme}>
    <App />
    <GlobalStyle />
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
