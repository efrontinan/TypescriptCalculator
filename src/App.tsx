import './App.css'
import Calculator from './components/Calculator/Calculator'
import { ThemeProvider, createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#f5f5f5",
      light: '#fafafa',
      dark: '#eeeeee',
      contrastText: '#424242',
    },
    secondary: {
      main: "#ffc107",
      light: '#ffd54f',
      dark: '#ff8f00',
      contrastText: '#424242',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '14px',
          boxShadow: '8px 8px 16px #d0d0d0, -8px -8px 16px #ffffff',
          border: '1px solid #eeeeee',
          '&:hover': {
            backgroundColor: '#ffd54f',
            border: '1px solid #eeeeee',
          },
        },
      },
    }
  }
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Calculator />
    </ThemeProvider>
  )
}

export default App
