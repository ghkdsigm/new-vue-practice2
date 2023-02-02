<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <table>
          <thead>
            <tr>
              <th>Select1</th>
              <th>Select2</th>
              <th>Select3</th>
              <th>Select4</th>
              <th>Select5</th>
              <th>Select6</th>
              <th>Select7 - watch활용</th>
              <th>Select7 - @change활용</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <select v-model="selected" multiple>
                    <option :value="{name: 'LEE'}">LEE</option>
                    <option :value="{name: 'Byung'}">Byung</option>
                    <option :value="{name: 'Jun'}">Jun</option>
                </select>
                {{selected}}
              </td>
              <td>
                속성을 안 주고 사용했을 때:
                <v-select
                  v-model="user_auth"
                  label="권한*"
                  :items="authList"
                  item-text="name"
                  item-value="value"
                  :rules="user_auth_rule"
                  >
                </v-select>
              </td>
              <td>
                속성을 주고 사용했을 때:
                <v-select
                  v-model="user_auth"
                  label="권한*"
                  :items="authList"
                  item-text="name"
                  item-value="value"
                  :rules="user_auth_rule"
                  return-object
                  >
                </v-select>
              </td>            
              <td>
                <select v-model="sub" @change="msgBox" style="width:100px; background:#ccc;">
                  <option v-for="(board, i) in list" :key="i">{{board.sub}}</option>
                </select>
              </td>
              <td>
                <v-select v-model="cont" :items="list" item-text="sub" item-value="cont" v-on:change="conBox"></v-select>
              </td>
              <td>
                <select @change="selectSel($event)">
                  <option value="펩시">펩시</option>
                  <option value="코카">코카콜라</option>
                  <option value="815">815콜라</option>
                </select>
              </td>
              <td>
                watch 활용
                <span>
                  <select v-model="perPage">
                    <option v-for="perPage in perPageList" :key="perPage.id" :value="perPage.value">{{ perPage.value }}/page</option>
                  </select>
                </span>
              </td>
              <td>
                @change 활용
                <span>
                  {{perPage2}}
                  <select v-model="perPage2" @change="change()">
                    <option v-for="perPage in perPageList2" :key="perPage.id" :value="perPage.value">{{ perPage.value }}/page</option>
                  </select>
                </span>
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
            selected: [],
            authList: [
              { name: '관리자', value: 'A'},
              { name: '일반 사용자', value: 'M'}
            ],
            user_auth: '',
            user_auth_rule: [
              v => !!v || '권한은 필수 선택 사항입니다.'
            ],
            sub: 'default',
            cont: 'default',
            list: [
              {sub: 'test1', cont: 'testCont1'},
              {sub: 'test2', cont: 'testCont2'},              
              {sub: 'test3', cont: 'testCont3'},
              {sub: 'test4', cont: 'testCont4'},
              {sub: 'test5', cont: 'testCont5'},
              {sub: 'test6', cont: 'testCont6'},
              {sub: 'test7', cont: 'testCont7'},
            ],
            perPageList: [
              {
                id:1,
                value: 5,
              },
              {
                id:2,
                value: 10,
              },
              {
                id:3,
                value: 15,
              }
            ],
            perPage: 10,    
            perPageList2: [
              {
                id:1,
                value: 5,
              },
              {
                id:2,
                value: 10,
              },
              {
                id:3,
                value: 15,
              }
            ],
            perPage2: 10,   
        }
    },
    methods:{
      msgBox: function(){
        console.log(this.sub);
        //console.log(this.cont);
      },
      conBox: function(){
        //console.log(this.sub);
        console.log(this.cont)
      },
      selectSel(event){
        console.log(event.target.value); //value값 출력
      },
      change() {
        console.log(this.perPage2) // 5, 10, 15 가 콘솔에 찍힌다.
      }
    },
    watch: {
      perPage() {
        console.log(this.perPage) // 5, 10, 15 가 콘솔에 찍힌다.
      }
    },
}
</script>