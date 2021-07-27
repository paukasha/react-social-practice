import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";

let state = {
  posts: [
    {id: 1, post: 'Hi, how are you?', likesCount: 14},
    {id: 2, post: 'Yo', likesCount: 20},
    {id: 3, post: 'Hello world', likesCount: 120}
  ],
}

it('new post should be added', () => {
  //stest data
  let action = addPostActionCreator('hihihihi');

//action
  let newState = profileReducer(state, action);
  //expectation
  expect(newState.posts.length).toBe(4);
});

it('after deleting length', () => {
  let action = deletePost(1);

//action
  let newState = profileReducer(state, action);
  //expectation
  expect(newState.posts.length).toBe(2);
})