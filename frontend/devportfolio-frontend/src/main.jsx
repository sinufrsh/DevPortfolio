import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './Context/AuthContext.jsx';
import { Toaster } from "react-hot-toast";
import "react-loading-skeleton/dist/skeleton.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 3000,
            style: {
              borderRadius: "12px",
              background: "#1e293b",
              color: "#fff",
              fontSize: "14px",
              padding: "14px 18px"
            },
            success: {
              iconTheme: {
                primary: "#22c55e",
                secondary: "#fff"
              }
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff"
              }
            }
          }}
        />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
