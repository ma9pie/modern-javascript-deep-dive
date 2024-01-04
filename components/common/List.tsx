import React from 'react';
import tw, { styled } from 'twin.macro';

type ListType = 'disc' | 'decimal' | 'circle' | 'square';

interface Props {
  type?: ListType;
  list: string[];
}

const List = ({ type = 'disc', list }: Props) => {
  return (
    <Ul>
      {list.map((item, idx) => (
        <Li key={idx} type={type}>
          {item}
        </Li>
      ))}
    </Ul>
  );
};

export default List;

const Ul = styled.ul`
  ${tw``};
`;
const Li = styled.li<{ type?: ListType }>`
  ${tw`list-inside`};
  ${({ type }) => {
    switch (type) {
      case 'disc':
        return tw`list-disc`;
      case 'decimal':
        return tw`list-decimal`;
      case 'circle':
        return tw`list-[circle]`;
      case 'square':
        return tw`list-[square]`;
      default:
        break;
    }
  }};
`;
