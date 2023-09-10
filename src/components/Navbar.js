import { Link } from "react-router-dom";
import logo from "../assests/Logo.svg";
import { toast } from "react-hot-toast";

const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    return (
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">

            <Link to="/" >
                <img src={logo} alt="Logo" width={160} height={32} loading="lazy"></img>
            </Link>

            <nav>
                <ul className="text-[#DADDE2] flex gap-4">
                    <li>
                        <Link to="/"> Home</Link>
                    </li>
                    <li>
                        <Link to="/about"> About</Link>
                    </li>
                    <li>
                        <Link to="/contact"> Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className="flex items-center gap-x-4">
                {
                    !isLoggedIn && 
                    <Link to="/login">
                        <button className="bg-[#2F363C] text-[#DADDE2] py-[6px] px-[12px] rounded-[8px] border border-[#474E54]">
                            Log in
                        </button>
                    </Link>
                }
                {
                    !isLoggedIn &&
                    <Link to="/signup">
                        <button className="bg-[#2F363C] text-[#DADDE2] py-[6px] px-[12px] rounded-[8px] border border-[#474E54]" >
                            Sign up</button>
                    </Link>
                }
                {   
                    isLoggedIn &&
                    <Link to="/">
                        <button onClick={ () => {
                            setIsLoggedIn(false);
                            toast.success("Logged Out");
                        } } 
                        className="bg-[#2F363C] text-[#DADDE2] py-[6px] px-[12px] rounded-[8px] border border-[#474E54]"
                        >Log Out</button>
                    </Link>
                }
                {
                    isLoggedIn &&
                    <Link to="/dashboard">
                        <button className="bg-[#2F363C] text-[#DADDE2] py-[6px] px-[12px] rounded-[8px] border border-[#474E54]">
                            Dashboard</button>
                    </Link>
                }
            </div>


        </div>
    )
}

export default Navbar;