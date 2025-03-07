import { Link } from "react-router-dom";
import carLogo from "../../assets/icons8-car-96.png";


const Navbar = () => {
  const navItems= <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
  </>
  return (
    // shadow - sm
    <div className="navbar bg-base-100  h-28 max-w-7xl mx-auto p-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <p className="text-pink-500">Genius Car</p>
          {/* <img src={carLogo} alt="car-logo" /> */}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Apoinment</a>
      </div>
    </div>
  );
};

export default Navbar;