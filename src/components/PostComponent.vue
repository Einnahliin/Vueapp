<template>
 <div class="container">
   <h1>Latest Posts</h1>
      <div class= "create-post">
        <label for="create-post"> Say Something...</label>
        <input type="text" id="create-post" v-model="text" placeholder="Create a post">
        <button v-on:click="createPost">Post!</button>
      </div>
    <hr>
    <p v-if= "error">{{ error}}</p>
    <div class="posts-container">
      <div class="post"
        v-for=" post in posts"
        v-bind:item="post"
        v-bind:key="post._id"
        >
     <div>
         <div class = "date">{{
            `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}`
          }}
          <button class="btn"
      v-on:click="deletePost(post._id)">
          </button>
          </div>
          <div v-if="editId===post._id">
          </div>
          <div v-if="editId===post._id">
            <form action="" @submit.prevent="doneEdit">
              <input type="text" v-model="post.text"/>
            </form>
          </div>
          <div v-else @click="editPost(post._id)">{{ post.text }}</div>
        </div>
      </div>
      </div>  
   </div>
</template>

<script>
import PostService from '../PostService';

export default {
  name: 'PostComponent',
  data() {
    return {
      editId:"",
      posts: [],
      error: '',
      text: '',      
    }
  },
  async created() {
    try{
      this.posts = await PostService.getPosts();
    } catch(err) {
      this.error = err.message;
    }
  },
  methods: {
    async createPost() {
      await PostService.insertPosts(this.text);
      this.posts = await PostService.getPosts(this.text ="");
    },

    async deletePost(id) {
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts();
      
    },
    // editPost(id) {
    //   // await PostService.editPost(id);
    //   // this.posts = await PostService.getPosts();
    // }
    editPost(id){
      this.editId = id;
      
    },
    doneEdit(){
      this.editId = "";
      
    }
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.container {
  max-width: 800px;
  margin: 0 auto;
  
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding:  10px;
  margin-bottom: 15px;
}

div.post {
  position: center;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  overflow: auto;
  color: #222;
  margin-bottom: 15px;
  width: 800px;
  height: 100px;
}

div.post:hover{
  background-color: #c2f3d3fd;
  font-size: 30px;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 50px;
}

p.text {
  font-size: 50px;
  font-weight: 1000;
  margin-bottom: 0;
}
.date{
position:left;
text-align: right;
left: 0%;
font-size: 15px;
size: 20px;
width: 100%;

}

.btn {
    background-color: transparent;
    width: 30px;
    height: 30px;
    border: none;
}

.btn:hover{
  margin-left: auto;
  margin-right: 2px;
  margin-top: 2px;
  position: left;
  width: 30px;
  height: 30px;
  background-image: url(RR.png);
  background-repeat:no-repeat;
  background-position: center;
  background-size: 30px;
  cursor: pointer;
  border: none;
  pointer-events: stroke;
}


.post{
  font-size:25px;
  font-weight: 10000;
  font-display:bold;
}

</style>
