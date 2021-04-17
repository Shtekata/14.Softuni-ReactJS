import {css, useTheme} from '@emotion/react'
import styled from '@emotion/styled'

const Text = ({children, isPrimary}) => {
  //   const theme = useTheme()
  return (
    <span
      //   css={css`
      //     font-size: 1rem;
      //     /* color: ${isPrimary ? 'blue' : 'white'}; */
      //     color: ${isPrimary ? theme.textColor.primary : theme.textColor.secondary};
      //   `}>
      css={theme => ({
        fontSize: '1rem',
        /* color: ${isPrimary ? 'blue' : 'white'}; */
        color: `${isPrimary ? theme.textColor.primary : theme.textColor.secondary}`,
      })}>
      {children}
    </span>
  )
}

const StyledButton = styled.button`
  /* background-color: ${props => (props.isPrimary ? 'brown' : 'green')}; */
  background-color: ${props => (props.isPrimary ? props.theme.color.primary : props.theme.color.secondary)};
  border-radius: 1rem;
  &:active {
    opacity: 0.5;
  }
`

const Button = ({children}) => (
  <StyledButton
    isPrimary
    css={css`
      padding: 1rem;
      margin: 3rem;
    `}>
    <Text isPrimary>{children}</Text>
  </StyledButton>
)

export {Button}
