<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <table>
          <thead>
            <tr>
              <th>checkbox1</th>
              <th>checkbox2</th>
              <th>checkbox3</th>
              <th>checkbox4</th>
              <th>checkbox5</th>
              <th>radio1</th>
              <th>radio2</th>
              <th>radio3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" id="jack" value="Jack" v-model="checkedNames"> <label for="jack">Jack</label> 
                <input type="checkbox" id="john" value="John" v-model="checkedNames"> <label for="john">John</label> 
                <input type="checkbox" id="mike" value="Mike" v-model="checkedNames"> <label for="mike">Mike</label> 
                <br> 
                <span>체크한 이름: {{ checkedNames }}</span> 
              </td>   
              <td>
                <input type="checkbox" v-model="arr" value="mine">mine
                <input type="checkbox" v-model="arr" value="it">it
                <input type="checkbox" v-model="arr" value="record">record
                <button @click='checkArr()'>check</button>
              </td>              
              <td>
                <form @submit.prevent="handleSubmit">
                    <div class="form-group form-check" v-for="item in Items" v-bind:key="item.id">
                        <label class="form-check-label" :for="item.id">{{item.name}}</label>
                        <input type="checkbox"  v-model="user.fruitCollection" :id="item.name" :value="item.name">
                    </div>
                    <!-- print result -->
                    <div class="form-group">
                            {{user.fruitCollection}}
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary">Submit</button>
                    </div>
                </form>
              </td>
              <td>
                <div>
                  <table>
                      <tr>
                          <th>Name</th>
                          <th>Select All<input type="checkbox" @click="selectAll" v-model="allSelected"></th>
                      </tr>
                      <tr v-for="(user, i) in users" :key="i">
                          <td>{{ user.name }}</td>
                          <td><input type="checkbox" v-model="userIds" @click="select" :value="user.id"></td>
                      </tr>
                  </table>
                </div>
                <span>Selected Ids: {{ userIds }}</span>
              </td>              
              <td>
                <div id="example-3">
                  수신동의 :
                  <input type="checkbox" value="all" v-model="totalSelected" />
                  <label for="all">전체</label>
                  <template v-for="(item, index) in checkList">
                    <input
                      type="checkbox"
                      :id="item"
                      :value="item"
                      v-model="selectList"
                      :key="index"
                    />
                    <label :for="item" :key="index + '1'"> {{ item }}</label>
                  </template>
                  <br />
                  <span>check: {{ selectList }}</span>
                </div>
              </td>
              <td>
                <input type="radio" name="radioBtn" id="r1" @change="radioChange($event)" value="첫번째 버튼">
                <label for="r1">첫번째</label>
                <input type="radio" name="radioBtn" id="r2" @change="radioChange($event)" value="두번째 버튼">
                <label for="r2">두번째</label>
                <input type="radio" name="radioBtn" id="r3" @change="radioChange($event)" value="세번째 버튼">
                <label for="r3">세번재</label>
              </td>
              <td>
                <div class="text-center">
                  <div v-for="(item, index) in radioList" :key="index">
                    <input type="radio" :id="item.key" v-model="picked" :value="item" />
                    <label :for="item.key" class="text">{{ item.value }}</label>
                  </div>
                  <br />
                  선택한 key : {{ picked.key }}
                  <br />
                  선택한 value : {{ picked.value }}
                </div>
              </td>
              <td>
                <v-radio-group v-model="searchType" row>
                  <v-radio label="년도 통계" value="YEAR"></v-radio>
                  <v-radio label="월별 통계" value="MONTH"></v-radio>
                  <v-radio label="일별 통계" value="DAY"></v-radio>
                  <v-radio label="기간별 통계" value="DAY-RANGE"></v-radio>
                </v-radio-group>
                <div v-show="searchType === 'YEAR'">{{this.searchType}}</div>
                <div v-show="searchType === 'MONTH'">{{this.searchType}}</div>
                <div v-show="searchType === 'DAY'">{{this.searchType}}</div>
                <div v-show="searchType === 'DAY-RANGE'">{{this.searchType}}</div>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data(){
      return{
        checkedNames: [],
        arr : [],
        Items: [
            {
                name: 'Apple'
            }, 
            {
                name: 'Orange'
            }, 
            {
                name: 'Mengo'
            }, 
            {
                name: 'Cherry'
            }
        ],            
        user: {
            fruitCollection: []
        },
        users: [ 
            { "id": "Shad", "name": "Shad" }, 
            { "id": "Duane", "name": "Duane" }, 
            { "id": "Myah", "name": "Myah" }, 
            { "id": "Kamron", "name": "Kamron" }, 
            { "id": "Brendon", "name": "Brendon" }
        ],
        selected: [],
        allSelected: false,
        userIds: [],
        checkList: ["e-mail", "SMS", "test1"],
        selectList: [],
        radioList: [
          {
            key: "00",
            value: "10세미만",
          },
          {
            key: "01",
            value: "10~19세",
          },
          {
            key: "02",
            value: "20~29세",
          },
          {
            key: "03",
            value: "30~39세",
          },
          {
            key: "04",
            value: "40~49세",
          },
          {
            key: "05",
            value: "50~59세",
          },
          {
            key: "06",
            value: "60세이상",
          },
        ],
        picked: "",
        searchType: 'DAY',
      };
    },
    methods:{    
      checkArr : function() {
        console.log(this.arr);
      },
      radioChange(event){
        var selected = event.target.value;
        console.log("selected : ", selected);
      },
      handleSubmit() {
        alert(JSON.stringify(this.user));
      },
      selectAll: function() {
          this.userIds = [];

          if (!this.totalSelected) {
              for (let i =0; i < this.users.length; i++) {
                  this.userIds.push(this.users[i].id.toString());
              }
          }
      },
      select: function() {
          this.totalSelected = false;
      }
    },
    computed: {
      // eslint-disable-next-line vue/no-dupe-keys
      totalSelected: {
        //getter
        get: function() {
          return this.checkList.length === this.selectList.length;
        },
        //setter
        set: function(e) {
          this.selectList = e ? this.checkList : [];
        },
      },
    },
    mounted() {
      // radio data 초기 set
      this.picked = this.radioList[0];
    },
}
</script>