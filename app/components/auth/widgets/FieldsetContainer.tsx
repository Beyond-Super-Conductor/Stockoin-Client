import { fi } from 'date-fns/locale';
import React, { forwardRef, useImperativeHandle, useRef } from 'react'

interface Props {
  children: React.ReactNode,
  labelText: string
}

const FieldsetContainer = forwardRef(({labelText,children}: Props,ref) => {
  const labelRef = useRef<HTMLLegendElement>(null);
  const fieldsetRef = useRef<HTMLFieldSetElement>(null);
  useImperativeHandle(ref, () => ({
    onFocusInput: () => {
      labelRef.current?.classList.add('text-blue-700');
      labelRef.current?.classList.replace('text-xl','text-2xl');
      fieldsetRef.current?.classList.add('border-sky-600');
    },
    onBlurInput: () => {
      labelRef.current?.classList.remove('text-blue-700');
      labelRef.current?.classList.replace('text-2xl','text-xl'); 
      fieldsetRef.current?.classList.remove('border-sky-600');
    }
  }))

  return (
    <fieldset ref={fieldsetRef} className='w-full border border-white px-4 py-4 rounded-md'>
      <legend ref={labelRef} className="self-start text-xl p-2 font-semibold tracking-wider transition-all duration-300 ease-in-out">{labelText}</legend>
      {children}
    </fieldset>
  )
})

export default FieldsetContainer