import { useState } from 'react'
import cls from './style.module.css'
import { BiSolidTrash } from "react-icons/bi";
import { removeTodo } from '../../manageTodoList';

function TodoCard({id, name, description, onDelete}) {
    const [isChecked, setIsChecked] = useState(false)
    const toggleCheckbox = () => {
        setIsChecked(!isChecked)
    }
    const handleDeleteBtn = () => {
        removeTodo(id)
        onDelete()
    }
    return (
        <div className={cls['container']}>
            <div className={cls['content-wrapper']}>
                <div className={cls['name']}>{name}</div>
                <div className={cls['description']}>{description}</div>
                <div className={cls['checkbox']}>
                    <div
                        className={cls['checkboxButton']}
                        onClick={toggleCheckbox}
                    >
                        {
                            isChecked ?
                                <div className={cls['checkboxButton__checked']} />
                                : null
                        }
                    </div>
                    <div
                        className={cls['checkboxButton']}
                        style={{backgroundColor: 'red'}}
                        onClick={handleDeleteBtn}
                    >
                        <BiSolidTrash style={{color: 'white', fontSize: 25}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoCard