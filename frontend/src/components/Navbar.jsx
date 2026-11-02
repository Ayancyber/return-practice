import {Link} from "react-router"
import {PlusIcon} from "lucide-react"
const Navbar = () => {
    return <header className="bg-white shadow">
        <nav className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-3xl font-mono font-bold tracking-tight text-blue-600 border border-blue-600 rounded-lg p-2 ">NotesApp</h1>
            <Link to="/create" className="flex items-center space-x-2 border-2 border-blue-600 rounded-lg px-4 py-2 text-blue-600 hover:bg-blue-500 hover:text-white transition-colors duration-300">
                <PlusIcon className="h-6 w-6 " aria-hidden="true" />
                <button className=" font-weight-bold">Create Note</button>
            </Link>
        </nav>
    </header>
}
export default Navbar