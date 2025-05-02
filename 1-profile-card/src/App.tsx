import './App.css'
import Avatar from './Avatar'
import Intro from './Intro'
import SkillList from './SkillList'

function App() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-110 h-auto border-4 flex flex-col items-center">
          <Avatar />
          <div className="font-ibm-plex-mono">
            <Intro />
            <SkillList />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
