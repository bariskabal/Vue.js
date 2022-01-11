import { ref,watchEffect } from "vue";
export default function(){
    const searchText = ref("")
  const isTyping = ref(false)

  // watch(searchText,() => {
  //   if(searchText.value.length >0){
  //     isTyping.value = true

  //     setTimeout(()=>{
  //       isTyping.value=false
  //     },1500)
  //   }
  // })

//watch aynı şartlarda çalışmaya devam ediyorsa setTimeout'u çalıştırma ---> onInValidate
  const stop = watchEffect((onInValidate)=>{
    if(searchText.value.length >0){
       isTyping.value = true

      const typing = setTimeout(()=>{
        isTyping.value=false
        //stop() // tekrardan çağırılırsa watch kendini izlemeye devam etmez
      },1500)

      onInValidate(()=> clearTimeout(typing))
    }
  })

  return {searchText,isTyping}
}