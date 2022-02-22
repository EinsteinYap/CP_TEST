<template>
 <div class="container">
      <Structure />
    <h1>VP_Testing</h1>
    <!-- Buttons for show hide articles -->
<button v-if="this.shown==false" @click="visible()">Show Ariticles </button>
<button v-if="this.shown==true" @click="invisible()">Hide Ariticles </button>

    <!-- trigger loading -->
   

  <div v-if="this.isLoading==true" class="d-flex justify-content-center">
  <div class="spinner-border text-success" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>

    <ul v-show="articles" class="row " >
        <li v-for="article in articles" v-bind:key="article.id" class="animate__animated animate__backInDown">
            {{ article }}
        </li>

    </ul>
    
  </div>
</template>

<script>


import Structure from '@/components/Structure.vue';

export default {
//Vue Life Cycle
   mounted(){
      
    },
 destroyed(){

 },    
   data(){
     return{ 
       shown: false,
       articles:[],
       isLoading:false
       }
},
 
    methods:{
      visible(){
        
         this.$store.dispatch('addArticle').then((res)=>
        this.isLoading=true,
         this.articles=this.$store.state.articles,
         this.shown=true,
        
         ).then(()=>{
           
          if(this.articles.length>5){
           
           setTimeout(()=>{this.isLoading=false},2000)
         }
       
        
         }
         )
        
          
   
      
      },
      invisible(){
        this.articles=[]
        this.shown=false
      }
    },
computed:{  
    // articles(){
    //     return this.$store.state.articles;
    // }
     },
     name: 'CPTestView',
  components: {
    Structure
  }
 
  
}
</script>


<style scoped lang=scss>
li{
    list-style: none;
    padding: 0.5rem;
    margin:0.2rem;
    border: 0.1rem solid red;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}




</style>