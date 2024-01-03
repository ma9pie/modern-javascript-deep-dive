import { useMemo } from 'react';
import tailwindColors from 'tailwindcss/colors';

type Props = Record<string, any>;

const useTailwind = (props: Props) => {
  const color = useMemo(() => {
    let _color = undefined;
    Object.keys(props).map((key) => {
      const arr = key.match(/([a-z]+)(\d{2,})/);
      if (!arr) return;
      const [, parsedColor, parsedNumber] = arr;
      const tailwindColor = (tailwindColors as any)[parsedColor];
      if (!tailwindColor) return;
      _color = tailwindColor[parsedNumber];
    });
    return _color;
  }, [props]);

  return { color };
};

export default useTailwind;
