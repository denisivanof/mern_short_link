import React, {useContext, useEffect, useState} from "react";
import {useHttp} from "../hooks/http.hooks";
import {AuthContext} from "../context/AuthContext";
import {useHistory} from "react-router-dom";

export const CreatePage = () =>{
    const history =  useHistory()
    const auth = useContext(AuthContext)
    const [link, setLink] = useState('')
    const {request} = useHttp()

    useEffect(() =>{
        window.M.updateTextFields()
    }, [])

    const pressHandler = async event =>{
        if (event.key === 'Enter'){
            try{
               const data = await request('/api/link/generate', 'POST', {from: link},{
                   Authorization: `Bearer ${auth.token}`
               })
                history.push(`/detail/${data.link._id}`)
            }catch (e) {

            }
        }
    }

    return(
        <div>
            <div className="col s8 offset-s2" style={{padding: '2rem'}}>
                <div className="input-field ">
                    <input
                        placeholder="Вставьте ссылку"
                        id="link"
                        type="text"
                        value={link}
                        onChange={e => setLink(e.target.value)}
                        onKeyPress={pressHandler}
                    />
                    <label htmlFor="link">Введите ссылку</label>
                </div>
            </div>
        </div>
    )
}