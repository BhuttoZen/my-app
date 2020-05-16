import App from './App';
import {shallow} from 'enzyme';
import React from 'react'
import {findByTestAttr,testStore} from '../Utils'

const setUp = (initialState={})=>{
  const store = testStore(initialState);

  const wrapper = shallow(<App store={store}/>).childAt(0).dive()
  return wrapper
}
describe("AppComponent",()=>{
  let wrapper;
  beforeEach(()=>{
    const initialState ={
      posts:[{
        title:"example title 1",
        body:'sometext'
      },
      {
        title:"example title 2",
        body:'sometext'
      },
      {
        title:"example title 3",
        body:'sometext'
      }]
    }
    wrapper=setUp(initialState)
  });

  it("Should render without errors",()=>{
    const component=findByTestAttr(wrapper,'appComponent');
    expect(component.length).toBe(1);
  });

  it("This method should update state ",()=>{
    const classInstance = wrapper.instance();

    classInstance.exampleMethod_updatesState();
    console.log(classInstance.props.posts)
    const newState = classInstance.state.hideBtn;
    expect(newState).toBe(true);
  });

  it("This method should return value as expected",()=>{
    const classInstance = wrapper.instance();
    const newValue = classInstance.exampleMethod_returnsValue(6);
    expect(newValue).toBe(7)
  })
})