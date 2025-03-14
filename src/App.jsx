import React, { useState, useEffect } from 'react'
import cls from './App.module.css'
import { Routes, Route, useNavigate } from 'react-router'
import SettingsPage from './components/settingsPage/SettingsPage'
import ManagePage from './components/managePage/ManagePage'
import TodoCard from './components/todoCard/TodoCard'
import { createTodo, editTodo, getTodoList, removeTodo } from './manageTodoList'
import EditTodoCard from './components/editTodoCard/EditTodoCard'
import Page404 from './components/404/404'

function Navbar() {
  const navigator = useNavigate()
  return (
    <div className={cls['navbar-container']}>
      <ul className={cls['navbar-content-wrapper']}>
        <li onClick={() => navigator('/')}>홈</li>
        <li onClick={() => navigator('/manage')}>관리</li>
        <li onClick={() => navigator('/settings')}>설정</li>
      </ul>
    </div>
  )
}

function Home() {
  const [todoList, setTodoList] = useState(null)
  const [inManageTodoCard, setInManageTodoCard] = useState('no') // 'no' or 'create' or 'edit'

  function handleCreateTodoCardBtnClick() {
    setInManageTodoCard('create')
  }

  function handleCancelCreateTodoCard() {
    setInManageTodoCard('no')
  }

  function handleSaveCreateTodoCard() {
    setInManageTodoCard('no')
    refreshTodoList()
  }

  function refreshTodoList() {
    const newTodoList = getTodoList()
    setTodoList(newTodoList)
  }

  useEffect(() => {
    refreshTodoList()
  }, [])

  return (
    <div className={cls['home-container']}>
      <h1>TODO</h1>
      <div>
        {
          todoList ?
            todoList.values.map(todo => <TodoCard onDelete={
              refreshTodoList} key={todo.id} id={todo.id} name={todo.name} description={todo.description} />)
            : <div style={{ fontFamily: 'sans-serif', fontSize: 25 }}>아무것도 없어 보이네요 ;^;</div>
        }
      </div>
      <div className={cls['home-create-todo-card-btn']} onClick={handleCreateTodoCardBtnClick}>+</div>
      {
        inManageTodoCard !== 'no' ?
          <EditTodoCard
            mode={inManageTodoCard}
            onCancel={handleCancelCreateTodoCard}
            onSave={handleSaveCreateTodoCard}
          />
          : null
      }
    </div>
  )
}

function App() {

  return (
    <div className={cls['container']}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/manage' element={<ManagePage />} />
        <Route path='/settings' element={<SettingsPage />} />

        <Route path='*' element={<Page404 />} />
      </Routes>
      <Navbar />
    </div>
  )
}

export default App
