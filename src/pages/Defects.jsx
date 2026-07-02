import { Link } from "react-router-dom"

export default function Defects() {
    const today = new Date()
    const formattedDate = today.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    })
    return (
        <main className="flex-1">
            <h1>{formattedDate}</h1>

            <Link
                to="/add-defects"
                state={{ dateSent: formattedDate }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Add Defect
            </Link>

            <ol>
                <li>
                    lista de defetcs
                </li>
            </ol>

        </main>
    )
}