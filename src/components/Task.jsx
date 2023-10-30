import React from 'react'
import { BsPersonFill,BsFillCircleFill } from 'react-icons/bs'
import { PiDotsThreeDuotone } from 'react-icons/pi'


export const Task = (props) => {
    return (
        <div className='Main-Task-container'>
            <div className='taskBox'>
                <p className='CAM-value'>{props?.data?.id}</p>
                <p>{props?.data?.title.length > 55 ? `${props?.data?.title.slice(0, 55)}...` : props?.data?.title}</p>
                <div className='task-bottom'>
                    <PiDotsThreeDuotone />
                    <div className='featureBox'>
                        <BsFillCircleFill />
                        <span>{props?.data?.tag[0]}</span>
                    </div>
                </div>
            </div>
            {
                props.type !== 'user' ? <div>
                    <BsPersonFill className='userIcon' />
                </div> : ''
            }
        </div>
    )
}
