import { type FC } from 'react'
import { SearchIcon } from './Icons'
import { toast } from 'sonner'

interface Props {
  result?: string
}

export const Sidebar: FC<Props> = ({ result = '' }) => {
  function handleClipboard () {
    navigator.clipboard.writeText(result).catch(() => {
      toast.error('Error al copiar el texto')
    })
    toast.success('Texto copiado con éxito')
  }
  return (
    <article className="col-span-1 bg-gray-400 rounded-3xl w-full h-fit md:max-h-[700px] md:w-[350px] shadow-xl mx-auto py-10 lg:mt-14">
      <div className="flex flex-col h-full justify-center items-center m-auto gap-12">
        {result !== ''
          ? (
          <div className="flex flex-col justify-between h-[70.8vh] gap-10 ">
            <h3 className="font-bold text-lg text-gray-900 text-left w-[330px] ">
              {result}
            </h3>
            <button
              className="bg-[#D8DFE8] rounded-3xl text-gray-900 text-lg h-[50px] w-full md:w-[250px] mx-auto hover:text-gray-100 hover:bg-[#0A3871] transition duration-200"
              onClick={handleClipboard}
            >
              Copiar
            </button>{' '}
          </div>
            )
          : (
          <>
            <div className='hidden md:contents'>
            <SearchIcon />
            </div>
            <div>
              <h3 className="font-bold text-3xl text-gray-900 text-center max-w-[350px] ">
                Ningún mensaje fue encontrado
              </h3>
              <p className="text-lg text-gray-900 text-center max-w-[350px]">
                Ingresa el texto que deseas encriptar o desencriptar
              </p>
            </div>
          </>
            )}
      </div>
    </article>
  )
}
