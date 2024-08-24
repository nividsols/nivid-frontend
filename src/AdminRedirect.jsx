import { useEffect } from 'react';
import { BaseUrl } from './BaseUrl';

function AdminRedirect() {
  useEffect(() => {
    if (window.location.pathname === '/admin') {
      window.location.replace(`${BaseUrl}/admin`);
    }
  }, []);

  return null;
}

export default AdminRedirect;