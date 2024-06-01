import React from 'react'
import { EditHeader } from './styled'
const AdminEditHeader = ({onSave,onCancel,text,btnTxt}) => {
  return (
    <EditHeader>
    <h4>{text}</h4>
    <div>
      <span id='save-changes' onClick={() => {onSave()}}>{btnTxt}</span>
      <span onClick={() => onCancel()}>Cancel</span>
    </div>

  </EditHeader>
  )
}

export default AdminEditHeader