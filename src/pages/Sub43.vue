<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="offset">
      <Meta/>
    </div>  
  </div>
</template>

<script>
import Meta from '@/components/metatag/metatag'
export default {
  metaInfo: {
      // title 입력하기
      title: '뷰메타',
      // link tag 입력하기
      link: [{rel: "canonical", href: 'www.site.com'}],
      // meta tag 입력하기
      meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { vmid: "description", name: "description", content: 'description' }
      //vmid ↑ 메타 태그를 고유하게 만들어준다.
      ]
  },
  components:{
    Meta
  },
  data () {
		return {
     
		}
	},
	methods:{
		
    },
	
	}

</script>

<style>
</style>