<template>
  <div id="app">
    <h1>Git Repositories Info </h1>
    

<!--
<img :src="'https://avatars3.githubusercontent.com/u/36260787?v=4'" height="72" width="72">
Full Name Repo: CyC2018/CS-Notes
Start: 64689
Forks: 19816 

<img :src="'https://avatars1.githubusercontent.com/u/582346?v=4'" height="72" width="72">
Full Name Repo: iluwatar/java-design-patterns
Start: 48081
Forks: 15579 

<img :src="'https://avatars0.githubusercontent.com/u/29880145?v=4'" height="72" width="72">
Full Name Repo: Snailclimb/JavaGuide
Start: 42293
Forks: 13365 -->



<!--
    <div v-for="(item, $index) in list" :key="$index">
      Photo: {{item.avatar_url}} 
      Full Name Repo: {{item.full_name}} 
      
      Start: {{item.stargazers_count}} 
      Forks: {{item.forks_count}}

      Description: {{item.description}}
      URL: {{item.html_url}}

      <br>
    </div>

    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
 -->


 <br><br><br><br><br>

<div id="app">
  <div class="container">

    <transition-group name="fade" tag="div" class="row">
      <div v-for="(repo, key) in dadosTeste" :key="key" class="col-md-6 col-lg-4">
        <div class="person">
          <div class="person__header">
            <img v-bind:src="repo.avatar_url" v-bind:alt="person" class="rounded img-thumbnail" height="126px" width="126px">
            <br>
            <a class="person__name" v-bind:href="repo.html_url" >{{repo.full_name}}</a>
          </div>
          <div class="person__email">
            <p><b>Current Stars: </b>{{repo.stargazers_count}}</p>
            <p><b>Current Forks: </b>{{repo.forks_count}}</p>
          </div>
          <br>
        </div>
      </div>
    </transition-group>

  </div>
</div>

  </div>
 
</template>

<script>
import axios from 'axios';
import moment from 'moment';
import InfiniteLoading from 'vue-infinite-loading';

const api = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';
const api2 = 'https://randomuser.me/api/';
const api3 = 'https://api.github.com/search/repositories?q=language:Java&sort=stars&page=1';

export default {
  name: 'app',
  data () {
    return {
      persons: [],
      msg: 'Teste TOPi',

      page: 1,
      list: [],

      people: [],
      quantity: 6,
      title:"RandomUser.me / Vue.js / Axios",

      dadosTeste:
      [
        {
          "avatar_url": "https://avatars3.githubusercontent.com/u/36260787?v=4",
          "full_name": "CyC2018/CS-Notes",
          "stargazers_count": 64689,
          "forks_count": 19816,
          "html_url":"https://github.com/CyC2018/CS-Notes"
        },
        {
          "avatar_url": "https://avatars1.githubusercontent.com/u/582346?v=4",
          "full_name": "iluwatar/java-design-patterns",
          "stargazers_count": 48081,
          "forks_count": 15579,
          "html_url":"https://github.com/iluwatar/java-design-patterns"
        },
        {
          "avatar_url" : "https://avatars0.githubusercontent.com/u/29880145?v=4",
          "full_name" : "Snailclimb/JavaGuide",
          "stargazers_count": 42293,
          "forks_count": 13365,
          "html_url":"https://github.com/Snailclimb/JavaGuide"
        }
      ],

    }
  },
  methods: {
    getInitialUsers () {
      for (var i = 0; i < 5; i++) {
        console.log(i);
        axios.get(`https://randomuser.me/api/`)
          .then(response => {
            this.persons.push(response.data.results[0]);
          });
      }
    },
    scroll (person) {
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          axios.get(`https://randomuser.me/api/`)
            .then(response => {
              this.persons.push(response.data.results[0]);
            });
        }
      };
    },

    infiniteHandler($state) {
      axios.get(api3, {
        params: {
          page: this.page,
        },
      }).then(({ data }) => {
        if (data.incomplete_results) {
          this.page += 1;
          this.list.push(...data.items);
          console.log("Puxou! -> ", data);
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    },

    getPeople: function () { 
        // ** axios requires a promise polyfill for ie11 **//
        axios.get(api2 + "?results=" + this.quantity)
          .then((rsp)=>this.people = rsp.data.results)

      //**normal XMLHttpRequest **//
        // var url = endpoint + this.quantity;
        // var request = new XMLHttpRequest();
        // request.open("GET", url);
        // request.responseType = 'json';
        // request.send();
        // request.onload = ()=> this.people = request.response.results;
    }

  },
  beforeMount() {
    this.getInitialUsers();
    console.log(this.persons);
  },
  mounted() {
  this.scroll(this.person);
  },
  created: function () {
    this.getPeople();
  }
}
</script>

<style lang="scss">
  body {
    background: radial-gradient(ellipse at center, #b5bdc8 0%, #828c95 36%, #28343b 100% );
    min-height:600px;
    
    h1{
      color: #FFF;
      text-align: center;
      margin-top: 50px
    }

    a{
      color: rgb(95, 95, 168);
    
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .pen-title {
    margin: 36px 0;
    color: #fff;
    padding-bottom: 36px;
    border-bottom: 1px solid #999;
    
    .title{
      text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7);
    }
  }

  .person {
    background: radial-gradient(ellipse at center, #ffffff 0%, #e5e5e5 100%);
    border: 1px solid #666;
    border-radius: 4px;
    margin-bottom: 30px;
    margin-left: 20%;
    margin-right: 20%;
    text-align: center;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);

    &__header {
      font-size: 24px;
      text-transform: capitalize;
      margin: 15px 0 30px;
    }

  }
</style>
