import React, {useState} from "react"

/**
 * @param {*} schema - Contains attr: { value: '', validation: ''}
 * @returns 
 */

export default function Form(schema) {
  const [form, setForm] = useState(schema || {});

  function handleTextInput(event) {
    const {name, value} = event.target;
    const {validation} = form[name];
    const attrName = 'value';
    if(!!validation) {
      const newValue = validation(value);
      setForm({...form, [name]: {...form[name], [attrName]: newValue } })
    } else {
      setForm({...form, [name]: {...form[name], [attrName]: value } })
    }
  }

  function handleSelectChange(event) {
    const {name, value} = event.target;
    const attrName = 'value';
    setForm({...form, [name]: {[attrName]: value } })
  }

  function handleDateChange(event) {
    const {name, value} = event.target;
    const {validation} = form[name];
    const attrName = 'value';
    if(!!validation) {
      const newValue = validation(value);
      setForm({...form, [name]: {[attrName]: value } })
    } else {
      setForm({...form, [name]: {[attrName]: value } })
    }
  }

  return {
    form,
    setForm,
    handleTextInput,
    handleSelectChange,
    handleDateChange
  }
}