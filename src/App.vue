<template>

  <div id="app">
    <h1>Git Repositories Info </h1>
    <div>
      <div class="person search">
          <model-select :options="options" v-model="item" placeholder="Select a Language"> </model-select>
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
            <p><b>Stars: </b>{{repo.currentStargazers | formatNumber}}</p>
            <p><b>Forks: </b>{{repo.currentForks | formatNumber}}</p>
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

const api = "https://topi-renancampos.herokuapp.com/api/GitRepository/findByFilter?";

export default {

  name: 'app',

  data () {
    return {
      page: 1,
      list: [],
      language: 'Java',

      options: availableLanguages062019,
      item: {
        value: 'Java',
        text: 'Java'
      }
    }
  },

  methods: {
    reset () {
      this.item = {}
    },
    selectFromParentComponent1 () {
      this.item = this.options[0]
    },

    infiniteHandler($state) {
      axios.get(api + "language=" + this.language + "&page=" + this.page).then(({ data }) => {
        this.page += 1;
        this.list.push(...data.items);
        $state.loaded();
      })
    }

  },

  components: {
    ModelSelect
  },

  watch: {
    item: function(item) {
      
      // Replacing blank spaces " " to char "-"
      item.value = item.value.replace("\\s+","-");
      this.language = item.value;
      this.page = 1;
      this.list = [];
      
      // Refrash list to get again the API with new value
      axios.get(api + "language=" + this.item.value + "&page=" + this.page).then(({ data }) => {
        this.page += 1;
        this.list.push(...data.items);
      })

    }
  },

  filters:{
    formatNumber: function(value){
      var a = Number(value);
      return a.toLocaleString();
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
