const todoListPath = 'myTodoApp_todoList'

export function createTodo(name, description) {
    const todo = {
        name,
        description,
        id: new Date().getTime()
    }
    let todoList = getTodoList()
    todoList.values.push(todo)
    localStorage.setItem(todoListPath, JSON.stringify(todoList))
}

export function removeTodo(id) {
    let todoList = getTodoList()
    const todoIndex = todoList.values.findIndex(value => value.id == id)
    todoList.values.splice(todoIndex, 1)
    localStorage.setItem(todoListPath, JSON.stringify(todoList))
}

export function editTodo(id, name, description) {
    let todoList = getTodoList()
    const todoIndex = todoList.values.findIndex(value => value.id == id)
    todoList[todoIndex].name = name
    todoList[todoIndex].description = description
    localStorage.setItem(todoListPath, JSON.stringify(todoList))
}

export function getTodoList() {
    const stringTodoList = localStorage.getItem(todoListPath)
    try {
        const jsonTodoList = stringTodoList ? JSON.parse(stringTodoList) : { values: [] };
        return jsonTodoList
    } catch {
        localStorage.setItem(todoListPath, JSON.stringify({ values: [] }))
        return { values: [] }
    }
}
