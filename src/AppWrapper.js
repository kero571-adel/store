import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
const AppWrapper = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const Loader = () => (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100vw', height: '100vh',
      backgroundColor: 'rgba(255,255,255,0.8)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 9999
    }}>
      <div style={{
        width: '40px', height: '40px',
        border: '4px solid #ccc',
        borderTop: '4px solid #007bff',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
    </div>
  );
  useEffect(() => {
    setLoading(true);
    // تحاكي تحميل البيانات أو تنقل الصفحة البطيء   
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timeout);
  }, [location]);
  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  );
};
export default AppWrapper;