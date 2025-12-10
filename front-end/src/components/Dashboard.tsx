// this is the main page of the app (once logged in)
function Dashboard() {
  return (
    <>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid white', width: '275px', height: '240px' }}>
            Calendar
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid white', width: '275px', height: '150px' }}>
            Emotion Wheel
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid white', width: '275px', height: '120px' }}>
            Notes
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid white', width: '275px', height: '75px' }}>
            Buttons
        </div>
    </>
  )
}

export default Dashboard