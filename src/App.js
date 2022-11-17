import Header from "./componentes/Header";
import FeedbackItem from "./componentes/FeedbackItem";

function App(){

     //OBJETO DE ESTILOS
    const HeaderStyles = {
        backgroundColor: '#ed5bad',
        color: 'white'
    }
    return(
        <div className="container">
            {/* props: atributos de estructuras de un componente react */}
        <Header 
            bgColor={HeaderStyles.isRequired}
            color={HeaderStyles.color}/>
            <FeedbackItem />
            <FeedbackItem />
            <FeedbackItem />
            <FeedbackItem />

        </div>
    )
}



export default App;