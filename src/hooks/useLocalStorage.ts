import { useEffect, useState } from "react"

const useLocalStorage = (key: string, defaultValue: string) => {
  const [ localStorageValue, setLocalStorageValue ] = useState<string>(() => {
    const value = localStorage.getItem("key");
    if ( value !== null ) {
      return(value)
    }
    localStorage.setItem(key, defaultValue)
    return defaultValue
  });

  useEffect(() => {
    
  }, [])

  const setValue = (value: any): void => {
    localStorage.setItem(key, value)
    setLocalStorageValue(value)
  }

  return {
    localStorageValue,
    setValue
  }
}

export default useLocalStorage