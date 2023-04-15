import { useState } from 'react'
import { MainLayout } from './components/MainLayout'
import { Textarea } from './components/Textarea'
import { Sidebar } from './components/Sidebar'
import { Toaster, toast } from 'sonner'
import { LogoIcon, WarningIcon } from './components/Icons'

type Encripter = Record<string, string>
const encripter: Encripter = {
  e: 'enter',
  i: 'imes',
  a: 'ai',
  o: 'ober',
  u: 'ufat'
}

function App () {
  const [text, setText] = useState<string>('')
  const [textResult, setTextResult] = useState<string>('')

  function handleChange (evento: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(evento.target.value)
  }

  function handleEncrypt (event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    if (text === '') {
      // Handle empty input
      toast.error('No hay texto para encriptar')
      return
    }
    const vowelsToReplace: string[] = ['e', 'i', 'a', 'o', 'u']
    let result = ''
    for (const letter of text) {
      if (vowelsToReplace.includes(letter)) {
        result += encripter[letter]
      } else {
        result += letter
      }
    }
    setTextResult(result)
    setText('')
    toast.success('Texto encriptado con éxito')
  }

  function handleDecrypt (event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    if (text === '') {
      // Handle empty input
      toast.error('No hay texto para desencriptar')
      return
    }
    let fraseOriginal = ''

    for (let i = 0; i < text.length; i++) {
      const currentLetter = text[i]
      let isEncriptedLetter = false

      for (const [key, value] of Object.entries(encripter)) {
        if (value === text.slice(i, i + value.length)) {
          fraseOriginal += key
          i += value.length - 1
          isEncriptedLetter = true
          break
        }
      }

      if (!isEncriptedLetter) {
        fraseOriginal += currentLetter
      }
    }

    setTextResult(fraseOriginal)
    setText('')
    toast.success('Texto desencriptado con éxito')
  }
  return (
    <MainLayout>
      <div className="col-span-1 lg:col-span-2 h-screen">
        <h1 className="absolute flex flex-col items-start w-[120px] h-[48px] left-10 top-10 ">
          <LogoIcon />
        </h1>
        <form className="flex flex-col gap-1 min-h-screen  justify-center container ">
          <Textarea onChange={handleChange} text={text} />
          <div className="flex justify-start sm:pl-16 md:pl-32 lg:pl-40 2xl:pl-64 items-center gap-2">
            <div>
              <WarningIcon />
            </div>
            <p>Solo letras minúsculas y acentos</p>
          </div>
          <div className="flex justify-center gap-4 mb-40">
            <button
              className="bg-[#0A3871] rounded-3xl text-gray-100 text-lg h-[50px] w-[250px] hover:text-gray-900 hover:bg-[#D8DFE8] transition duration-200"
              onClick={handleEncrypt}
            >
              Encriptar
            </button>
            <button
              onClick={handleDecrypt}
              className="bg-[#D8DFE8] rounded-3xl text-gray-900 text-lg h-[50px] w-[250px] hover:text-gray-100 hover:bg-[#0A3871] transition duration-200"
            >
              Desencriptar
            </button>
          </div>
        </form>
      </div>
      <Sidebar result={textResult} />
      <Toaster richColors position="top-right" />
    </MainLayout>
  )
}

export default App
