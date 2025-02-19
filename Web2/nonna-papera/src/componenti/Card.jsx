import PropTypes from 'prop-types'

function Card({img, titolo, descrizione}){

    return(
        <div>
            <img src={`/${img}.svg`} alt="immagine" />

        <div>

        </div>
            <h2>{titolo}</h2>
            <p>{descrizione}</p>
        </div>


    )
}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    titolo: PropTypes.string.isRequired,
    descrizione: PropTypes.string.isRequired,
};
export default Card;