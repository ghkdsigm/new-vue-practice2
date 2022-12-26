<template>
  <div>
    <div class="d-flex justify-center">
        <ul>
            <li v-for="(item, index) in data" :key="index" @click="selectGame(item)">
                {{ item.gameName }}
            </li>
        </ul>
        <div class="ml-7 aling-left">
            <div>
                <b v-if="tableData.length > 0">{{tableData[0].gameName}}</b> 서버 리스트
                <ul>
                    <li>시세오차조정 값은 익일 시세부터 반영됩니다.</li>
                    <li>서버명을 클릭하면 현재 지정된 값이 시세 게임 등록 / 서버 수정에 자동 셋팅됩니다.</li>
                </ul>
            </div>
            <table>
                <colgroup>
                    <col width="200px">
                    <col width="100px">
                    <col width="100px">
                    <col width="100px">
                    <col width="100px">
                </colgroup>
                <thead>
                    <tr>
                        <th>가격</th>
                        <th>최소값</th>
                        <th>최대값</th>
                        <th>서버명</th>
                        <th>운영여부</th>
                    </tr>
                </thead>
                <tbody v-if="!tableBoolean">
                    <tr>
                        <td colspan="5">게임을 클릭해주세요</td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr v-for="(item, index) in tableDetail" :key="index" @click="selectDetailGame(item)" class="detailTd" @click.stop="drawer = !drawer">
                        <td>{{item.basePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원'}}</td>
                        <td>{{item.minPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원'}}</td>
                        <td>{{item.maxPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원'}}</td>
                        <td>{{item.serverName}}</td>
                        <td>{{item.isRunning}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!--drawer-->   
    <v-navigation-drawer v-model="drawer" class="mr-5" width="320px" height="95%" style="box-shadow: -7px 0px 15px 0px #eee" :temporary="!drawer" hide-overlay absolute right>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content v-if="tableData.length > 0">
          <v-list-item-title class="d-flex" style="justify-content:space-between; cursor:pointer;">{{tableData[0].gameName}} <span @click.stop="drawer = !drawer">X</span></v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in this.tableData"
          :key="item.title"
          link
        >
          <!-- <v-list-item-icon>
            <v-icon v-if="tableData.length > 0">{{item.gameName}}</v-icon>
          </v-list-item-icon> -->

          <v-list-item-content>
            <v-list-item-title>{{ item.gameSeq }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import game01 from '@/api/game01.json'

export default {
    props:{
        data:Array
    },
    data(){
        return {
            tableData:[],
            tableDetail:[],
            tableDetailData:[],
            tableBoolean:false,
            drawer: false,
        }
    },
    methods:{
        selectGame(item){                
            this.tableDetail = []
            game01.forEach((v)=>{
                if(v.serverSeq === item.gameSeq) {     
                    this.tableDetail.push(v)    
                }
            })
            this.drawer = false    
            this.tableData = []
            this.tableData.push(item)
            console.log(this.tableDetail)
            this.tableBoolean = true     
        },
        selectDetailGame(item){
            if(item !== ''){
                this.drawer = false    
            } else {
                this.drawer = true
            }
            this.tableDetailData = []
            this.tableDetailData.push(item)
        }
    }
}
</script>

<style>
ul {
    max-height: 300px;
    overflow:auto;
    padding-left:0 !important;
}
li {
    list-style:none;
    cursor: pointer;
}
b {
    font-size:24px;
    font-weight:800;
}
table {
    width:600px;
    margin-top: 25px;
}
table td {
    text-align: center;
}
table tr.detailTd:hover {
    cursor: pointer;
    background:#ccc;
}
</style>