<template>
  <div>
    <div>
        <span>성명</span><span>{{formInfo !== '내용이 없습니다.' ? formInfo.formName : formInfo}}</span>
    </div>
    <div>
        <span>나이</span><span>{{formInfo !== '내용이 없습니다.' ? formInfo.formAge : formInfo}}</span>
    </div>
    <div>
        <span>핸드폰</span><span>{{formInfo !== '내용이 없습니다.' ? formInfo.formPhone : formInfo}}</span>
    </div>
    <div>
        <span>메일주소</span><span>{{formInfo !== '내용이 없습니다.' ? formInfo.formEmail : formInfo}}</span>
    </div>
    <div>
        <span>문의내용</span><span>{{formInfo !== '내용이 없습니다.' ? formInfo.formQuestion : formInfo}}</span>
    </div>
    <div>
        <span>첨부자료</span>
        <span>{{formInfo.images}}</span>
        <!-- <span><img :src="formInfo.images" alt=""></span> -->
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            formInfo:'내용이 없습니다.'
        }
    },
    mounted(){
        if(this.$route.params.form){
            this.formInfo = this.$route.params.form
        } else {
            this.formInfo = '내용이 없습니다.'
        }        
    }
}
</script>

<style>

</style>