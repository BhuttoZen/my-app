import { types } from '../../actions/types'  
import PostsReducer from './reducer'
describe("Posts reducers " , ()=>{

  it("Should return default state",()=>{
    const newState = PostsReducer(undefined,{});
    expect(newState).toEqual([])
  })

  it("Should return new state if recieving type",()=>{
    const posts =   [{title:'Test 1'},{title:'Test 2'},{title:'Test 3'}]
    const newState = PostsReducer(undefined,{
      type : types.GET_POSTS,
      payload:posts
    });
    expect(newState).toEqual(posts)
  })

})