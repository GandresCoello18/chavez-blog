import React from 'react';

const CardPostPortada = ({ titulo, subtitulo, url, btn, photo }) => {
    return(
        <>
            <div className='container-header'>
                <article>
                    <h3>{titulo}</h3>
                    <h1>{subtitulo}</h1>
                    {url === 'spacex-y-sus-misiones-espaciales' ? (
                        <a href={`podcast/${url}`} className='btn-simple-border'>{btn}</a>
                    ) : (
                        <a href={`blog/${url}`} className='btn-simple-border'>{btn}</a>
                    )}
                </article>
            </div>

            <style jsx>{`
                .container-header {
                    height: 100vh;
                    background-image: url(img/${photo});
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                }
                .container-header article {
                    min-width: 400px;
                    max-width: 530px;
                    position: absolute;
                    background-color: rgba(0,0,0,0.7);
                    bottom: 10px;
                    padding: 30px;
                    color: #fff;
                }
                .container-header article h1 {
                    font-size: 38px;
                    line-height: 48px;
                }
                .container-header article h3 {
                    font: 20px/32px D-DIN-Medium,Arial,Verdana,sans-serif;
                    font-weight: 400;
                    font-style: normal;
                    text-transform: uppercase;
                    margin: auto auto 10px;
                }
                .container-header article .btn-simple-border {
                    border: 1px solid #fff;
                    padding: 13px 15px;
                    color: #fff;
                    position: relative;
                    text-decoration: none;
                    top: 10px;
                    width: 120px;
                    font-weight: bold;
                    cursor: pointer;
                }
                .container-header article .btn-simple-border:hover {
                    background-color: #fff;
                    color: #000;
                    transition-duration: 0.5s;
                }
            `}</style>
        </>
    );
}

export default CardPostPortada;