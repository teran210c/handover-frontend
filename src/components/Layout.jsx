import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Defects from "../pages/Defects"
import { Outlet } from "react-router-dom"

export default function Layout() {
   
    return (
        <>
            <div className="min-h-screen flex">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                    <Navbar />
                    <main>
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    )
}