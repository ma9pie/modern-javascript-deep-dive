import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import tw, { styled } from 'twin.macro';

interface Props {
  code: string;
}

const CodeBlock = ({ code }: Props) => {
  if (!code) return null;
  return (
    <Wrapper>
      <SyntaxHighlighter language="javascript" style={vs2015}>
        {code}
      </SyntaxHighlighter>
    </Wrapper>
  );
};

export default CodeBlock;

const Wrapper = styled.div`
  ${tw`my-4 rounded-lg overflow-hidden`};
`;
