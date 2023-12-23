import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Root } from "./Layout/Root";
import { Provider } from "react-redux";
import { store } from "./Store/Store";


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      //  dashboard  
      {index: true, element: <Home/>},
      {
        path: '/ecommerce',
        element: <Home/>
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
