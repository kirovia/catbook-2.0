import App from "./pages/App"
import Home from "./pages/Home"
import CatList from "./pages/CatList"
import CatProfile from "./pages/CatProfile"
import About from "./pages/About"

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
              path: '/',
              element: <Home />
            }, {
              path : '/all-cats',
              element: <CatList />
            }, {
              path: '/cat-profile/:id',
              element: <CatProfile />
            }, {
              path: '/about',
              element: <About />
            }
        ]
    }
]

export default routes