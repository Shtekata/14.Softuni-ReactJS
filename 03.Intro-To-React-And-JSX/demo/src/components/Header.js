const Header = (x) => {
    // const headingMessage = 'Hello React World';
    
    return (
        <header>
        {/* <h1>{`${headingMessage}...`}</h1> */}
        <h1>{`${x.children}...`}</h1>
        <h2>The Best Framework Ever From Custom Component</h2>
      </header>
    )
}
export default Header;