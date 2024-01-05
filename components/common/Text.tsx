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
  xs,
  sm,
  md,
  lg,
  xl,
  xl2,
  xl3,
  xl4,
  xl5,
  xl6,
  xl7,
  xl8,
  xl9,

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
  const { color } = useTailwind(props);

  return (
    <P
      className={className}
      size={size}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      xl2={xl2}
      xl3={xl3}
      xl4={xl4}
      xl5={xl5}
      xl6={xl6}
      xl7={xl7}
      xl8={xl8}
      xl9={xl9}
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

const Title1 = (props: Props) => {
  return (
    <Text xl3 semibold>
      {props.children}
    </Text>
  );
};
const Title2 = (props: Props) => {
  return (
    <Text xl2 semibold>
      {props.children}
    </Text>
  );
};
const Title3 = (props: Props) => {
  return (
    <Text xl1 semibold>
      {props.children}
    </Text>
  );
};

Text.Title1 = React.memo(Title1);
Text.Title2 = React.memo(Title2);
Text.Title3 = React.memo(Title3);

export default Text;

const P = styled.p<Props>`
  font-size: ${(props) => `${props.size}px`};
  ${(props) => props.xs && tw`text-xs`};
  ${(props) => props.sm && tw`text-sm`};
  ${(props) => props.md && tw`text-base`};
  ${(props) => props.lg && tw`text-lg`};
  ${(props) => props.xl && tw`text-xl`};
  ${(props) => props.xl2 && tw`text-2xl`};
  ${(props) => props.xl3 && tw`text-3xl`};
  ${(props) => props.xl4 && tw`text-4xl`};
  ${(props) => props.xl5 && tw`text-5xl`};
  ${(props) => props.xl6 && tw`text-6xl`};
  ${(props) => props.xl7 && tw`text-7xl`};
  ${(props) => props.xl8 && tw`text-8xl`};
  ${(props) => props.xl9 && tw`text-9xl`};

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
