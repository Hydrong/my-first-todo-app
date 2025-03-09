import { useState } from 'react'
import cls from './style.module.css'

function TodoCard({name, description}) {
    const [isChecked, setIsChecked] = useState(false)
    const toggleCheckbox = () => {
        setIsChecked(!isChecked)
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
                </div>
            </div>
        </div>
    )
}

export default TodoCard