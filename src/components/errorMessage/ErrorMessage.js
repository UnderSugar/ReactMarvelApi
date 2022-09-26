import img from './error.gif';

const ErrorMessage = () => {
    return (
        <img  style = {{display: 'block', width: "250px", heigth: "260", 
        objectFit: 'contain', margin: "0 auto"}}src = {img} alt = "Error"/>
    )
}

export default ErrorMessage;