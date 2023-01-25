import { Link } from "react-router-dom";
import { logOut } from "../firebase";


function Header(props){
  return (
    <nav>
      <ul>
      <Link to='/' className="link">
        <li>Home</li>
      </Link>
      <Link to='/explore' className="link">
        <li>Showcase Hub</li>
      </Link>
      {props.user ? 
      <div>
        <li>
          <button onClick={logOut}>Logout</button>
        </li>
         <Link exact to='/portfolio/new' className="link">
         <li>New Portfolio</li>
       </Link>
       <Link to='/portfolio/:id' className="link">
         <li>My Portfolio</li>
       </Link>
       </div>
       : (
        <Link to='/login' className="link">
        <li>log in</li>
      </Link>
      )}
      <Link to='/registration' className="link">
        <li>Sign up</li>
      </Link>
      </ul>
    </nav>
  )
} 
  
export default Header;