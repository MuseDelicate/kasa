import logo from './logo.svg';
import './App.css';
import router from './route';
import { RouterProvider } from 'react-router-dom';

function App() {
    return (
        < RouterProvider router = { router } />
    );
}

export default App;