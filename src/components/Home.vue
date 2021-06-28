<template>
  <head>
    <title>Login Page</title>
    <!--Made with love by Mutiullah Samim -->

    <!--Bootsrap 4 CDN-->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
      crossorigin="anonymous"
    />

    <!--Fontawesome CDN-->
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
      integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
      crossorigin="anonymous"
    />

    <!--Custom styles-->
    <link rel="stylesheet" type="text/css" href="styles.css" />
  </head>
  <header>
    <img id="user_avar" src="./assets/user_avatar.png" >
    <!-- <h5 id = "user_avar">Test</h5> -->
  </header>
  <div id="sidebar">
    <header>
      <a href="#">My HUMG</a>
    </header>
    <ul class="nav">
      <li>
        <a href="#"> <i class="zmdi zmdi-view-dashboard"></i> Dashboard </a>
      </li>
      <li>
        <a href="#"> <i class="zmdi zmdi-link"></i> Shortcuts </a>
      </li>
      <li>
        <a href="#"> <i class="zmdi zmdi-widgets"></i> Overview </a>
      </li>
      <li>
        <a href="#"> <i class="zmdi zmdi-calendar"></i> Events </a>
      </li>
      <li>
        <a href="#"> <i class="zmdi zmdi-info-outline"></i> About </a>
      </li>
      <li>
        <a href="#"> <i class="zmdi zmdi-settings"></i> Services </a>
      </li>
      <li>
        <a href="#"> <i class="zmdi zmdi-comment-more"></i> Contact </a>
      </li>
    </ul>
  </div>
  <!-- Content -->
  <div id="content">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <img id="user_avar" src="./assets/user_avatar.png" />        
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#"><i class="zmdi zmdi-notifications text-danger"></i> </a>
          </li>
          <li><a href="#">Test User</a></li>
        </ul>
      </div>
    </nav>
    <div class="container-fluid">
      <h1>Simple Sidebar</h1>
      <p>
        Make sure to keep all page content within the
        <code>#content</code>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
/* @import url("https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"); 
@import url("https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js");
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js");
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"); */
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500");
header {
  background-color: lightgrey;
  margin-top: -20px;
  margin-left: -8px;
  margin-right: -8px;
  height: 70px;
}

#user_avar {
  margin-left: 95%;
  height: 70px;
  padding-top: 30px;
  padding-bottom: 5px;
}

body {
  overflow-x: hidden;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
}

/* Toggle Styles */

#content {
  padding-left: 250px;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#content {
  width: 100%;
  position: relative;
  margin-right: 0;
}

/* Sidebar Styles */

#sidebar {
  margin-top: -58px;
  z-index: 1000;
  position: fixed;
  left: 250px;
  width: 250px;
  height: 100%;
  margin-left: -250px;
  overflow-y: auto;
  background: #37474f;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#sidebar header {
  background-color: #263238;
  font-size: 20px;
  text-align: center;
  height: 79px;
}

#sidebar header a {
  color: #fff;
  display: block;
  text-decoration: none;
  text-align: center;
  padding-top: 35px;
}

#sidebar header a:hover {
  color: #fff;
}

#sidebar .nav a {
  background: none;
  border-bottom: 1px solid #455a64;
  color: #cfd8dc;
  font-size: 14px;
  padding: 16px 24px;
}

#sidebar .nav a:hover {
  background: none;
  color: #eceff1;
}

#sidebar .nav a i {
  margin-right: 16px;
}
</style>