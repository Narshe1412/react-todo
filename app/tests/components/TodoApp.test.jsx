var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoApp = require('TodoApp');

describe('TodoApp', ()=>{
    it('should exists', ()=>{
        expect(TodoApp).toExist();
    })

    it('should add todo to the todos state on handleAddTodo', ()=>{
        var todoText = 'test text';
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

        todoApp.setState({todos: []});
        todoApp.handleAddTodo(todoText);
        
        expect(todoApp.state.todos[0].text).toBe(todoText);
        // createdAt should be a number
        expect(todoApp.state.todos[0].createdAt).toBeA('number');
    })

    it('should toggle completed value when handletoggle is called', ()=>{
        var todoData = {
            id: 11,
            text: 'Testing',
            completed: false,
            createdAt: 0,
            completedAt: undefined
        }
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos: [todoData]});

        // check that todos first item completed value is false
        expect(todoApp.state.todos[0].completed).toBe(false);
        // call handleToggle with 11
        todoApp.handleToggle(11);
        // verify that value changed
        expect(todoApp.state.todos[0].completed).toBe(true);
        //completed at should be a number
        expect(todoApp.state.todos[0].completedAt).toBeA('number');
    })

        it('should remove completedat value when toggled from true to false', ()=>{
        var todoData = {
            id: 11,
            text: 'Testing',
            completed: true,
            createdAt: 0,
            completedAt: 0
        }
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos: [todoData]});

        // check that todos first item completed value is false
        expect(todoApp.state.todos[0].completed).toBe(true);
        // call handleToggle with 11
        todoApp.handleToggle(11);
        // verify that value changed
        expect(todoApp.state.todos[0].completed).toBe(false);
        //completed at should be a number
        expect(todoApp.state.todos[0].completedAt).toBe(undefined);
    })
})