/**
 * most of tests of this file are copies from the original
 * CSSTransition.
 *
 * More tests were added to ensure the new functionalities.
 *
 */

import React from 'react';
import { mount } from 'enzyme';
import { TransitionGroup } from 'react-transition-group';

import BoolCSSTransition from '../src/BoolCSSTransition';


/**
 *  tests from the original CSSTransition
 *  https://github.com/reactjs/react-transition-group/blob/master/test/CSSTransition-test.js
 *
 *  should pass all the orinal tests.
 */
 describe('BoolCSSTransition', () => {

   it('should flush new props to the DOM before initiating a transition', (done) => {
     mount(
       <BoolCSSTransition
         css
         in={false}
         timeout={0}
         classNames="test"
         onEnter={node => {
           expect(node.classList.contains('test-class')).toEqual(true)
           expect(node.classList.contains('test-entering')).toEqual(false)
           done()
         }}
       >
         <div></div>
       </BoolCSSTransition>
     )
     .tap(inst => {

       expect(inst.getDOMNode().classList.contains('test-class')).toEqual(false)
     })
     .setProps({
       in: true,
       className: 'test-class'
     })
   });

   describe('entering', () => {
     let instance;

     beforeEach(() => {
       instance = mount(
         <BoolCSSTransition
           css
           timeout={10}
           classNames="test"
         >
           <div/>
         </BoolCSSTransition>
       )
     });

     it('should apply classes at each transition state', done => {
       let count = 0;

       instance.setProps({
         in: true,

         onEnter(node) {
           count++;
           expect(node.className).toEqual('test-enter');
         },

         onEntering(node){
           count++;
           expect(node.className).toEqual('test-enter test-enter-active');
         },

         onEntered(node){
           expect(node.className).toEqual('test-enter-done');
           expect(count).toEqual(2);
           done();
         }
       });
     });

     it('should apply custom classNames names', done => {
       let count = 0;
       instance = mount(
         <BoolCSSTransition
           css
           timeout={10}
           classNames={{
             enter: 'custom',
             enterActive: 'custom-super-active',
             enterDone: 'custom-super-done',
           }}
         >
           <div/>
         </BoolCSSTransition>
       );

       instance.setProps({
         in: true,

         onEnter(node){
           count++;
           expect(node.className).toEqual('custom');
         },

         onEntering(node){
           count++;
           expect(node.className).toEqual('custom custom-super-active');
         },

         onEntered(node){
           expect(node.className).toEqual('custom-super-done');
           expect(count).toEqual(2);
           done();
         }
       });
     });
   });

   describe('appearing', () => {
     it('should apply appear classes at each transition state', done => {
       let count = 0;
       mount(
         <BoolCSSTransition
           css
           timeout={10}
           classNames='appear-test'
           in={true}
           appear={true}
           onEnter={(node, isAppearing) => {
             count++;
             expect(isAppearing).toEqual(true);
             expect(node.className).toEqual('appear-test-appear');
           }}
           onEntering={(node, isAppearing) => {
             count++;
             expect(isAppearing).toEqual(true);
             expect(node.className).toEqual('appear-test-appear appear-test-appear-active');
           }}

           onEntered={(node, isAppearing) => {
             expect(isAppearing).toEqual(true);
             expect(node.className).toEqual('appear-test-appear-done appear-test-enter-done');
             expect(count).toEqual(2);
             done();
           }}
         >
           <div/>
         </BoolCSSTransition>
       );
     });

     it('should lose the "*-appear-done" class after leaving and entering again', (done) => {
       const wrapper = mount(
         <BoolCSSTransition
           css
           timeout={10}
           classNames="appear-test"
           in={true}
           appear={true}
           onEntered={() => {
             wrapper.setProps({
               in: false,
               onEntered: () => {},
               onExited: (node) => {
                 expect(node.className).toBe('appear-test-exit-done')
                 wrapper.setProps({
                   in: true,
                   onEntered: () => {
                     expect(node.className).toBe('appear-test-enter-done')
                     done()
                   }
                 })
               }
             })
           }}
         >
           <div />
         </BoolCSSTransition>
       )
     })

     it('should not be appearing in normal enter mode', done => {
       let count = 0;
       mount(
         <BoolCSSTransition
           css
           timeout={10}
           classNames='not-appear-test'
           appear={true}
         >
           <div/>
         </BoolCSSTransition>
       ).setProps({
         in: true,

         onEnter(node, isAppearing){
           count++;
           expect(isAppearing).toEqual(false);
           expect(node.className).toEqual('not-appear-test-enter');
         },

         onEntering(node, isAppearing){
           count++;
           expect(isAppearing).toEqual(false);
           expect(node.className).toEqual('not-appear-test-enter not-appear-test-enter-active');
         },

         onEntered(node, isAppearing){
           expect(isAppearing).toEqual(false);
           expect(node.className).toEqual('not-appear-test-enter-done');
           expect(count).toEqual(2);
           done();
         }
       });
     });

     it('should not enter the transition states when appear=false', () => {
       mount(
         <BoolCSSTransition
           css
           timeout={10}
           classNames='appear-fail-test'
           in={true}
           appear={false}
           onEnter={() => {
             throw Error('Enter called!')
           }}
           onEntering={() => {
             throw Error('Entring called!')
           }}
           onEntered={() => {
             throw Error('Entred called!')
           }}
         >
           <div/>
         </BoolCSSTransition>
       );
     });


   });

   describe('exiting', ()=> {
     let instance;

     beforeEach(() => {
       instance = mount(
         <BoolCSSTransition
           css
           in
           timeout={10}
           classNames="test"
         >
           <div/>
         </BoolCSSTransition>
       )
     });

     it('should apply classes at each transition state', done => {
       let count = 0;

       instance.setProps({
         in: false,

         onExit(node){
           count++;
           expect(node.className).toEqual('test-exit');
         },

         onExiting(node){
           count++;
           expect(node.className).toEqual('test-exit test-exit-active');
         },

         onExited(node){
           expect(node.className).toEqual('test-exit-done');
           expect(count).toEqual(2);
           done();
         }
       });
     });

     it('should apply custom classNames names', done => {
       let count = 0;
       instance = mount(
         <BoolCSSTransition
           css
           in
           timeout={10}
           classNames={{
             exit: 'custom',
             exitActive: 'custom-super-active',
             exitDone: 'custom-super-done',
           }}
         >
           <div/>
         </BoolCSSTransition>
       );

       instance.setProps({
         in: false,

         onExit(node){
           count++;
           expect(node.className).toEqual('custom');
         },

         onExiting(node){
           count++;
           expect(node.className).toEqual('custom custom-super-active');
         },

         onExited(node){
           expect(node.className).toEqual('custom-super-done');
           expect(count).toEqual(2);
           done();
         }
       });
     });

     it('should support empty prefix', done => {
       let count = 0;

       const instance = mount(
         <BoolCSSTransition
           css
           in
           timeout={10}
         >
           <div/>
         </BoolCSSTransition>
       )

       instance.setProps({
         in: false,

         onExit(node){
           count++;
           expect(node.className).toEqual('exit');
         },

         onExiting(node){
           count++;
           expect(node.className).toEqual('exit exit-active');
         },

         onExited(node){
           expect(node.className).toEqual('exit-done');
           expect(count).toEqual(2);
           done();
         }
       });
     });
   });

   describe('reentering', () => {
     it('should remove dynamically applied classes', done => {
       let count = 0;
       class Test extends React.Component {
         render() {
           const { direction, text, ...props } = this.props;

           return (
             <TransitionGroup
               component={null}
               childFactory={child =>
                 React.cloneElement(child, {
                   classNames: direction
                 })
               }
             >
               <BoolCSSTransition
                 css
                 key={text}
                 timeout={100}
                 {...props}
               >
                 <span>{text}</span>
               </BoolCSSTransition>
             </TransitionGroup>
           )
         }
       }

       const instance = mount(<Test direction="down" text="foo" />)

       const rerender = getProps => new Promise(resolve =>
         instance.setProps({
           onEnter: undefined,
           onEntering: undefined,
           onEntered: undefined,
           onExit: undefined,
           onExiting: undefined,
           onExited: undefined,
           ...getProps(resolve)
         })
       );

       Promise.resolve().then(() =>
         rerender(resolve => ({
           direction: 'up',
           text: 'bar',

           onEnter(node) {
             count++;
             expect(node.className).toEqual('up-enter');
           },
           onEntering(node) {
             count++;
             expect(node.className).toEqual('up-enter up-enter-active');
             resolve()
           }
         }))
       ).then(() => {
         return rerender(resolve => ({
           direction: 'down',
           text: 'foo',

           onEntering(node) {
             count++;
             expect(node.className).toEqual('down-enter down-enter-active');
           },
           onEntered(node) {
             count++;
             expect(node.className).toEqual('down-enter-done');
             resolve();
           }
         }))
       }).then(() => {
         expect(count).toEqual(4);
         done();
       });
     });
   });
 });
