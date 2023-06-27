import React from 'react';
import './Artists.css';
import ArtistButton from './ArtistButton';
import { useNavigate } from 'react-router-dom';
import slugify from 'slugify';

function Artists() {
    const navigate = useNavigate();
    let artists = [
        "The Weeknd", "Ariana Grande", "Drake", "Tame Impala", "SZA", "Travis Scott", "Doja Cat", "Metro Boomin"
    ]

    function handleClick(e) {
        navigate('/quiz/' + slugify(e.target.value.toLowerCase()));
    }

    function goBack(e) {
        navigate(-1, { replace: true });
    }

    return (
        <div className='container'>
            <p class="title">
                <span class="underline underline--emoji">Artists</span>
            </p>
            <div className='items'>
                {
                    artists.map((artist) => {
                        return <ArtistButton name={artist} clickFunction={handleClick} />
                    })
                }
            </div>
            <div className='footer'>
                <input type="button" value="🔙" onClick={goBack} />
            </div>
        </div>
    );
}

export default Artists;