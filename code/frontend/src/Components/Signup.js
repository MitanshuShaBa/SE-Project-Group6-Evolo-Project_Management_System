import Header from "./Header";

const Signup = () => {
    return (
        <div>
        <header id="header" class="header">
        <div class="form-content-sign">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 login-left">
                        <h2> Sign up </h2>
                        <form action="registration.php" method="post">
                            
                                <div class="form-group">
                                <label>Name</label>
                                <input type="text" name="name" class="form-control"/>
                                </div>
                            
                                <div class="form-group">
                                <label>Email-id</label>
                                <input type="text" name="email" class="form-control"/>
                                </div>
                            
                                <div class="form-group">
                                <label>Password</label>
                                <input type="password" name="password" class="form-control"/>
                                </div>
                        
                                <div class="form-group">
                                <label>Contact number</label>
                                <input type="tel" name="contact" class="form-control"/>
                                </div>
                            
                            <button type="submit" class="btn btn-primary form-btn">Register</button> 
                            <button type="submit" class="btn btn-primary form-btn" name="cancel">Cancel</button>
                            <p class="alter">Already have an account, <a href="login.php">Login</a></p> 
                        </form>
                        </div>
                        <Header/> 
                    </div> 
                </div> 
            </div>
        </header>
        </div>
        
    )
}

export default Signup;