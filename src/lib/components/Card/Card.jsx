import React from 'react';

export default function Card({children}) {
    return (
        <section className="card">
            {children}
        </section>
    )
}