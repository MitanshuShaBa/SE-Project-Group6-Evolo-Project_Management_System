import logo from '../images/logo.svg'
import React from 'react';
import {useNavigate} from 'react-router-dom'

const NavBar = () => {
    const isLogin = true;
    const navigate = useNavigate()
    return (
        <nav class="navbar navbar-expand-sm navbar-light navbar-custom">
            <a class="navbar-brand logo-image" href="index.php">
                <img src={logo} alt="alt" /></a>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarsExampleDefault">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item" onClick={()=>navigate('/')}>
                        <a class="nav-link page-scroll" >Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="#services">Why Evolo?</a>
                    </li>
                    {
                        isLogin
                            ? <React.Fragment><li class="nav-item">
                                <a class="nav-link page-scroll" href="dashboard.php">Dashboard</a>
                            </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id="navbarDropdown" aria-haspopup="true" aria-expanded="false">Hi, '.$_SESSION["name"].'</a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#"><span class="item-text">Profile</span></a>
                                        <div class="dropdown-items-divide-hr"></div>
                                        <a class="dropdown-item" href="#"><span class="item-text">Logout</span></a>
                                    </div>
                                </li>
                            </React.Fragment>
                            : <li class="nav-item" onClick={()=>navigate('/login')}><a class="nav-link page-scroll" >Login/Signup</a></li>
                    }
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;