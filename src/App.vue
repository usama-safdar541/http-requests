<template>
  <div class="app">
    <h1>HTTP</h1>

    <div>
      <label>Username</label>
      <input v-model="user.username" type="text">
    </div>
    <div>
      <label>Mail</label>
      <input v-model="user.email" type="text">
    </div>
    <button @click="submit" class="btn">Submit</button>
    <hr>
    <input type=" text" v-model="node">
    <button class="btn1" @click="fetchData">Get Data</button>
    <ul>
      <li v-for="u in users">The Name is : {{ u.username }}
        <hr> And the Email is : {{ u.email }}
      </li>
    </ul>
  </div>
</template>

<script>
// import { response } from 'express';

export default {
  data() {
    return {
      user: {
        username: '',
        email: '',
      }, users: [],
      resource: {},
      node: 'data'
    };
  },
  methods: {
    submit() {
      // console.log(this.user)
      //posting data to database code
      // this.$http.post('data.json', this.user)
      //   .then(response => {
      //     console.log(response)
      //   }, error => {
      //     console.log(error);
      //   });

      // this.resource.save({},this.user);
      this.resource.saveAlternative(this.user);
    },
    //fetching data from database code
    fetchData() {
      //with get method we dont use an extra argument as used in post method
      // 
      // this.$http.get('data.json')
      //   .then(response => {
      //     //helper method response.json it converts and extracts body of response into javascript object
      //     //response json also returns a promise 
      //     // const data = response.json() ;
      //     return response.json();
      //     //  console.log(data);
      //   }).then(data => {
      //     const resultArray = [];
      //     for (let key in data) {
      //       resultArray.push(data[key]);
      //       this.users = resultArray;
      //     }
      //   });

      this.resource.getData({ node: this.node })

    }, //lifecycle hook (created)

  },
  created() {
    const customActions = {
      saveAlternative: { method: 'POST', ulr: 'alternative.json' },
      getData: { method: 'GET' }
    };
    this.resource = this.$resource('{node}.json', {}, customActions);
  }
}
</script>