import { VMain } from "vuetify/lib";

//Mixin.js
const Mixin = {
    data() {
        return {
            message: '클릭해주세요',
            actionBT: false
        };
    },
    methods: {
        ActBt() {
            this.actionBT = !this.actionBT
            if(this.actionBT == true) {
                this.message = '클릭해주세요'
            } else {
                this.message = '클릭되었습니다'
            }
        },
        toggleAction(){
            this.changeData = !this.changeData
        },
        monitorCount(){
            if(this.count > 7){
                return console.log('7보다 크다')
            } else if(this.count > 5){
                return console.log('5보다 크다')
            } else {
                return console.log('5보다 작다')
            }
        }
    },
    computed:{
        plus(){
            let vm = this
            return vm.count > 0 ? this.monitorCount() : null
        },

    },
    mounted(){
        const rountRes = setInterval(() => {
            this.count++
        }, 1000);
        setTimeout(()=>{
            clearInterval(rountRes)
        }, 10000)
    }
};

export default Mixin;