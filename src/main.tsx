import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CalculatorProviderWrapper } from './contexts/calculator.context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CalculatorProviderWrapper>
      <App />
    </CalculatorProviderWrapper>
  </StrictMode>,
)
