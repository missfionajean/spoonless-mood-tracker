// this is the main page of the app (once logged in)
function Dashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'black', paddingBlock: "10px" }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid white', width: '275px', height: '240px', color: 'white' }}>
            Calendar
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid white', width: '275px', height: '150px', color: 'white' }}>
            Emotion Wheel
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid white', width: '275px', height: '120px', color: 'white' }}>
            Notes
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid white', width: '275px', height: '75px', color: 'white' }}>
            Buttons
        </div>
    </div>
  )
}

export default Dashboard