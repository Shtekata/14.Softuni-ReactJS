const circleStyle = {
  borderRadius: '50%',
  background: 'royalblue',
  width: 50,
  height: 50,
}

const borderStyle = {
  border: '5px solid orange',
  margin: '3rem',
}

const CircleWithBorder = () => <div css={[circleStyle, borderStyle]} />

export {CircleWithBorder}
