<template>
  <head>
    <title>Login Page</title>
    <!--Made with love by Mutiullah Samim -->

    <!--Bootsrap 4 CDN-->
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    />

    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
      integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
      crossorigin="anonymous"
    />

    <!--Custom styles-->
    <link rel="stylesheet" type="text/css" href="styles.css" />

    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  </head>
  <header>
    <img id="user_avar" src="https://thuesms.com/thuesms.com_css/avatar.png" />
  </header>
  <div id="sidebar">
    <header> 
      <div>     
      <a href="#">My HUMG</a>
      </div>      
    </header>
    <ul class="nav">
      <li>
        <router-link to="/"><i class="fas fa-users"></i> LỚP HỌC </router-link>
      </li>
      <li>
        <router-link to="/lichthi"
          ><i class="far fa-bell"></i> LỊCH THI
        </router-link>
      </li>

      <li>
        <router-link to="/thoikhoabieu"
          ><i class="far fa-calendar-alt"></i> THỜI KHÓA BIỂU
        </router-link>
      </li>
      <li>
        <router-link to="/tintuc"
          ><i class="far fa-comments"></i> TIN TỨC
        </router-link>
      </li>
    </ul>
  </div>
  <!-- Content -->
  <div id="content"></div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
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
  height: 50px;
}

#sidebar header button {
  /* margin-top: 60px; */
  background-color: #263238;
}

#sidebar header button i {
  color: white;
}

#sidebar header a {
  color: #fff;
  display: block;
  text-decoration: none;
  padding-top: 10px;
  margin-top: 30px;
  margin-left: 35px;
}

#sidebar header a:hover {
  color: rgba(241, 128, 113, 0.856);
}

#sidebar .nav {
  padding-top: 12px;
}

#sidebar .nav li {
  padding: 10px;
  background: none;
  color: #cfd8dc;
  font-size: 16px;
  padding: 15px;
  justify-content: space-around;
  text-decoration: none;
}

#sidebar .nav a:hover {
  background: none;
  color: rgba(241, 128, 113, 0.856);
}
</style>