import {css, ThemeProvider} from '@emotion/react'
import {Button} from './components/Button/Button'
import {CircleWithBorder} from './components/Circle/Circle'

function App() {
  const theme = {
    color: {
      primary: 'chartreuse',
      secondary: 'aquamarine',
    },
    textColor: {
      primary: 'brown',
      secondary: 'blueviolet',
    },
  }

  const color = 'yellow'

  return (
    <ThemeProvider theme={theme}>
      <h1 className='a'>Hello!</h1>
      <hr />
      <div
        css={{
          backgroundColor: 'hotpink',
          '&:hover': {
            color: 'blue',
          },
        }}>
        This has a hotpink background.
      </div>
      <hr />
      <div
        css={css`
          background-color: hotpink;
          &:hover {
            color: ${color};
          }
        `}>
        This is another hotpink background.
      </div>
      <hr />
      <Button>Click me</Button>
      <CircleWithBorder />
    </ThemeProvider>
  )
}

export default App
