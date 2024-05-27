import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import Home  from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Profile from "./Pages/Profile/Profile";
import Navbar from "./Components/Navbar/Navbar";
import LeftBar from "./Components/LeftBar/LeftBar";
import RightBar from "./Components/RightBar/RightBar";

function App() {

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{display:"flex"}}> 
          <LeftBar />
          <Outlet />
          <RightBar />
        </div>
      </div>
    )
  }

  const router= createBrowserRouter([
    {
      path:"/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/profile",
          element:<Profile />
        }

      ]
    },
    {
      path:"/Login",
      element:<Login /> 
    },
    {
      path:"/Register",
      element:<Register />
    },{
      path:"/Profile",
      element:<Profile />
    }
  ]
  )

  return (
    <RouterProvider router={router} />
  );
}

export default App;
