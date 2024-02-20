import Button from './Button'
import reactLogo from '../assets/React.png'
import tailwind from '../assets/Tailwind.png'
import github from '../assets/github.png'
import js from '../assets/JS.png'
import html from '../assets/html-icon.png'
import css from '../assets/css-icon.png'

const Skills = () => {
  const skills = [
    { id: 1, icon: reactLogo, name: 'React' },
    { id: 2, icon: tailwind, name: 'TailwindCSS' },
    { id: 3, icon: github, name: 'github' },
    { id: 4, icon: html, name: 'HTML' },
    { id: 5, icon: js, name: 'JavaScript' },
    { id: 6, icon: css, name: 'CSS' },
  ]

  return (
    <div>
      <h2 className="text-3xl font-bold font-serif mb-8 text-center">Skills</h2>
      {skills.map((skill) => (
        <div className="mb-8 text-center" key={skill.id}>
          <ul className="font-mono">
            <Button>
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-8 h-8 mr-2 inline-block"
              />
              {skill.name}
            </Button>
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Skills
