import React from "react"
import {} from '../style'

function Members({membersList, selectOne}) {
  return (
    <div>
      {
        membersList.map(item => (
            <div>
              <div>{item.username}</div>
              <div>{item.color}</div>
            </div>
        ))
      }
    </div>
  )
}

export default Members;