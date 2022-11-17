import { useState } from "react"

const FeedbackItem  = () =>{

    //Estados: presisten informacion a traves del ciclo de vida
    //da un unico componente 

    const[rating, setRating] = useState(2)
    const[text, setText] = useState("Mejorar curso, mojorar recursos")

    const addNota=()=>{
        //cambiar estado a rating
        setRating((prev)=>{
            return prev + 1
        })
    }
    const restNota=()=>{
        //cambiar estado a rating
        setRating((prev)=>{
            return prev - 1
        })
    }
    return (
        <div className="card">
            <div className="num-display">
                { rating }
            </div>
            <div className="text-display">
                { text }
            </div>
            <button onClick={addNota}>
                Sumar nota
            </button>
            <button onClick={restNota}>
                Disminuir nota
            </button>
        </div>
    )
}

export default FeedbackItem;