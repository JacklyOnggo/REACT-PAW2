
import { createBrowserRouter } from "react-router";
import home from "../pages/home/home";
import about from "../pages/about/about";
import PublicLayout from "../layout/PublicLayout";

const router = createBrowserRouter([
    {
        path: '/',
        Component: PublicLayout,
        children: [
            {
                index: true,
                lazy: async () => {
                    const module = await import("../pages/home/home")
                    
                    return{
                        Component: module.default
                    }
                }
            },
            {
                index: true,
                lazy: async () => {
                    const module = await import("../pages/about/about")
                    
                    return{
                        Component: module.default
                    }
                }
            }
        ]
    }

])

export default router