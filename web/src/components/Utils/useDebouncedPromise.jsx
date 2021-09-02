import { useRef } from "react"

export default function useDebouncedPromise(fn, delay) {
    let timeoutRef = useRef(null)

    function handler(...params){
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current)
        }

        return new Promise((resolve, reject) => {
            timeoutRef.current = window.setTimeout(async () => {
                try {
                    const response = await fn(...params)
                    resolve(response)
                } catch(error) {
                    reject(error)
                }
            }, delay)
        })
    }

    return handler
}