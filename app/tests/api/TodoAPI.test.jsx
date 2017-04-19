var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', ()=>{
    beforeEach(() => {
        localStorage.removeItem('todos');
    })


    it('should exist', () =>{
        expect(TodoAPI).toExist();
    })

    describe('setTodos', () => {
        it('should set valid todos array', () => {
            var todos =[{
                id: 23,
                text: 'test all files',
                completed: false
            }]
            TodoAPI.setTodos(todos);

            var actualTodos = JSON.parse(localStorage.getItem('todos'));

            expect(actualTodos).toEqual(todos);
        })

        it('should not set invalid todos array', ()=>{
            var badTodos = {a:'b'}
            TodoAPI.setTodos(badTodos);

            expect(localStorage.getItem('todos')).toBe(null);
        })

    })

    describe('getTodos', () => {
        it('should return an empty array if theres no data', ()=>{
            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual([]);
        })

        it('should return if valid array in localstorage', () => {
            var todos =[{
                id: 23,
                text: 'test all files',
                completed: false
            }]
            localStorage.setItem('todos', JSON.stringify(todos));

            var actualTodos = TodoAPI.getTodos();

            expect(actualTodos).toEqual(todos);
        })
    })

    describe('filteredTodos', ()=> {
        var todos =[
            {
                id: 1,
                text: 'Some text',
                completed: true
            },
            {
                id: 2,
                text: 'Second text',
                completed: false
            },
            {
                id: 3,
                text: 'Third text',
                completed: true
            }];

        it('should return all items if showCompleted is true', ()=> {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        })

        it('should return non completed items if showCompleted is false', ()=> {
            var filteredTodos = TodoAPI.filterTodos(todos, false, '');
            expect(filteredTodos.length).toBe(1);
        })

        it('should sort by completed status', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
            expect(filteredTodos[0].completed).toBe(false);
        })

        it('should return all items when searchText filter is empty', ()=>{
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        })

        it('should return only matching items when searchtext contains text', ()=>{
            var filteredTodos = TodoAPI.filterTodos(todos, true, 'third');
            expect(filteredTodos.length).toBe(1);
        })



    })
})