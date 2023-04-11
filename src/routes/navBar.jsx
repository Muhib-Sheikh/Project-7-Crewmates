import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
        <div className='navigation'>
            <Link to="/">
                <h1 className='header'>Crewmate Creator</h1>
            </Link>
            <Link to="/">
                <h2 className='nav_element'>Home</h2>
            </Link>
            <Link to='/createCrewmate'>
                <h2 className='nav_element'>Create a Crewmate!</h2>
            </Link>
            <Link to='/crewmateGallery'>
                <h2 className='nav_element'>Crewmate Gallery</h2>
            </Link>
        </div>
      <Outlet />
    </div>
  );
};

export default NavBar;