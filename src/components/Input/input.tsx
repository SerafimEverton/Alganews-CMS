import { InputHTMLAttributes } from 'react'
import * as I from './input.styles'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string

}

export default function Input({ label, ...props }: InputProps) {
    return <I.Wraper>

        {label &&
            <span className='Label'>
                {label}:
            </span>
        }
        <input
            { ...props } type="text" >
        </input>
    </I.Wraper>


}