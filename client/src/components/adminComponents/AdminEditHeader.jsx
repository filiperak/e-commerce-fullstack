import React from 'react'
import { EditHeader } from './styled'
const AdminEditHeader = ({onSave,onCancel}) => {
  return (
    <EditHeader>
    <h4>Edit Product</h4>
    <div>
      <span id='save-changes' onClick={() => {onSave()}}>Save Changes</span>
      <span onClick={() => onCancel()}>Cancel</span>
    </div>

  </EditHeader>
  )
}

export default AdminEditHeader