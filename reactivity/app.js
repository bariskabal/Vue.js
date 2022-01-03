const app = Vue.createApp({
    data() {
      return {
        counter: 0,
        counter2: 0,
        itemList: [],
      };
    },
    methods: {
      addItem(){
        this.itemList.push(new Date().getTime());
      }
    },
    computed:{
      //değişken gibi çalışmasını istediğimiz metodlar
      //geriye bir değer return etmek zorunda
      // İçerisinde vue instance' i ile bağlantı kurabildiği yapıda değişiklik varsa metod otomatik çalışır
      getResult() {
        console.log("Counter1 Çalıştı..");
        return this.counter > 0
          ? "Pozitif"
          : this.counter < 0
          ? "Negatif"
          : "Sıfır";
      },
      getResult2() {
        console.log("Counter2 Çalıştı..");
        return this.counter2 > 0
          ? "Pozitif"
          : this.counter2 < 0
          ? "Negatif"
          : "Sıfır";
      },
    },
    watch:{
      //Vue instancedeki yapıyı anlık izleyip ona göre çalışan yapı.
      //Veri değiştikçe çalışır
      //Computed dan önce calısır
      counter(newValue,oldValue){ // counter'ı izlemek istiyoruz
        console.log("Counter watch calıstı", newValue,oldValue)
      },
      getResult(newValue, oldValue) {
        console.log(`Watcher : Result ${oldValue} => ${newValue}`);
      },
      itemList:{
        deep:true,
        handler(itemList){
          console.log(`itemList:>>`, itemList)
        },
      },
    }
  });
  
  app.mount("#app");