import store from "./store"
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav>
            <Link to='/home'>Home</Link>
            <Link to='/login'> Login</Link>
            <Link to='/forgot_password'> Forgot Password</Link>
        </nav>
    )

}

const mapStateToProps = state => state
export default connect(mapStateToProps)(NavBar)