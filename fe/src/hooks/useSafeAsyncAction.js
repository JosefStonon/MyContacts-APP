import {
  useCallback,
} from 'react';
import useIsMounted from './useIsMounted';

export default function useSafeAsyncAction() {
  const isMounted = useIsMounted();

  const runAsyncSafeAction = useCallback((Callback) => {
    if (isMounted) {
      Callback();
    }
  }, [isMounted]);

  return runAsyncSafeAction;
}
