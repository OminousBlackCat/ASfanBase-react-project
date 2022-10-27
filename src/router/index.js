import {
  createBrowserRouter,
} from "react-router-dom";

import Home from "../viewsPage/Home"
import App from "../App"
import PublicHome from "../viewsPage/PublicList/PublicHome/index"
import Blog from "../viewsPage/PublicList/Blog/index"
import Email from "../viewsPage/PublicList/Email/index"
import StudyMaterials from "../viewsPage/PublicList/StudyMaterials"
import ListImg from "../viewComponent/blog/image/image"
import ListMes from "../viewComponent/blog/message/message";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/Home',
    element: <Home />,
    children: [{
      index: true,
      element: <PublicHome />,
    },
    {
      path: 'Blog',
      element: <Blog />,
      children: [{
        index: true,
        element: <ListImg />,
      },{
        path: 'ListMes',
        element: <ListMes />,
      }]
    },
    {
      path: 'Email',
      element: <Email />,
    },
    {
      path: 'StudyMaterials',
      element: <StudyMaterials />,
    },
  ]
  }
])

export default router