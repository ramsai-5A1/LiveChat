import { RouterProvider } from 'react-router-dom';
import './App.css'
import AppRoutes from './utils/AppRoutes';
import { Provider } from 'react-redux';
import AppDataStore from './utils/AppDataStore';

const App = () => {
  return (
    <Provider store={AppDataStore}>
      <div className=''>
        <RouterProvider router={AppRoutes}/>
      </div>
    </Provider>
  )
};

export default App;