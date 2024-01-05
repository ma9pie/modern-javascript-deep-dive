import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import tw, { styled } from 'twin.macro';

interface Props {
  className?: string;
  code: string;
}

const CodeBlock = ({ className, code }: Props) => {
  if (!code) return null;
  return (
    <Wrapper className={className}>
      <SyntaxHighlighter language="javascript" style={vs2015}>
        {code}
      </SyntaxHighlighter>
    </Wrapper>
  );
};

export default CodeBlock;

const Wrapper = styled.div`
  ${tw`my-2 rounded-lg overflow-hidden`};
`;
