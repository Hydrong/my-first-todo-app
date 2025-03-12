import { useState, useEffect } from 'react'
import cls from './App.module.css'
import { Routes, Route, useNavigate } from 'react-router'
import SettingsPage from './components/settingsPage/SettingsPage'
import ManagePage from './components/managePage/ManagePage'
import TodoCard from './components/todoCard/TodoCard'
import { createTodo, editTodo, getTodoList, removeTodo } from './manageTodoList'
import EditTodoCard from './components/editTodoCard/EditTodoCard'

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
  function refreshTodoList() {
    const todoList = getTodoList()
    setTodoList(todoList)
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
            <TodoCard name='이름' description='설명' />
            : <div style={{ fontFamily: 'sans-serif', fontSize: 25 }}>아무것도 없어 보이네요 ;^;</div>
        }
      </div>
      <EditTodoCard />
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
      </Routes>
      <Navbar />
    </div>
  )
}

export default App
