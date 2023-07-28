import React from 'react'

const AllOcassionsDropDown = () => {
    const allOcassions = [
        "Farewell","Love","Birthday","Sympathy","Thank You","Congrats","Wedding","Retirement","Get Well Soon","Annivasary",
        "Promotion","Graduation","Maternity","New Home","Christmass","Thanksgiving","Condolences","Just Because","Save the Date","Work Annivasary",
        "Halloween","New Year","Admin Day","Boss Day","Welcome","Baby/Birth Announcement",
    ]
  return (
    <div>
        <ul className='allOcassionsDropDown'>
            {allOcassions.map(occasion => (
                <li>{occasion}</li>
            ))}
        </ul>
    </div>
  )
}

export default AllOcassionsDropDown