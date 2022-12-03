import Header from './Header';
const HomeHeader = () => {
    return <header id="header" class="header">
    <div class="header-content">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="text-container">
                        <h1><span class="turquoise">One platform, better teamwork.</span> </h1>
                        <p class="p-large">Manage all your projects from start to finish.</p>
                        <a class="btn-solid-lg page-scroll" href="login.php">DISCOVER</a>
                    </div> 
                </div> 
                <Header/>
            </div> 
        </div> 
    </div> 
</header>
}
export default HomeHeader;