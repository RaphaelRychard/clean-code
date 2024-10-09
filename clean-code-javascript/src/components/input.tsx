// patterns de composição

import {ReactNode, type ComponentProps, type LabelHTMLAttributes} from "react"


interface RootProps {
  children: ReactNode
}

export function Root({ children }: RootProps) {
  return (
    <div>{children}</div>
  )
}

type FormFiledProps = ComponentProps<'input'>

export function FormField(props: FormFiledProps) {
  return (
    <input {...props} />
  )
}

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>

export function Label(props: LabelProps) {
  return <label {...props} />
}


interface ErrorMessageProps {
  message: string
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <span>{message}</span>
  )
}

interface IconsProps {
  children: ReactNode
}


export function Icon({ children }: IconsProps) {
  return (
    <span>{children}</span>
  )
}