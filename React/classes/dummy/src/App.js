import React from 'react'

function App() {
  const [width, setWidth] = React.useState(window.innerWidth)
  // using the useEffect hook to add an event listener to the window object
  React.useEffect(() => {
    // event listener to listen for the resize event
    window.addEventListener('resize', () => {
      // log the current width of the screen
      setWidth(window.innerWidth)
    })
  }, [])
  return (
    <div>
      {/* and app to print the current width of the screen */}
      <h1>Current Width: {width}</h1>
    </div>
  )
}

export default App
