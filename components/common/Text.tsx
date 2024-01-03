import classnames from 'classnames';
import React from 'react';
import tw, { styled } from 'twin.macro';

import useTailwind from '@/hooks/useTailwind';

interface Props {
  [key: string]: any;
  className?: string;

  size?: number;
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  xl2?: boolean;
  xl3?: boolean;
  xl4?: boolean;
  xl5?: boolean;
  xl6?: boolean;
  xl7?: boolean;
  xl8?: boolean;
  xl9?: boolean;

  medium?: boolean;
  semibold?: boolean;
  bold?: boolean;

  black?: boolean;
  white?: boolean;

  flex?: number;
  inline?: boolean;
  nowrap?: boolean;
  underline?: boolean;
  breakAll?: boolean;
  pointer?: boolean;
  hidden?: boolean;

  left?: boolean;
  right?: boolean;
  center?: boolean;

  children?: string;
}

const Text = ({
  className,

  size,

  medium,
  semibold,
  bold,

  black,
  white,

  flex,
  inline,
  nowrap,
  underline,
  breakAll,
  pointer,
  hidden,

  left,
  right,
  center,

  children,
  ...props
}: Props) => {
  const { textClass, color } = useTailwind(props);

  console.log(textClass, props);

  return (
    <P
      className={classnames(className, textClass)}
      size={size}
      medium={medium}
      semibold={semibold}
      bold={bold}
      black={black}
      white={white}
      inline={inline}
      nowrap={nowrap}
      underline={underline}
      breakAll={breakAll}
      pointer={pointer}
      hidden={hidden}
      left={left}
      right={right}
      center={center}
      style={{ color: color }}
    >
      {children}
    </P>
  );
};

export default Text;

const P = styled.p<Props>`
  font-size: ${(props) => `${props.size}px`};

  ${(props) => props.medium && tw`font-medium`};
  ${(props) => props.semibold && tw`font-semibold`};
  ${(props) => props.bold && tw`font-bold`};

  ${(props) => props.black && tw`text-black`};
  ${(props) => props.white && tw`text-white`};

  ${(props) => props.inline && tw`inline`};
  ${(props) => props.nowrap && tw`whitespace-nowrap`};
  ${(props) => props.underline && tw`underline`};
  ${(props) => props.breakAll && tw`break-all`};
  ${(props) => props.pointer && tw`cursor-pointer`};
  ${(props) => props.hidden && tw`hidden`};

  ${(props) => props.left && tw`text-left`};
  ${(props) => props.right && tw`text-right`};
  ${(props) => props.center && tw`text-center`};
`;
