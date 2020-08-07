import React from 'react';

const Header = () => {
    return(
        <>
            <div className='container-header'>
                <article>
                    <h3>MISSION COMPLETE</h3>
                    <h1>CREW DRAGON RETURNS FROM SPACE STATION</h1>
                    <a href="blog/articulo" className='btn-simple-border'>Repetición</a>
                </article>
            </div>

            <style jsx>{`
                .container-header {
                    height: 100vh;
                    background-image: url(img/portada-header.jpg);
                    background-position: center bottom;
                    background-repeat: no-repeat;
                    background-size: auto;
                }
                .container-header article {
                    min-width: 400px;
                    max-width: 550px;
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

export default Header;