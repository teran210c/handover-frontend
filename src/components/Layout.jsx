import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

export default function Layout() {
    return (
        <>
            <div className="min-h-screen flex">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                    <Navbar />
                    <main className="flex-1">
                        content
                    </main>
                </div>
            </div>
        </>
    )
}