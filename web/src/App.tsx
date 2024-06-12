/*import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hello from './components/Hello';

const App: React.FC = () =>
{
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            {/* Main content could be added here if needed }
            <Footer />
            <Hello />
        </div>
    );
};

export default App;*/

import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import router from "./Router";

const queryClient = new QueryClient();

function App()
{
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
}
export default App;
