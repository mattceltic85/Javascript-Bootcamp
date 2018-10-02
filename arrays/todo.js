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

const sortTodos = function(todos) {
    todos.sort(function(a, b) {
        if (a.completed === true && b.completed === false) {
            return 1
        } else if (a.completed === false && b.completed === true) {
            return -1
        } else {
            return 0
        }
    })
}

const deleteTodo = function(todos, task) {
    const index = todos.findIndex(function (todo, index) {
        return todo.text === task
    })
    return todos.splice(index, 1)
}

// deleteTodo(todos, 'Play guitar')
// console.log(todos)

const getThingsToDo = function(todos) {
    return filteredTodos = todos.filter( function(todo){
        const isCompleted = todo.completed
        return isCompleted
    })
}

// console.log(getThingsToDo(todos))


sortTodos(todos)
console.log(todos)
