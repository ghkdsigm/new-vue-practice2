<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="offset">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(p,i) in displayedPosts" :key="i">
            <td>{{p.name}}</td>
            <td>{{p.phone}}</td>
            <td>{{p.address}}</td>
          </tr>
        </tbody>
      </table>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <button type="button" class="page-link" v-if="page != 1" @click="page--"> Previous </button>
              <button type="button" class="page-link done" v-else> Previous </button>
            </li>
            <li class="page-item">
              <button type="button" class="page-link" v-for="(pageNumber, i) in pages.slice(page-1, page+5)" :key="i" @click="page = pageNumber"> {{pageNumber}} </button>
            </li>
            <li class="page-item">
              <button type="button" @click="page++" v-if="page < pages.length" class="page-link"> Next </button>
              <button type="button" v-else class="page-link done"> Next </button>
            </li>
          </ul>
        </nav>	
      </div>
    </div>  
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
		return {
      pageArray: [],
			posts : [],
			page: 1,
			perPage: 9,
			pages: [],	
      allpages:0,
      clicked:''	
		}
	},
	methods:{
		getPosts () {	
      axios.get('http://sample.bmaster.kro.kr/contacts')
      .then(response => {
        this.pageArray.push(response.data.contacts);
        this.allpages = this.pageArray[0].length;
        this.inputlist()
      })
      .catch(err => {
        console.log(err);
      });      
		},
    inputlist(){
      //let data = [];
      this.pageArray[0].map((v)=>{
        this.posts.push({ name: v.name,
                          phone: v.tel, 
                          address: v.address
                        });
      })  
      this.setPages ()
    },
		setPages () {
			let numberOfPages = Math.ceil(this.posts.length / this.perPage);
			for (let index = 1; index <= numberOfPages; index++) {
				this.pages.push(index);
			}
		},
		paginate (posts) {
			let page = this.page;
			let perPage = this.perPage;
			let from = (page * perPage) - perPage;
			let to = (page * perPage);     
			return  posts.slice(from, to);
		},    
    changepage(){
      console.log(this.page)
    }
	},
  created() {
    this.getPosts ()
  },
	computed: {
		displayedPosts () {       
      // if(this.page === ){

      // }
			return this.paginate(this.posts);
		}
	},
	// watch: {
	// 	posts () {
	// 		this.setPages();
	// 	}
	// },
  watch:{
    changed(){
      this.changepage()
    }
  }
	// created(){
	// 	this.getPosts();    
	// },
	// filters: {
	// 	trimWords(value){
	// 		return value.split(" ").splice(0,20).join(" ") + '...';
	// 	}
	// }
}
</script>

<style>
.pagination {display: flex;    justify-content: center;}
button.page-link {
	display: inline-block;
}
button.page-link.on {
  color:red;
}
button.page-link.done {
  color:#adadad;
}
button.page-link {
    font-size: 20px;
    color: #29b3ed;
    font-weight: 500;
}
.offset{
  width: 500px !important;
  margin: 20px auto;  
}
</style>