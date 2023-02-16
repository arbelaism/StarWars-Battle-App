import { type ReactElement } from 'react'
import { initialVersusState } from 'components/Home'

const Reload = ({
  setVersus
}: {
  setVersus: (args1: any) => void
}): ReactElement => {
  return (
    <button
      onClick={() => {
        setVersus({ ch1: initialVersusState, ch2: initialVersusState })
      }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 20 20">
        <path
          fill="currentColor"
          d="M19.295 12a.704.704 0 0 1 .705.709v3.204a.704.704 0 0 1-.7.709a.704.704 0 0 1-.7-.709v-1.125C16.779 17.844 13.399 20 9.757 20c-4.41 0-8.106-2.721-9.709-6.915a.712.712 0 0 1 .4-.917c.36-.141.766.04.906.405c1.4 3.662 4.588 6.01 8.403 6.01c3.371 0 6.52-2.182 7.987-5.154l-1.471.01a.704.704 0 0 1-.705-.704a.705.705 0 0 1 .695-.714L19.295 12Zm-9.05-12c4.408 0 8.105 2.721 9.708 6.915a.712.712 0 0 1-.4.917a.697.697 0 0 1-.906-.405c-1.4-3.662-4.588-6.01-8.403-6.01c-3.371 0-6.52 2.182-7.987 5.154l1.471-.01a.704.704 0 0 1 .705.704a.705.705 0 0 1-.695.714L.705 8A.704.704 0 0 1 0 7.291V4.087c0-.392.313-.709.7-.709c.386 0 .7.317.7.709v1.125C3.221 2.156 6.601 0 10.243 0Z"
        />
      </svg>
    </button>
  )
}

export default Reload
