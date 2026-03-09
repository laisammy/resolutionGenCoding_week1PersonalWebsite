export default function Navbar() {
    return (
        <nav className = "flex justify-between items-center bg-violet-500 text-white p-4 rounded-lg">
            <h1 className = "text-2xl font-bold"> Kristena </h1>

            <div className = "flex gap-6">
                <a href = "#about" className = "hover:underline"> About </a>
                <a href = "#projects" className="hover:underline"> Projects </a>
                <a href = "#cats" className = "hover:underline"> Cats </a>
                <a href = "#contact" className = "hover:underline"> Contact </a>
            </div>
        </nav>
    );
}