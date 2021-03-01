import { useState, useCallback } from 'react';

export default function useBooleanToggleState(defaultValue: boolean) {
  const [value, setValue] = useState(defaultValue);

  const onToggle = useCallback(() => {
    setValue(!value);
  }, [value]);

  const onTrue = useCallback(() => {
    setValue(true);
  }, []);

  const onFalse = useCallback(() => {
    setValue(false);
  }, []);

  return [value, onToggle, onTrue, onFalse] as const;
}
