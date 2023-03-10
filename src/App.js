import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './componets/Routers/Router';

function App() {
  return (
    <div className="max-w-[1440px] mx-auto bg-slate-200">
     <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
