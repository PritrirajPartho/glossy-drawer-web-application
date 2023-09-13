import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider
} from "react-router-dom";
import "./index.css";
import router from './routes/Routes';
import AuthProvider from './providers/AuthProvider';


import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <div>
                    <RouterProvider router={router} />
                </div>
            </QueryClientProvider>
        </AuthProvider>
    </div>
  </React.StrictMode>,
)
