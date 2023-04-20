import * as React from 'react';
import { Navigate, Routes } from 'react-router';
import { Route, useNavigate } from 'react-router-dom';
import routerData from './RouterData';

export interface IAppProps {
}

export function Router () {
    const [loggedIn, setLoggedIn] = React.useState(true)
    // const navigate = useNavigate()

    const pageRoutes = routerData.map(({ title, element, path, requiresAuth }) => {
        if(requiresAuth) {
            return (
                <Route key={title} path={`/${path}`} element={loggedIn ? element : <Navigate to = '/login' />} />
            )
        }

        return <Route key={title} path={`/${path}`} element={element} />
    })
  return (
    <Routes>
        {pageRoutes}
    </Routes>
  );
}
