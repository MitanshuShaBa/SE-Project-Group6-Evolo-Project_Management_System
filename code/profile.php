<?php
    session_start();
    require_once "pdo.php";
    $stmt="Select * from user_db where u_id=:user";
    $stmt=$pdo->prepare($stmt);
    $stmt->execute(array(
        "user"=>$_SESSION["u_id"]
    ));
    $row=$stmt->fetchALL(PDO::FETCH_ASSOC);
    $users=array();
    $users["name"] = $row[0]["name"];
    $users["contact"] = $row[0]["contact"];
    $users["email"] = $row[0]["email"];
?> 
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="css/styles.css">
        <link rel="stylesheet" href="css/dash_style.css?x=1ac">
    </head>
    <body><!-- Navigation -->
        <nav class="navbar navbar-expand-sm navbar-light navbar-custom">
            <a class="navbar-brand logo-image" href="index.php"><img src="images/logo.svg" alt="alternative" class="logo-img"></a>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarsExampleDefault">
            <span class="navbar-toggler-icon"></span>
        </button>
            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="index.php">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="logout.php">Logout</a>
                    </li>
                    <!-- Dropdown Menu -->          
                    <!--<li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle page-scroll" href="#about" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">About</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#"><span class="item-text">Terms Conditions</span></a>
                            <div class="dropdown-items-divide-hr"></div>
                            <a class="dropdown-item" href="#"><span class="item-text">Privacy Policy</span></a>
                        </div>
                    </li>-->
                    <!-- end of dropdown menu -->
            </ul>
            </div>
        </nav>
        <div class="container marginTop">
        <div class="row"> 
        <div class="col-lg-12 mb-4 mb-sm-5">
                <div class="card card-style1 border-0">
                    <div class="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                        <div class="row align-items-center">
                            <div class="col-lg-6 mb-4 mb-lg-0">
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="...">
                            </div>
                            <div class="col-lg-6 px-xl-10">
                                <div class="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded profile-name">
                                    <h3 class="h2 text-white mb-0"><?echo $users["name"];?></h3>
                                    <!-- <span class="text-primary">Coach</span> -->
                                </div>
                                <ul class="list-unstyled mb-1-9">
                                    <li class="mb-2 mb-xl-3 display-28"><span class="display-26 text-secondary me-2 font-weight-600">Email:</span> <?echo $users["email"];?></li>
                                    <li class="mb-2 mb-xl-3 display-28"><span class="display-26 text-secondary me-2 font-weight-600">Contact:</span> <?echo $users["contact"];?></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</div>
</div><!-- end of navbar -->
</body>
</html>
