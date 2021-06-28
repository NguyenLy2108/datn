<template>
  <head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

  </head>
  <header>
    <img id="user_avar" src="../assets/avatar.png" />
  </header>
  <div id="sidebar">
    <header>
      <a href="#">My HUMG</a>
    </header>
    <ul class="nav">
      <li>
        <a href="/">LỚP HỌC </a>
      </li>
      <li>
        <a href="/lichthi">LỊCH THI</a>
      </li>
      <li>
        <a href="/thoikhoabieu">THỜI KHÓA BIỂU</a>
      </li>
      <li>
        <a href="/tintuc">TIN TỨC</a>
      </li>
    </ul>
  </div>
  <!-- Content -->
  <div id="content">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
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

<template id = "home">
  <v-card
    height="400"
    width="256"
    class="mx-auto"
  >
    <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: "Home", 
    data () {
      return {
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
        right: null,
      }
    },
};
</script>

<style>
header {
  background-color: lightgrey;
  margin-top: -20px;
  margin-left: -8px;
  margin-right: -8px;
  height: 60px;
}

#user_avar {
  margin-left: 95%;
  height: 40px;
  padding-top: 15px;
  padding-bottom: 10px;
}

body {
  overflow-x: hidden;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
}

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
  padding-top: 45px;
}

#sidebar header a:hover {
  color: #fff;
}
#sidebar .nav {
  padding: 7px;
}

#sidebar .nav a {
  background: none;
  color: #cfd8dc;
  font-size: 16px;
  padding: 50px 10px;
}

#sidebar .nav a:hover {
  background: none;
  color: #eceff1;
}
</style>