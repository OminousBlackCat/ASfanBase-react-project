import {
  createBrowserRouter,
} from "react-router-dom";

import Home from "../views/Home"
import App from "../App"
import PublicHome from "../views/component/PublicList/Home/index"
import Blog from "../views/component/PublicList/Blog/index"
import Email from "../views/component/PublicList/Email/index"
import StudyMaterials from "../views/component/PublicList/StudyMaterials"
import ListImg from "../views/component/PublicList/Blog/component/image"
import ListMes from "../views/component/PublicList/Blog/component/message";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/Home',
    element: <Home />,
    children: [{
      path: 'PublicHome',
      element: <PublicHome />,
    },
    {
      path: 'Blog',
      element: <Blog />,
      children: [{
        path: 'ListImg',
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