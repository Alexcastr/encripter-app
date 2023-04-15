import { useRef, useEffect, type FC } from 'react'

interface Props {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  text: string
}

export const Textarea: FC<Props> = ({ onChange, text }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current != null) {
      textareaRef.current.focus()
    }
  }, [])
  return (
    <textarea

      className="m-auto pt-32 px-2 sm:pt-20 sm:pl-[3.7rem] lg:pl-12 w-[577px] h-[500px] border border-gray-100 text-3xl text-[#5c82b0] border-0 resize-none bg-[#242424] outline-none"
      onChange={onChange}
      value={text}
      ref={textareaRef}
      placeholder="Ingrese el texto aquí"
    >
      {' '}
    </textarea>
  )
}
