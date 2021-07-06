import {useState, useEffect} from "react"

const useTime = (props)=>{
    const [time, setTime] = useState(new Date());


    useEffect(()=>{
        const countdown = setInterval(()=>{
            setTime(new Date())
        }, 30000)

        return ()=>{
            clearInterval(countdown)
        }
        
    })
    return time;
}

export default useTime;