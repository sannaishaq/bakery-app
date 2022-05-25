import { useShortAnswerInput } from 'react-google-forms-hooks'

export default function ShortAnswerInput({ id }) {
    const { register, label } = useShortAnswerInput(id)
  
    return (
      <div>
        <p>{label}</p>
        <input type='text' {...register()} />
      </div>
    )
  }