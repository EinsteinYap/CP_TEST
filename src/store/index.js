import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    articles:[]
  },
  mutations:{
    Add_Articles(state,arts){
      state.articles=arts
    }
  },
 actions:{
   addArticle:({commit})=>{
     
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res=>{
        const data= res.data
        const users = []
        const TenArticles =[]
        for (let key in data){
            const user = data[key]
            user.id =key
            users.push(user)
                
                
           
        }
      
        for (let i=0;i<=10;i++){ 
            TenArticles.push(users[i].title)
            }
            return TenArticles
     
          }).then(res2=>{
            commit('Add_Articles',res2)
          }) }
        
        }
        
        
        })
    
    