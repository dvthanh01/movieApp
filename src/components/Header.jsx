const Header = () => {
    return(
        <div className="p-4 bg-black flex items-center justify-between">
            <div className="flex space-x-4">
                <h1 className="text-[30px] uppercase font-bold text-red-600">Movie</h1>
                <nav className="flex space-x-4 items-center">
                    <a href="#" className="text-white">Home</a>
                    <a href="#" className="text-white">About</a>
                    <a href="#" className="text-white">Contact</a>
                </nav>
            </div>
            <div className="flex space-x-4">
                <input type="text" placeholder="Search" className="px-3 py-2 text-black"></input>
                <button className="px-3 py-2 text-white bg-red-600 ">Search</button>
            </div>
        </div>
    )
}
export default Header;