<template>
  <!-- <Modal :on-save="onSave" :title="'Modal title'" :content="content"/> -->
  <Modal>
    <template #title>
      <h3>Slot ile gelen title</h3>
    </template>
    <template #content>
      <p class="text-green p">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Necessitatibus, quia. Repudiandae, recusandae nesciunt? Debitis, 
        harum incidunt perferendis fugit tenetur, ipsam delectus l
        audantium vel vitae sequi iusto ad, consequatur itaque nam?</p>
    </template>
    <!-- <template :v-slot:content>
      <p class="text-green p">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Necessitatibus, quia. Repudiandae, recusandae nesciunt? Debitis, 
        harum incidunt perferendis fugit tenetur, ipsam delectus l
        audantium vel vitae sequi iusto ad, consequatur itaque nam?</p>
    </template> -->
    <template #default>
      Bu default olarak gösterilecek
    </template>
  </Modal>
</template>

<script>

import Modal from "@/components/Modal"
export default {
  components:{
    Modal
  },
  data() {
    return {
      content : `<h3>Model title</h3>`
    }
  },
  methods: {
    onSave(){
      alert("Saved!")
    }
  },
  
}
</script>