import './Artists.css'

function ArtistButton(props) {
    return (
            <input className='artist-button' type="button" value={props.name} onClick={props.clickFunction}/>
    );

}

export default ArtistButton;
