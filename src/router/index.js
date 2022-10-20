import {
  createBrowserRouter,
} from "react-router-dom";

import Home from "../views/Home"
import App from "../App"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/Home',
    element: <Home />,
  }
])

export default router