import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  margin: 0 auto;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 8px;
  border-radius: 4px;
  border: none;
  background-color: #4caf50;
  color: #fff;
  cursor: pointer;
`;

function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    // You can replace the console.log() with your own submission code
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name:
        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </Label>
      <Label>
        Email:
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Label>
      <Label>
        Message:
        <TextArea value={message} onChange={(e) => setMessage(e.target.value)} />
      </Label>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default FeedbackForm;
