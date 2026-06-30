export default function defects() {
     const today = new Date()
    return (
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
    )
}