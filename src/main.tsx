import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './styles/globalStyle.ts'
import { AppThemeProvider } from './contexts/AppThemeContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <AppThemeProvider>
    <GlobalStyle />
    <App />
    </AppThemeProvider>
    
  </React.StrictMode>
)
