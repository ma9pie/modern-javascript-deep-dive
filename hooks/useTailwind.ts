import { useMemo } from 'react';
import tailwindColors from 'tailwindcss/colors';

type Props = Record<string, any>;

const FONT_SIZE: Props = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  xl2: 'text-2xl',
  xl3: 'text-3xl',
  xl4: 'text-4xl',
  xl5: 'text-5xl',
  xl6: 'text-6xl',
  xl7: 'text-7xl',
  xl8: 'text-8xl',
  xl9: 'text-9xl',
};

const useTailwind = (props: Props) => {
  const textClass = useMemo(() => {
    let fontSize = '';
    Object.keys(props).map((key) => {
      const _fontSize = FONT_SIZE[key];
      if (!_fontSize) return;
      fontSize = _fontSize;
    });
    return fontSize;
  }, [props]);

  const color = useMemo(() => {
    let _color = '';
    Object.keys(props).map((key) => {
      const result = key.match(/([a-z]+)(\d+)/);
      if (!result) return;
      const [, parsedColor, parsedNumber] = result;
      const tailwindColor = (tailwindColors as any)[parsedColor];
      if (!tailwindColor) return;
      _color = tailwindColor[parsedNumber];
    });
    return _color;
  }, [props]);

  return { textClass, color };
};

export default useTailwind;
