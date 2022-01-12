import {ref,onMounted} from "vue"
export default function(){
    const title = ref("Başlık")
    const counter = ref(0)
    const alertMe = (info) =>{
      console.log(info)
    }
    const inc = () =>{
      counter.value++
    }
    onMounted(()=>{
        console.log("mounted")
    })
    return {title,counter,inc,alertMe}
}