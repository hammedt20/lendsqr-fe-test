import * as React from 'react';
import './status.scss'

type statusType = {
    status: string;
}

export function Status ({ status }: statusType) {
  return (
    <div className={(status === 'Active') ? 'active' : (status === 'Inactive') ? 'inactive' : (status === 'Pending') ? 'pending' : 'blacklisted'}>
      {status}
    </div>
  );
}
