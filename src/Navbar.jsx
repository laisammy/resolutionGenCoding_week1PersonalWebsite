import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className = "flex justify-between items-center bg-violet-500 text-white p-4 rounded-lg">
            <div className="flex items-baseline gap-2">
                <span>Hello, my name is...</span>
                <span className="font-bold text-2xl">Kristena!</span>
            </div>

            <div className = "flex gap-6">
                <Link to = "/" className = "hover:underline"> Home </Link>
                <Link to = "/projects" className = "hover:underline"> Projects </Link>
                <Link to = "/contact" className = "hover:underline"> Contact </Link>
            </div>
        </nav>
    );
}