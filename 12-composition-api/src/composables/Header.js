import {ref, computed} from 'vue'
export default function(){
    const title = ref("bu bir setup başlık")
    const titleLengthMessage = computed(()=> title.value.length + " adet karakter")

    return{title,titleLengthMessage}
}