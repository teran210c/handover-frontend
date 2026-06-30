import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Defects from "../pages/Defects"

export default function Layout() {
   
    return (
        <>
            <div className="min-h-screen flex">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                    <Navbar />
                    <Defects />
                </div>
            </div>
        </>
    )
}