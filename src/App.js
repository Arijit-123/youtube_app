
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import { Provider } from 'react-redux';
import Store from './Utils/Store';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Maincont from './Components/Maincont';
import Watchpage from './Components/Watchpage';
import Listview from './Components/Listview';
const approuter=createBrowserRouter([{
  path:'/',
  element:<Body/>,
  children:[
{
  path:'/',
  element:<Maincont/>
},
{
  path:'watchpage',
  element:<Watchpage/>
}
  ]
}]);

function App() {



  
  return (
    <>
<Provider store={Store}>
    <div className="">

     <Header/>
<RouterProvider router={approuter}/>
   
    </div>
    </Provider>

    <Listview/>
    </>

  );
}

export default App;
