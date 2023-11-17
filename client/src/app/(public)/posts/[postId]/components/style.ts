'use client'

import styled from 'styled-components'

export const TextArea = styled.textarea`
  width: 50%;
  border-radius: 0.6rem;
  padding: 10px;
  font-family: 'Roboto', sans-serif;
  border: 1px solid #ccc;
  resize: none;
  transition: border 0.3s ease-in-out;
  &:focus {
    border: 1px solid #8d66ff;
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 4.5rem;
  margin-bottom: 1.2rem;
`

export const Button = styled.button`
  border-radius: 0.6rem;
  background-color: #eee;
  color: #999;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 1rem;
  box-sizing: border-box;
  margin-left: 0.5rem;
  transition:
    background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;
  &:hover {
    background-color: #8d66ff;
    color: #fff;
  }
`
