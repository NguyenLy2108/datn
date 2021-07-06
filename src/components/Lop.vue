<template>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
</head>
  <div class="w3-third">    
    <img id="image" src="https://png.pngtree.com/png-vector/20190417/ourmid/pngtree-clean-high-school-classroom-with-chalk-green-board-brown-study-table-png-image_949137.jpg" />
    <p class = "lop"> {{ lopProps }}</p>
    <div class = "btn">
    <button type="button" class="btn btn-info">Nhập điểm</button>    
    <button type="button" @click="redirect" class="btn btn-info">Điểm danh</button>
    </div>
  </div>
</template>

<script>
export default {
name: "Lop",
props:['lopProps'],
methods:{
        redirect() {
            this.$router.push({path:'/diemdanh'})
        }
    }
}
</script>

<style>
.lop {
  margin-top: 10px;
  margin-left: 30px;
  margin-right:30px;
}
.w3-third{
  width: 30%;
  height: 20%;
  text-align: center;  
  margin-bottom: 20px;
}
#image{
  width: 41%;
  height: 35%;
}
.btn{
  margin:0px 5px;
}
</style>