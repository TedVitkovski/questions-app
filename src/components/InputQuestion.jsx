import React from 'react'
import styled from 'styled-components'
import Textarea from 'react-textarea-autosize'


const InputQuestion = ({ className }) => {
    return (
        <Textarea
            className={className}
            maxRows={20}
            minRows={3}
            onHeightChange={(height) => {
                console.log(height)
            }}
        />
    )
}

const StyledInputQuestion = styled(InputQuestion)`
    /* overflow-y: hidden;
    font-size: 1.2rem;
    box-shadow: inset 0 0 0 5px #fff;
    border: none;
    outline: none;
    resize: none;
    overflow-wrap: break-word;
    cursor: pointer;
    width: 60%;
    min-width: 230px;
    margin-top: 3rem;
    padding: 1.4rem 2rem;
    background-color: #eee;
    color: #09b781;
    transition: all, 0.2s, ease-in;
    &:hover {
        outline: none;
        background-color: white;
        box-shadow: inset 0 0 0 5px #eee;
    }
    &:focus {
        outline: none;
        background-color: white;
        box-shadow: inset 0 0 0 5px #eee;
    } */

`

export default StyledInputQuestion