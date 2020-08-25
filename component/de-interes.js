import React from 'react';
import Post from '../json/post.json';

export function Interes(){
    return(
        <>
            <hr/>
                <h2 className="titulos mb-4">Te puede interesar</h2>
                {Post.map(item => (
                    <div className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={`../img/${item.photo}`} className="card-img rounded" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <p className="card-text">{item.titulo}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    );
}