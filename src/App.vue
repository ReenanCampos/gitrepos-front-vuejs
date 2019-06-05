<template>
  <div id="app">
    <h1>Git Repositories Info </h1>
    
    <div>
      <div class="person search">
        <!-- object value -->
          <model-select :options="options"
                                  v-model="item"
                                  placeholder="select item">
          </model-select>
      </div>
    </div>

    <transition-group name="fade" tag="div" class="row">
      <div v-for="(repo, $key) in list" :key="$key" class="col-md-6 col-lg-4">
        <div class="person">
          <div class="person__header">
            <img v-bind:src="repo.profileImageURL" class="rounded img-thumbnail" height="126px" width="126px">
            <br>
            <a target="_blank" class="person__name" v-bind:href="repo.urlrepositoryPath" >{{repo.fullRepositoryName}}</a>
          </div>
          <div class="person__email">
            <p><b>Current Stars: </b>{{repo.currentStargazers}}</p>
            <p><b>Current Forks: </b>{{repo.currentForks}}</p>
          </div>
          <br>
        </div>
      </div>
    </transition-group>

    <infinite-loading @infinite="infiniteHandler"></infinite-loading>

  </div>
 
</template>

<script>
import axios from 'axios';
import moment from 'moment';
import InfiniteLoading from 'vue-infinite-loading';
import { ModelSelect } from 'vue-search-select'
import availableLanguages062019 from '../json/availableLanguages062019.json'

const api = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';
const api2 = 'https://randomuser.me/api/';
const api3 = 'https://api.github.com/search/repositories';
const api4 = 'https://topi-renancampos.herokuapp.com/';
const api5 = 'localhost:8081/api/GitRepository/findByFilter';


export default {
  name: 'app',
  data () {
    return {
      persons: [],
      msg: 'Teste TOPi',

      page: 1,
      list: [],
      language: 'Java',

      people: [],
      quantity: 6,
      title:"RandomUser.me / Vue.js / Axios",

      options: availableLanguages062019,
      item: {
        value: 'Java',
        text: 'Java'
      },

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
      reset () {
        this.item = {}
      },
      selectFromParentComponent1 () {
        // select option from parent component
        this.item = this.options[0]
        console.log("selecionado:" + this.item.value);
      },
    /*getInitialUsers () {
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
    },*/

    infiniteHandler($state) {
      console.log("bora");
      axios.get("https://topi-renancampos.herokuapp.com/api/GitRepository/findByFilter?" + "language=" + this.language + "&page=" + this.page).then(({ data }) => {
        console.log("Puxou! -> ", data);
        console.log("Pagina! -> ", this.page);
        this.page += 1;
        this.list.push(...data.items);
        $state.loaded();
      })
    },
    
    resetRepositories(){
      this.page = 1;
      this.list = [];
    }

  },
  /*beforeMount() {
    this.getInitialUsers();
    console.log(this.persons);
  },
  mounted() {
  this.scroll(this.person);
  },*/
  created: function () {
    this.getPeople();
  },
  components: {
    ModelSelect
  },
  watch: {
    item: function(item) {

      item.value = item.value.replace("\\s+","-");

      console.log("value: " + item.value);
      this.language = item.value;
      this.page = 1;
      this.list = [];
      axios.get("https://topi-renancampos.herokuapp.com/api/GitRepository/findByFilter?" + "language=" + this.item.value + "&page=" + this.page).then(({ data }) => {
        this.page += 1;
        this.list.push(...data.items);
        $state.loaded();
      })

    }
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

    word-break: break-all;
  }

  .search{
    max-width: 93%;
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
