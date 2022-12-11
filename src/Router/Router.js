import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
import ProjectDetails from "../Component/ProjectDetails/ProjectDetails";
import Main from "../Layout/Main/Main";

export const  router = createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        children:[
            {
                path:'/',
                element: <Home />
            },
            {
                path: '/id/:id',
                element : <ProjectDetails />
            }
        ]

    }
])