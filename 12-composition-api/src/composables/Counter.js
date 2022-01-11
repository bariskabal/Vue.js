import {ref, computed,watch} from 'vue'
export default function(){

    const counter = ref(0)
    const oddOrEven = computed(()=> (counter.value % 2 == 0 ? 'Cift' : 'tek'))

    watch([counter,oddOrEven],(newValue,oldValue)=>{
      console.log(oldValue,newValue)
    },{deep:true})
    
    return {counter, oddOrEven}
}