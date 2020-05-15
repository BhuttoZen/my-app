import React from 'react'
import {shallow} from 'enzyme'
import { findByTestAttr } from '../../../Utils'
import ListItem from './index'

describe("ListItem component" ,()=>{

  describe("Component renders",()=>{

    let wrapper;

    beforeEach(()=>{
      const props = {
        title: "Example title",
        desc: "Some Text"
      }
      wrapper = shallow(<ListItem {...props} />)
    });

    it ("Should render without error",()=>{
      const component = findByTestAttr(wrapper,'ListItemComponet')
      expect(component.length).toBe(1)
    });

    it ("Should render a title",()=>{
      const title = findByTestAttr(wrapper,'componentTitle')
      expect(title.length).toBe(1)
    });

    it ("Should render a desc",()=>{
      const desc = findByTestAttr(wrapper,'componentDesc')
      expect(desc.length).toBe(1)
    });
  });
  describe("Should not rendfer",()=>{
    let wrapper;

    beforeEach(()=>{
      const props = {
        desc: "Some Text"
      }
      wrapper = shallow(<ListItem {...props} />)
    });

    it("Componet not rendered" ,()=>{
      
      const component = findByTestAttr(wrapper,'ListItemComponet')
      expect(component.length).toBe(0)
    })
  })
})