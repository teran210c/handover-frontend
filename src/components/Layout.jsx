import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

export default function Layout() {
    const today = new Date()
    console.log(today)
    return (
        <>
            <div className="min-h-screen flex">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                    <Navbar />
                    <main className="flex-1">
                        <h1>
                            {today.toLocaleDateString('en-US', {
                                weekday: 'short',
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                            })}
                        </h1>

                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Add Defect
                        </button>

                        <ol>
                            <li>
                                lista de defetcs
                            </li>
                        </ol>

                    </main>
                </div>
            </div>
        </>
    )
}