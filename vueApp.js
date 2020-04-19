const url = "https://corona.lmao.ninja/v2/countries?yesterday=false";

const vm = new Vue({
    el: '#app',
    data: {
      results: []
    },
    //Using Mounted function to invoke Axios to take care of the data
    mounted() {
      axios.get(url).then(response => {
        this.results = response.data
      })
    }
  });
  