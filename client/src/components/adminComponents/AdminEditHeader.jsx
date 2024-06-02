import React from 'react';
import { EditHeader } from './styled';

const AdminEditHeader = ({ headerData }) => {
  return (
    <EditHeader>
      <h4>{headerData.text}</h4>
      <div>
        <span id='save-changes' onClick={headerData.submitFunction}>{headerData.btnText}</span>
        <span onClick={headerData.cancelFunction}>Cancel</span>
      </div>
    </EditHeader>
  );
};

export default AdminEditHeader;
