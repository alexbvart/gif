import {useEffect, useRef} from 'react';


const useTitle = ({title}) => {

    const prevTitle = useRef(document.title)

    useEffect(() => {
        const previousTitle = prevTitle.current
        document.title = `${title}`

        return () => {
            document.title = previousTitle
        }
    }, [title])
}
export default useTitle;