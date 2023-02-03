<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="row">
          <div class="col-12 pb-25 pt-5">
              <button type="button" class="btn btn-outline mb-5" style="float: right;" @click="excelDown()">
                엑셀 다운로드
                <i class="fa fa-download" />
              </button>
          </div>
      </div>
      <div class="row" style="height: 70%;">
        <div class="col-12" style="height: 100%;">
          <div class="table-responsive" style="height: 100%;">
            <table class="table mb-0 overflow-y-auto" style="text-align: center;">
              <thead style="background-color: #8793ac;">
                <tr>
                  <th class="font-weight-bolder" scope="col">
                    이름
                  </th>
                  <th class="font-weight-bolder" scope="col">
                    나이
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(person, i) in people" :key="i">
                  <td>
                    {{ person.name }}
                  </td>
                  <td>
                    {{ person.age }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
//vuejs
import XLSX from 'xlsx';	//엑셀 다운로드를 위해서 import 필요

export default {
  data(){
    return {
      excel: [],
      people: [
        { name: '유재석', job: '개그맨', age: '42' },
        { name: '박명수', job: '개그맨', age: '44' },
        { name: '하하', job: '가수', age: '34' },
        { name: '정준하', job: '개그맨', age: '43' },
        { name: '노홍철', job: '길거리', age: '34' },
        { name: '정형돈', job: '개그맨', age: '36' },
        { name: '길', job: '가수', age: '36' },
      ],
    };
  },
  methods: {
    excelDown() {
      for (const excel of this.people) {
        const excelLogs = {
          name: '',
          job: '',
          age: '',
        };
        excelLogs.name = excel.name;
        excelLogs.job = excel.job;
        excelLogs.age = excel.age;

        this.excel.push(excelLogs);
      }

      // 엑셀 워크시트로 json 내보내기, 배열만 가능
      const dataWS = XLSX.utils.json_to_sheet(this.excel);
      // 엑셀의 workbook(엑셀파일에 지정된 이름)을 만든다
      const wb = XLSX.utils.book_new();
      // workbook에 워크시트 추가, 시트명은 'peopleData'
      XLSX.utils.book_append_sheet(wb, dataWS, 'peopleData');
      // 엑셀 파일을 내보낸다. 엑셀 파일 저장명은 'people.xlsx'
      XLSX.writeFile(wb, 'infinitychallenge.xlsx');
    },
  },
};
</script>

<style>

</style>