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
        }
    },
};

export default Mixin;