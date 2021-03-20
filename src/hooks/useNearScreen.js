import { useEffect, useRef, useState } from 'react'

export default function useNearScreen({once=true, distance='100px', externalRef}={}) {
    const [isNearScreen, setShow] = useState(false)
    const fromRef = useRef()
    
    useEffect(() => {

        let observer 

        const elementToObserver = externalRef ? externalRef.current : fromRef.current

        const onchange = (entries, observer) => {
            const element = entries[0]
            if (element.isIntersecting) {
                setShow(true)
                once && observer.disconnect();
            }else{
                !once && setShow(false)
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
            if (elementToObserver) observer.observe(elementToObserver)

        })

        /* si tenemos observer lo desconectamos */
        return () => observer && observer.disconnect();
    })
    return {isNearScreen,fromRef}
}
