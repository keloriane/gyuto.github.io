import React from 'react';
import "./music.scss";
import tantric from './../../assets/images/cover-tantric-college 1.png'
import kailish from './../../assets/images/kailash1.png'
const Music = () => {


    return (
        <div className="music-page">
            <div className="album-container">
                <div className="yellow-album">
                    <img src="" alt=""/>
                </div>
                <div className="info-album">
                    <ol>
                        <li className="list-items-song">Kailash</li>
                        <li className="list-items-song">Lhasa</li>
                        <li className="list-items-song active" >Tantric college</li>
                      
                    </ol>
                        <div className="line"></div>
                       <ol>
                           <li className="list-items-song" >Dalai Lama's long life</li>
                           <li className="list-items-song" >Heart sutra</li>
                           <li className="list-items-song" >Kundun</li>
                           <li className="list-items-song" >Le grand noir</li>
                       </ol>
                </div>
                <div className="dark-album">
                    <img src="" alt=""/>
                </div>
            </div>
        </div>
    )
}
export default Music;