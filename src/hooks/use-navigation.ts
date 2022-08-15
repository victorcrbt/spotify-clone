import { useCallback, useMemo } from 'react';
import { useNavigate, NavigateOptions } from 'react-router-dom';

export const useNavigation = () => {
  const baseNavigate = useNavigate();

  const canGoBack = useCallback(() => window.history.state?.idx > 0, []);

  const canGoForward = useCallback(
    () => window.history.state?.idx < window.history.length - 2,
    []
  );

  const navigate = useCallback(
    (path: string, options?: NavigateOptions) => baseNavigate(path, options),
    []
  );

  const goTo = useCallback((delta: number) => baseNavigate(delta), []);

  const goBack = useCallback(
    () => canGoBack() && baseNavigate(-1),
    [canGoBack]
  );

  const goForward = useCallback(
    () => canGoForward() && baseNavigate(1),
    [canGoForward]
  );

  return { navigate, canGoBack, canGoForward, goTo, goBack, goForward };
};
