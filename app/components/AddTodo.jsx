var React = require('react');

var AddTodo = React.createClass({
    handleOnClick: function(e) {
        e.preventDefault();

        var todoText = this.refs.todoText.value;
        
        if(todoText.length > 0) {
            this.refs.todoText.value = "";
            
            this.props.handleAddTodo(todoText);
        }
    },
    render: function() {
        return(
            <div>
                <form action="" onClick={this.handleOnClick}>
                    <input type="text" ref="todoText" placeholder="New task To Do"/>
                    <button className="button">Add Todo</button>
                </form>
            </div>
        )
    }
});

module.exports = AddTodo;