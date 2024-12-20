import { ThemeProvider } from './components/theme-provider'
import MainPage from './pages/MainPage'
import React from 'react'


interface AppProps {
  children: React.ReactNode 
}

function App({children}: AppProps) {
 

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {children}
      </ThemeProvider>
    </div>
  )
}


const AppWrapper = () => {
  return (
    <App >
   <MainPage /> 
    </App>
  )
}


export default AppWrapper
