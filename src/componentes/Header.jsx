import propTypes  from "prop-types";
const Header = ({ bgColor, color }) => {

    return(
        <header style={{ backgroundColor: bgColor, 
                                color: color  }}>
            Encabezado
        </header>
    )
}

// valores por defecto para las props suministradas 
Header.defaultProps ={
    bgColor: 'rgba(0,0,0,0.4)',
    color: '#ff6a95'
}

//validar las props en proptypes
Header.propTypes = {
    bgColor: propTypes.string,
    color: propTypes.string
}

export default Header; 