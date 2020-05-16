import React from 'react';
import { shallow } from 'enzyme'
import {findByTestAttr} from '../../../Utils';
import ShareButton from './index';

describe('Share Button Component',()=>{

  describe("It renders",()=>{
    let wrapper
    let mockFunc;
    beforeEach(()=>{
      mockFunc = jest.fn();
      const props ={
        buttonText: "Example Button Text",
        emitEvent: mockFunc
      }
      wrapper = shallow(<ShareButton {...props}/>)
    });
    it("Should render a button " , ()=>{
      const button = findByTestAttr(wrapper,'buttonComponent');
      expect(button.length).toBe(1)
    });

    it("should emit call back",()=>{
      const button = findByTestAttr(wrapper,'buttonComponent');
      button.simulate('click');
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1)
    })

  })
})