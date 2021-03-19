import { useEffect, useRef, useState } from 'react'

export default function useNearScreen({distance='100px'}={}) {
    const [isNearScreen, setShow] = useState(false)
    const fromRef = useRef()
    
    useEffect(() => {

        let observer 

        const onchange = (entries, observer) => {
            const element = entries[0]
            if (element.isIntersecting) {
                setShow(true)
                observer.disconnect();
            }
        }

        /* Dar soporte de IntersectionObserver a navegadores que no cuenten con uno nativo */
        Promise.resolve(
            typeof IntersectionObserver !== 'undefined'
                ? IntersectionObserver
                : import('intersection-observer')
        ).then(() => {
            
            /* Creamos el observer con un margen de 100px */
            observer = new IntersectionObserver(onchange, {
                rootMargin: distance
            })
            observer.observe(fromRef.current)

        })

        /* si tenemos observer lo desconectamos */
        return () => observer && observer.disconnect();
    })
    return {isNearScreen,fromRef}
}
