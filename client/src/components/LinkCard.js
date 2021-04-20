import React from "react"

export const LinkCard = ({link}) =>{
    return(
        <>
            <h2>Ссылка</h2>
            <p>Ваша ссылка: <a herf={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></p>
            <p>Откуда: <a herf={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a></p>
            <p>Количество кликов по ссылке: <strong>{link.clicks}</strong></p>
            <p>Дата создания: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
        </>
    )
}