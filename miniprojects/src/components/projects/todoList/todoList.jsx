import React from 'react'
import './todoList.css'

export default function TodoList() {
  return (
    <div>
      <div className='codeContainer'>
        <p className='code'> <a href="https://github.com/NotAlxT/MiniProjects/tree/main/miniprojects/src/components/projects/todoList" target="_blank" rel='noreferrer'>Code</a></p>
      </div>

      <div className='taskContainer'>
        <div className="taskbox">
          <div className="taskInput">

            <input type="text" />

            <button>
              add task
            </button>
          </div>

          <div className='blkLine '>
          </div>

          <div className='taskList'>
            <h1>TASK</h1>
          </div>

        </div>
      </div>


    </div>
  )
}
