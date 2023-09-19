import React, { useState } from 'react'

export default function useInput() {
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement> | string) => { 
    typeof e === 'string' ? setValue(e) : setValue(e.target.value);
  }
  return { value, onChange }
}
