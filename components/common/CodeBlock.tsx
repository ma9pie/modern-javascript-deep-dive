import React, { useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import tw, { styled } from 'twin.macro';

interface Props {
  className?: string;
  fn?: () => void;
}

const CodeBlock = ({ className, fn }: Props) => {
  useEffect(() => {
    if (!fn) return;
    console.log(fn.name);
    fn();
  }, []);

  return (
    <Wrapper className={className}>
      <SyntaxHighlighter language="javascript" style={vs2015}>
        {String(fn)}
      </SyntaxHighlighter>
    </Wrapper>
  );
};

export default CodeBlock;

const Wrapper = styled.div`
  ${tw`my-2 rounded-lg overflow-hidden`};
`;
