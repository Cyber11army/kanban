import React, { useEffect, useState } from 'react'
import {
  BsThreeDots, BsPlus, BsXCircleFill, BsFillCheckCircleFill, BsCircle,
  BsClockFill, BsFillCircleFill
} from "react-icons/bs";
import '../App.css'
import { Task } from './Task';

export const Kanban = (props) => {
  const [itemcount, setitemcount] = useState({
    'backlog': 0,
    'todo': 0,
    'inprogress': 0,
    'done': 0,
    'canceled': 0
  })
  const [taskData, settaskData] = useState('')

  useEffect(() => {
    let data = props.apidata

    const updatedTaskData = {
      'backlog': [],
      'todo': [],
      'inprogress': [],
      'done': [],
      'canceled': [],
    };

    data?.tickets.map((item, index) => {
      if (item.status === 'Todo') {
        setitemcount(prev => ({ ...prev, 'todo': (prev.todo) + 1 }))
        updatedTaskData['todo'].push(item);
      }

      else if (item.status === 'In progress') {
        setitemcount(prev => ({ ...prev, 'inprogress': (prev.inprogress) + 1 }))
        updatedTaskData['inprogress'].push(item);
      }

      else if (item.status === 'Backlog') {
        setitemcount(prev => ({ ...prev, 'backlog': (prev.backlog) + 1 }))
        updatedTaskData['backlog'].push(item);
      }

      else if (item.status === 'Done') {
        setitemcount(prev => ({ ...prev, 'done': (prev.done) + 1 }))
        updatedTaskData['done'].push(item);
      }

      else if (item.status === 'Cancel') {
        setitemcount(prev => ({ ...prev, 'canceled': (prev.canceled) + 1 }))
        updatedTaskData['canceled'].push(item);
      }
      return updatedTaskData
    })
    settaskData(updatedTaskData)
  }, [props.apidata])

  return (
    <div className='row'>

      {/* //Back Log */}
      <div className="TaskContainer BackLog">
        <div className='top-menu'>
          <div className='Item-name'>
            <BsFillCircleFill />
            <span>Back Log</span>
            <p>{itemcount?.backlog}</p>
          </div>
          <div>
            <BsPlus />
            <BsThreeDots />
          </div>
        </div>
        {
          taskData?.backlog?.length > 0 ? taskData?.backlog?.map((item, index) => {
            return <Task data={item} key={index} type={'status'} />
          }) : <p className='NoTask'></p>
        }
      </div>

      {/* //Todo */}
      <div className="TaskContainer Todo">
        <div className='top-menu'>
          <div className='Item-name'>
            <BsCircle />
            <span>Todo</span>
            <p>{itemcount?.todo}</p>
          </div>
          <div>
            <BsPlus />
            <BsThreeDots />
          </div>
        </div>
        {
          taskData?.todo?.length > 0 ? taskData?.todo?.map((item, index) => {
            return <Task data={item} key={index} type={'status'} />
          }) : <p className='NoTask'></p>
        }
      </div>

      {/* //In progress */}
      <div className="TaskContainer Inprogress">
        <div className='top-menu'>
          <div className='Item-name'>
            <BsClockFill style={{ color: 'rgb(243 207 85)' }} />
            <span>In Progress</span>
            <p>{itemcount?.inprogress}</p>
          </div>
          <div>
            <BsPlus />
            <BsThreeDots />
          </div>
        </div>
        {
          taskData?.inprogress?.length > 0 ? taskData?.inprogress?.map((item, index) => {
            return <Task data={item} key={index} type={'status'} />
          }) : <p className='NoTask'></p>
        }
      </div>

      {/* // Task Done */}
      <div className="TaskContainer Done">
        <div className='top-menu'>
          <div className='Item-name'>
            <BsFillCheckCircleFill style={{ color: '#5D69D1' }} />
            <span>Done</span>
            <p>{itemcount?.done}</p>
          </div>
          <div>
            <BsPlus />
            <BsThreeDots />
          </div>
        </div>
        {
          taskData?.done?.length > 0 ? taskData?.done?.map((item, index) => {
            return <Task data={item} key={index} type={'status'} />
          }) : <p className='NoTask'></p>
        }
      </div>

      {/* // Task canceled */}
      <div className="TaskContainer Cancelled">
        <div className='top-menu'>
          <div className='Item-name'>
            <BsXCircleFill style={{ color: '#9AA7B8' }} />
            <span>Canceled</span>
            <p>{itemcount?.canceled}</p>
          </div>
          <div>
            <BsPlus />
            <BsThreeDots />
          </div>
        </div>
        {
          taskData?.canceled?.length > 0 ? taskData?.canceled?.map((item, index) => {
            return <Task data={item} key={index} type={'status'} />
          }) : <p className='NoTask'></p>
        }
      </div>
    </div>
  )
}
