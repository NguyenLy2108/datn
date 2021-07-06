<template>
  <div id="content">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
    </head>
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
        <h4><i class="fas fa-biohazard"></i> Thống Kê Buổi Điểm Danh</h4>
         <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Ngày</th>
                <th scope="col">Học kỳ</th>
                <th scope="col">Mã nhóm</th>
                <th scope="col">Giảng viên</th>
                <th scope="col">Môn học</th>
                <th scope="col">DSSV</th>
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
    <button type="button" @click="chitiet" class="btn btn-info">
      Chi tiết
    </button>
    <button type="button" @click="tilevang" class="btn btn-info">
      Tỉ lệ vắng
    </button>
  </div>
</template>

<script>
export default {
  name: "Thongke",
  methods: {    
    chitiet() {
      this.$router.push({ path: "/chitiet" });
    },
    tilevang() {
      this.$router.push({ path: "/tilevang" });
    },
  },  
};
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