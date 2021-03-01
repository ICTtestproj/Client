import { useState, SyntheticEvent, useMemo } from 'react';

const id = (v: string) => v;

interface HandlerProps {
  setValue: (value: string) => void;
  transformValue: (v: string) => string;
}

function getHandler({ setValue, transformValue }: HandlerProps) {
  return (_: SyntheticEvent<HTMLElement> | undefined, value: string) => {
    setValue(transformValue(value));
  };
}

interface Props {
  defaultValue?: string;
  transformValue?: (v: string) => string;
}

export default function useInputState(props?: Props) {
  const { defaultValue = '', transformValue = id } = props || {};

  const [value, setValue] = useState(defaultValue);

  const handler = useMemo(() => getHandler({ setValue, transformValue }), [
    setValue,
    transformValue,
  ]);

  return [value, handler, setValue] as const;
}
