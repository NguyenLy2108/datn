<template>
   <div id="content">
       <div class="td">
        <div class="has-search">
          <span class="fa fa-search form-control-feedback"></span>
          <input
            type="text"
            class="form-control"
            placeholder="Tìm kiếm"
          />
        </div>
      </div>
       <div class="td">
        <h4><i class="fas fa-biohazard"></i> Danh Sách Chi Tiết</h4>
         <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Mã Sv</th>
                <th scope="col">Tên Sv</th>
                <th scope="col">Lớp</th>
                <th scope="col">Điểm danh</th>
              </tr>
            </thead>
            <tbody>
              <!-- <tr v-for="item in sinhViens" :key="item.msv">
                <th scope="row">{{ item.msv }}</th>
                <td>{{ item.tensv }}</td>
                <td>{{ item.lop }}</td>
                <td>
                  <input
                    class = "cb"
                    type="checkbox"
                    v-model="item.trangthai"
                    true-value="1"
                    false-value="0"
                  />                  
                </td>
              </tr> -->
            </tbody>
          </table>
      </div>
      <br>
   </div>
</template>

<script>
export default {
name: "Dschitiet",
}
</script>

<style>
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
thead{
   background-color:#90ad6e;
   color: white;
}
tr:nth-child(even) {
  background-color:#D0E5B8;
}
</style>