import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import Main from './layout/Main';
import Home from './pages/Home';
import Details from './pages/Details';
import NotFound from './pages/NotFound';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="/details/:id/*" element={<Details />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
