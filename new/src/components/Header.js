import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <ul className="sidenav">
            <li>
            <Link to="/" className="active">Home</Link>
            
            </li>
            <li>
                <Link to="/Name" className="#Name">Name</Link>
            </li>
            <li>
                <Link to="/Table" className="#Table">Table</Link>
            </li>
            <li>
            <Link to="/About" className="#About">About</Link>
            </li>
      </ul>
      
  )
  }
  
  export default Header;