<template>
  <div id="content" >
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    </head>
    <form >      
      <div class="td">
        <div class="has-search">
          <span class="fa fa-search form-control-feedback"></span>
          <input
            type="text"
            class="form-control"
            placeholder="Tìm kiếm lớp học"
          />
        </div>
      </div>
       <div class="td">
        <h4><i class="fas fa-biohazard"></i> DANH SÁCH LỚP HỌC</h4>
      </div>
      <br>
      <div class="w3-row">
        <Lop v-for="lop in dslop" v-bind:key="lop" v-bind:lopProps="lop" />
      </div> 
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import Lop from "./Lop.vue";

export default {
  name: "Lophoc",
  components: { Lop },
  setup() {
    const dslop = ref(["Lop1", "Lop2", "Lop3", "Lop4", "Lop5"]);

    return { dslop };
  },
  data() {
    return {
      isShow: true
    }
  }, 
};
</script>

<style scoped>
.td {
  display: inline;
}
.has-search {
  float: right;
  width: 40%;
}
.has-search .form-control {
  padding-left: 2.375rem;
  border-color: white;
  border-bottom-color: grey;
}

.has-search .form-control-feedback {
  position: absolute;
  z-index: 2;
  display: block;
  width: 2.375rem;
  height: 2.375rem;
  line-height: 2.375rem;
  text-align: center;
  pointer-events: none;
  color: #aaa;
}
</style>