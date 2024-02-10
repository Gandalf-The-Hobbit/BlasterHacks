import React, { useState } from 'react';
import classes from './chat.module.css';
import { Quote } from '../../requests/quote';
import Button from '../button/button';
import ChatReq from "../../requests/chatReq";

function Chat() {
	const [input, setInput] = useState("");
	const [output, setOutput] = useState("");

	function handleInput(e) {
		setInput(e.target.value)
	}
	async function handleSubmit() {
		const resp = await ChatReq();
		console.log(resp);
		//setOutput(resp['content']);
	}

    return (
        <>
			<h3>Chat Goes Here</h3>
			<input text='Prompt' placeholder='Enter your question here' value={input} onChange={handleInput}></input>
			<Button text='Submit' onClickFunc={handleSubmit}></Button>
			<h3>{output}</h3>
		</>
    );
}

export default Chat;
