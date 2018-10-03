/* const users = [
    {name: 'jill'},
    {name: 'bill'},
    {name:'Alex'},
];

// using for loop 
var user;
for(var i = 0; i < users.length;i++){
    if(users[i].name === 'Alex'){
        user = users[i];
        console.log(user);
        break;
    };
};

// using find helper
users.find((user) => {
    if(user.name === 'jill'){
        console.log(user);
    }
}) */

var posts = [{id:1, title:'Newpost'},{id:2, title:'oldPost'}];
var comments = {postid : 1, content:'great Post'};

function postForComments(posts,comments){
    posts.find((post) => {
        if(post.id === comments.postid){
            console.log(post);
        }
    })
}
postForComments(posts,comments);
