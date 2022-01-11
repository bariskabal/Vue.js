<template>
  <h3>{{ title }}</h3>
  <input type="text" v-model="title" >
  {{ titleLengthMessage }}
  <button @click="toggleIt">Toggle</button>
  <p v-if="show">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assu
    menda reprehenderit harum odit delectus iste praesentium, repudiandae qui, aliqu
    am dignissimos libero voluptatem? Provident ipsa sequi hic soluta, maiores quisquam facere modi!
  </p>
  <hr>
  <button @click="counter++"> {{counter}} {{oddOrEven}}</button>
  <hr>

  <input type="text" v-model="searchText">
  <p v-if="isTyping">Yazıyor...</p>

</template>

<script >
import Counter from "./composables/Counter.js"
import Header from "./composables/Header.js"
import Toggle from "./composables/Toggle.js"
import Search from "./composables/Search.js"
export default {
  setup() {
    const {counter,oddOrEven} = Counter()
    const {title,titleLengthMessage} = Header()
    const {show,toggleIt} = Toggle()
    const {searchText,isTyping} = Search()
    //const title = ref("bu bir setup başlık")
    // const show = ref(true)
    // const toggleIt = () =>{
    //   show.value = !show.value
    // }
    // const titleLengthMessage = computed(()=> title.value.length + " adet karakter")
    // const titleLengthMessage = computed(()=>{
    //   return title.value.length + " adet karakter"
    // })
// ************************************************************************************
    // const counter = ref(0)
    // const oddOrEven = computed(()=> (counter.value % 2 == 0 ? 'Cift' : 'tek'))
    // watch([counter,oddOrEven],(newValue,oldValue)=>{
    //   console.log(oldValue,newValue)
    // },{deep:true})
    // ************************************************************************************

//   const searchText = ref("")
//   const isTyping = ref(false)

//   // watch(searchText,() => {
//   //   if(searchText.value.length >0){
//   //     isTyping.value = true

//   //     setTimeout(()=>{
//   //       isTyping.value=false
//   //     },1500)
//   //   }
//   // })

// //watch aynı şartlarda çalışmaya devam ediyorsa setTimeout'u çalıştırma ---> onInValidate
//   const stop = watchEffect((onInValidate)=>{
//     if(searchText.value.length >0){
//        isTyping.value = true

//       const typing = setTimeout(()=>{
//         isTyping.value=false
//         //stop() // tekrardan çağırılırsa watch kendini izlemeye devam etmez
//       },1500)

//       onInValidate(()=> clearTimeout(typing))
//     }
//   })

    return{
      title,show,toggleIt,titleLengthMessage,counter,oddOrEven,searchText,isTyping
    }
  }
}
</script>