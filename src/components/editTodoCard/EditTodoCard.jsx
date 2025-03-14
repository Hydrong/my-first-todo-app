import { useState } from "react"
import cls from './style.module.css'
import { createTodo } from "../../manageTodoList"

function EditTodoCard({ onSave, onCancel, mode = 'edit' }) {
    if (mode !== 'edit' && mode !== 'create') {
        throw new Error('mode props should be "edit" or "create" but it was not.')
    }

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    function cancel() {
        if (onCancel) {
            onCancel()
        }
    }

    function save() {
        if (onSave) {
            createTodo(name, description)
            onSave({name, description})
        }
    }

    return (
        <div className={cls['container']}>
            <h1 className={cls["title"]}>{mode === 'edit' ? 'Edit Todo Card' : 'Create Todo Card'}</h1>
            <p className={cls["label"]}>Name</p>
            <input className={cls["input"]} type="text" onChange={e => { setName(e.currentTarget.value) }} />
            <p className={cls["label"]}>Description</p>
            <input className={cls["input"]} type="text" onChange={e => { setDescription(e.currentTarget.value) }} />
            <div className={cls["btn-container"]}>
                <button className={cls["cancel-btn"] + ' ' + cls["btn"]} onClick={cancel}>Cancel</button>
                <button className={cls["save-btn"] + ' ' + cls["btn"]} onClick={save}>Save</button>
            </div>
        </div>
    )
}

export default EditTodoCard