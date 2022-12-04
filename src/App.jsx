import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import Main from './layout/Main';
import Home, { homeLoader } from './pages/Home';
import Details from './pages/Details';
import NotFound from './pages/NotFound';
import { detailsLoader } from './pages/Details';
import Repos, { reposLoader } from './pages/Repos';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Main />}>
            <Route index element={<Home />} loader={homeLoader} />
            <Route
                path="/details/:username"
                element={<Details />}
                loader={detailsLoader}
            >
                <Route path="repos" index element={<Repos />} loader={reposLoader}/>
            </Route>
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
