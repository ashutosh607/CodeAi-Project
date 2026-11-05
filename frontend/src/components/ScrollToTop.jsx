import { useLayoutEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export default function ScrollToTop() {
  const location = useLocation();
  const action = useNavigationType();
  const positions = useRef(new Map());
  useLayoutEffect(() => {
    const { key, hash } = location;
    const target = document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView({behavior:'instant'});
    else window.scrollTo({top: action === 'POP' ? positions.current.get(key) || 0 : 0, behavior:'instant'});
    const remember = () => positions.current.set(key, window.scrollY);
    window.addEventListener('scroll', remember, {passive:true});
    return () => window.removeEventListener('scroll', remember);
  }, [location, action]);
  return null;
}
