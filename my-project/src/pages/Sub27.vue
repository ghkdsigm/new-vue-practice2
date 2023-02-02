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
                <input type="radio" name="radioBtn" id="r1" @change="radioChange($event)" value="첫번째 버튼">
                <label for="r1">첫번째</label>
                <input type="radio" name="radioBtn" id="r2" @change="radioChange($event)" value="두번째 버튼">
                <label for="r2">두번째</label>
                <input type="radio" name="radioBtn" id="r3" @change="radioChange($event)" value="세번째 버튼">
                <label for="r3">세번재</label>
              </td>
              <td>
                
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
        arr : []
      }
    },
    methods:{    
      checkArr : function() {
        console.log(this.arr);
      },
      radioChange(event){
        var selected = event.target.value;
        console.log("selected : ", selected);
      }
    },
    watch: {
     
    },
}
</script>