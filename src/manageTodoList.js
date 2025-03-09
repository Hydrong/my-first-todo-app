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

export function removeTodo(id) { }

export function editTodo(id, name, description) { }

export function getTodoList() {
    const stringTodoList = localStorage.getItem(todoListPath)
    try {
        const jsonTodoList = stringTodoList ? JSON.parse(stringTodoList) : { values: [] };
        return jsonTodoList
    } catch {
        localStorage.setItem(todoListPath, JSON.stringify({values:[]}))
        return { values: [] }
    }
}
