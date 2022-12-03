
import Header from './Header'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    return(
        <div>
            <header id="header" class="header">
            {/* <!--<div class="header-content">--> */}
            <div class="form-content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 container-login">
                            <h2> Login </h2>
                        <form action="validation.php" method="post">
                            <div class="form-group">
                                <label>Email-id</label>
                                <input type="text" name="email" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" name="password" class="form-control"/>
                            </div>
                            <button type="submit" class="btn btn-primary form-btn" name="submit">Login</button> 
                            <button type="submit" class="btn btn-primary form-btn" name="cancel">Cancel</button> 
                            <p class="alter">Dont have an account, 
                            {/* <a href="signup.php">Sign up</a> */}
                            <a onClick={()=> navigate('/signup')}>Sign up </a>
                            {/* <li class="nav-item" onClick={()=>navigate('/login')}><a class="nav-link page-scroll" >Login/Signup</a></li> */}
                            </p>
                            
                        </form>
                    </div>
                        <Header/> 
                        {/* <!-- end of col --> */}
                    </div> 
                    {/* <!-- end of row --> */}
                </div> 
                {/* <!-- end of container --> */}
            </div>
             {/* <!-- end of header-content --> */}
    </header> 
        </div>
    )
}
export default Login;
