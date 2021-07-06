<template>
  <div id="content">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
    </head>
    <div>
      Chọn ngày:
      <input type="date" v-model="mydate" class="dt1" />
    </div>
    <br />
    <div class="w3-row">
      <div class="w3-threequarter">
        Chọn ảnh:
        <input type="file" ref="file" multiple="multiple" class="dt" />
      </div>
      <div class="w3-quarter">
        <button type="button" @click="predict" class="btn btn-info" id="dd">
          Điểm danh
        </button>
        <button type="button" @click="redirect" class="btn btn-info" id="tk">
          Thống kê
        </button>
      </div>
    </div>
    <div class="w3-row">
      <div class="w3-twothird">
        <div class="td">
          <div class="has-search">
            <span class="fa fa-search form-control-feedback"></span>
            <input
              type="text"
              class="form-control"
              placeholder="Tìm kiếm sinh viên"
            />
          </div>
        </div>
        <div class="td">
          <h4><i class="fas fa-biohazard"></i> DANH SÁCH SINH VIÊN</h4>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Mã Sv</th>
                <th scope="col">Tên Sv</th>
                <th scope="col">Lớp</th>
                <th scope="col">Điểm danh</th>
              </tr>
            </thead>
            <tbody class="tbhover">
              <tr v-for="item in sinhViens" :key="item.msv">
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
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="w3-third">
        <h4><i class="fas fa-biohazard"></i> DANH SÁCH ẢNH</h4>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
const value = Object.assign(require("../../dssv.json"));
// console.log(value)
// import ref from 'vue'

export default {
  name: "Diemdanh",
  data() {
    return {
      sinhViens: [...value],
    };
  },
  methods: {
    redirect() {
      this.$router.push({ path: "/thongke" });
    },
    async getDanhSach() {
      // var response = await axios.get("http://ip2.humg.edu.vn:8888/api/thoikhoabieus/danhsachlop?maMh=7080226&nhHk=20202&maNhom=01", {
      //   headers: {
      //     'accessToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiVGVhY2hlciIsIkFwcE5hbWUiOiJNWUhVTUdfTW9iaWxlIiwiVHlwZVRva2VuIjoiQWNjZXNzIFRva2VuIiwiUm9sZVRva2VuIjoiVGVhY2hlciIsIk1hTmQiOiIwODAxLTA2IiwibmJmIjoxNjI1NTQzNjk0LCJleHAiOjE2MjYxNDg0OTQsImlhdCI6MTYyNTU0MzY5NCwiaXNzIjoiTXlIVU1HX2FwaXMiLCJhdWQiOiJzdHVkZW50LXRlYWNoZXIifQ.Ep7vwpUBpINSHJFuoqSuiBKNnXLoj-idRAAgHqRcerc'
      //   }
      // });
      // if(response.status == 200)
      // {
      //   this.sinhViens = response.data.sinhViens;
      // }
      // console.log(response);
    },
  },
  created() {
    this.getDanhSach();
  },

  // setup() {
  //   const dssv = ref([])
  //   const getDsPredict = async () =>{
  //     try {
  //       const res = await axios.get("http://jsonplaceholder.typicode.com/todos?_limit=5")
  //       dssv.value = res.data
  //       console.log(res.data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getDsPredict()
  // }
};
</script>

<style>
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

.dt {
  margin-left: 30px;
}
.dt1 {
  margin-left: 23px;
}
/* .w3-quarter {
  text-align: right;
} */
.svpredict {
  background: #f4f4f4;
  padding: 10px;
  margin: 0;
  border-bottom: 1px #ccc dotted;
  text-align: left;
}
.cb{
  text-align: center;
  margin-left: 40%;
}
thead{
   background-color:#90ad6e;
   color: white;
}
tr:nth-child(even) {
  background-color:#D0E5B8;
}
</style>