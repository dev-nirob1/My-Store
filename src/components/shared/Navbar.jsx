import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FaMagnifyingGlass, FaRegHeart } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <header className="px-10 h-20">
            <nav className=" flex items-center justify-between h-full">
                <ul className="flex gap-5">
                    <li className="flex items-center gap-1 cursor-pointer">
                        <img src="/footer/en.png" alt="" />
                        <IoIosArrowDown />
                    </li>
                    <li className="flex items-center gap-1 cursor-pointer">
                        USD
                        <IoIosArrowDown />
                    </li>
                    <li>
                        <Link>Men</Link>
                    </li>
                    <li>
                        <Link>Women</Link>
                    </li>
                    <li>
                        <Link>Children</Link>
                        </li>
                    <li>
                        <Link>Accessories</Link>
                    </li>
                </ul>
                <div>
                    <Link to="/" className="text-3xl font-medium">My<span className="text-blue-500">Store</span> </Link>
                </div>

                <ul className="flex gap-5 items-center">
                    <li>
                        <Link>Home</Link>
                    </li>
                    <li>
                        <Link>About</Link>
                    </li>
                    <li>
                        <Link>Contact</Link>
                    </li>
                    <li>
                        <Link>Stores</Link>
                    </li>
                    <li>
                        <FaMagnifyingGlass size={18} className="cursor-pointer"/>
                    </li>
                    <li>
                        <FaRegUser size={18} className="cursor-pointer"/>
                    </li>
                    <li>
                        <FaRegHeart size={18} className="cursor-pointer"/>
                    </li>
                    <li>
                        <IoCartOutline size={22} className="cursor-pointer"/>
                    </li>
                    
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;