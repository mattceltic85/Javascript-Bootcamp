const todos = [{
    text: 'Walk the dog',
    completed: true
}, {
    text: 'Eat lunch',
    completed: false
}, {
    text: 'Plan birthday',
    completed: true
}, {
    text: 'Exercise',
    completed: false
}, {
    text: 'Play guitar',
    completed: true
}]

const deleteTodo = function(todos, task) {
    const index = todos.findIndex( function (todo, index) {
        return todo.text === task
    })
    return todos.splice(index, 1)
}

deleteTodo(todos, 'Play guitar')
console.log(todos)

