import { useEffect, useState } from 'react'
import Container from './Container'
import Character from './Character'
import ControlPane from './ControlPane'

const CharacterCreator = ({ smaller = false, play = false }) => {
  const [head, setHead] = useState(1)
  const [face, setFace] = useState(0)
  const skinColor = 'hsl(33deg, 59%, 68%)'
  const [value, setValue] = useState(0)
  const numHeads = 6
  const numFaces = 6
  const range = (n) => [...Array(n).keys()]
  const zeroPadNumber = (n, spaces = 2) =>
    String(n).padStart(spaces, '0')
  const headOptions = range(numHeads).map((index) => {
    return {
      id: index,
      label: `Head ${index + 1}`,
      children: zeroPadNumber(index + 1),
    }
  })
  const faceOptions = range(numFaces).map((index) => {
    return {
      id: index,
      label: `Face ${index + 1}`,
      children: zeroPadNumber(index + 1),
    }
  })
  useEffect(() => {
    const interval = setInterval(() => {
      if (play) {
        if (value === 5) {
          setValue(0)
          setHead(5)
          setFace(1)
        } else setValue((value) => value + 1)
        setHead(value)
        setFace(6 - value)
      }
    }, 270)
    return () => clearInterval(interval)
  }, [play, value])

  return (
    <Container smaller={smaller}>
      <div className="my-4 text-slate-900">
        <header className="mb-4 px-4">
          <h1 className="text-xl font-bold lg:text-2xl">
            Create your Character&#x27;s Face
          </h1>
          <p className="my-0">
            Customize your character&#x27;s look and style using
            the controls below.
          </p>
        </header>
        <Character
          head={head}
          face={face}
          skinColor={skinColor}
        />
        <div className="z-50 mt-4">
          <ControlPane
            title="Heads"
            options={headOptions}
            currentOption={head}
            handleSelectOption={setHead}
          />
          <ControlPane
            title="Faces"
            options={faceOptions}
            currentOption={face}
            handleSelectOption={setFace}
          />
        </div>
      </div>
    </Container>
  )
}

export default CharacterCreator
