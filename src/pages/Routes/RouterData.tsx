import { title } from "process";
import { routerType } from "../../types/router.types";
import LoginPage from "../login/loginPage";
import { Dashboard } from "../dashboard/dashboard";

const routerData: routerType[] = [
    {
        path: 'login',
        element: <LoginPage />,
        title: 'login',
        requiresAuth: false,
    },
    {
        path: "dashboard",
        title: "dashboard",
        element: <Dashboard />,
        requiresAuth: true,
    },
]

export default routerData