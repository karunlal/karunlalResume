import Profile from './components/Profile'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold font-serif mb-8">Karunlal</h1>
      <Profile />
      <Skills />
      <Education />
      <Projects />
    </div>
  )
}

export default App
