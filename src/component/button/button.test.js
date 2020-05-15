import React from 'react';
import { shallow } from 'enzyme'
import {findByTestAttr} from '../../../Utils';
import ShareButton from './index';

describe('Share Button Component',()=>{

  describe("It renders",()=>{
    let wrapper
    
    beforeEach(()=>{
      const props ={
        buttonText: "Example Button Text",
        emitEvent: ()=>{

        }
      }
      wrapper = shallow(<ShareButton {...props}/>)
    });
    it("Should render a button " , ()=>{
      const button = findByTestAttr(wrapper,'buttonComponent');
      expect(button.length).toBe(1)
    })
  })
})