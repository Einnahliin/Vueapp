import axios from "axios";


const url = 'http://localhost:5000/api/post/';

class PostService{
    //Get Post
    static getPosts() {
        return new Promise((resolve, reject) => {
            try{
                axios.get(url).then((res) => {
                    const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                    );
                });
                
            }catch (err){
                reject(err);
            }
        });
    }

    // Create Post
    static insertPosts(text){
        return axios.post(url, {
            text
        });
    }
   

    //Delete Post
    static deletePost(id){
        return axios.delete(url + id);

    }

    static editPost(id){
        return axios.put({url,id, post:""});

    }


}

export default PostService;