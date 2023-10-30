import { useState } from 'react';
import '../App.css';
import { BsSliders, BsFillCaretDownFill } from "react-icons/bs";

function Header({DataVisible}) {

    const [displaytoggle, setdisplaytoggle] = useState(false)

    const handleGrouping = (e)=>{
        DataVisible(e.target.value)
        setdisplaytoggle(!displaytoggle)
    }

    const handleOrdering = (e)=>{
        DataVisible(e.target.value)
        setdisplaytoggle(!displaytoggle)

    }
    return (
        <>
            <div className="HeaderMain">
                <div className='header_select' onClick={() => setdisplaytoggle(!displaytoggle)}>
                    <BsSliders />
                    <div className='Displayselect'>
                        <span><b>Display</b></span>
                        <BsFillCaretDownFill />
                    </div>
                </div>

                {/* // Modal on display click */}
                <div className={displaytoggle === false ? 'displayModal' : 'displayModal modalshow'} >
                    <div>
                        <span>Grouping</span>
                        <select onChange={(e)=>handleGrouping(e)}>
                            <option defaultValue={'status'}>Status</option>
                            <option value='user'>User</option>
                            <option value={'priority'}>Priority</option>

                        </select>
                    </div>

                    <div>
                        <span>Ordering</span>
                        <select onChange={(e)=>handleOrdering(e)}>
                            <option value={'priority'}>Priority</option>
                            <option value="title">Title</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header