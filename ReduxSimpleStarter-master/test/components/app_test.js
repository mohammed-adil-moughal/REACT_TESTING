import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';
//group similat tests
describe('App', () => {
   let component;
   beforeEach(()=>{
     component=renderComponent(App)
   })
  //Use it to test a single attribute of a target
  it('shows comment bos', () => {
    //create an instance of App
   
    //use to make an assertion about a target
    expect(component.find('.comment-box')).to.exist;

  })

  it('chows a comment list',() =>{
     expect(component.find('.comment-list')).to.exist;
  })

});

