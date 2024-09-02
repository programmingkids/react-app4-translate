import { useEffect, useContext } from 'react';
import { StateContext } from './StateContext';
import { DispatchContext } from './DispatchContext';

export const InitData = () => {
  const {} = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    (async () => {})();
  }, []);

  return;
};
