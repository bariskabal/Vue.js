import {createStore} from "vuex"

const store = createStore({
    state : {
        user : {
            name : "Baris",
            lname: "Kabal",
            age : 23,
            address : {},
            pass : 12345,
            tc : 213123123
        },
        theme: "dark",
        fullName : "Barış Kabal",
        permissions: [1,2,3,4,5],
        itemList:[
            {id:1,title:"Masa",type:"Mobilya"},
            {id:2,title:"Sandalye",type:"Mobilya"},
            {id:3,title:"TV",type:"Elektronik"},
            {id:4,title:"Monitör",type:"Elektronik"}
        ]
    },
    mutations:{ // senkron
        newItem(state,payload){
            state.itemList.push(payload);
        }
    },
    actions:{ //asenkron, context içindeki commit => {commit}
        newItem({commit}, item){
            setTimeout(()=>{
                commit("newItem",item)
            },1000)
        }
    },
    getters:{
        _woodItems : state => state.itemList.filter(i => i.type === "Mobilya"),
        _activeUser(state){
            const user = {
                ...state.user
            }
            delete user.pass
            return user
        }
    }
})

export default store