import { css } from "@emotion/react";
import { Button } from "./components/Button";

function App() {

  const color = 'yellow';

  return (
    <>
      <h1 className='a'>Hello!</h1>
      <hr />
      <div css={{
        backgroundColor: 'hotpink',
        '&:hover': {
          color: 'blue'
        }
      }}>This has a hotpink background.</div>
      <hr />
      <div css={css`
      background-color: hotpink;
      &:hover {
        color: ${color};
      }
      `}>This is another hotpink background.</div>
      <hr />
      <Button>Click me</Button>
    </>
  );
}

export default App;
