'use client'

import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: 1.7rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`

export const Form = styled.form`
  background-color: #fff;
  border-radius: 1rem;
  box-sizing: border-box;
  padding: 2rem;
  position: relative;
  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
`

export const FormModal = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  box-sizing: border-box;
  padding: 2rem;
  position: relative;
  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`

export const Input = styled.input`
  width: 24rem;
  border-radius: 0.5rem;
  padding: 10px;
  font-family: 'Roboto', sans-serif;
  border: 1px solid #ccc;
  resize: none;
  background-color: transparent;
  transition: border 0.3s ease-in-out;
  margin-bottom: 1rem;
  &:focus {
    border: 1px solid #8d66ff;
  }
  &:disabled {
    background-color: #f5f5f5;
  }
`

export const Textarea = styled.textarea`
  width: 24rem;
  border-radius: 0.5rem;
  padding: 10px;
  font-family: 'Roboto', sans-serif;
  border: 1px solid #ccc;
  resize: none;
  background-color: transparent;
  transition: border 0.3s ease-in-out;
  margin-bottom: 1rem;
  height: 9rem;
  resize: none;
  &:focus {
    border: 1px solid #8d66ff;
  }
  &:disabled {
    background-color: #f5f5f5;
  }
`

export const Button = styled.button`
  background-color: #8d66ff;
  color: #fff;
  border-radius: 0.6rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 1rem 2rem;
  box-sizing: border-box;
  align-self: flex-end;
  font-weight: 600;
  /* font-size: 0.9rem; */
  transition:
    background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;
  &:hover {
    background-color: #664daf;
  }
`

export const ButtonDelete = styled.button`
  background-color: #ff6666;
  color: #fff;
  border-radius: 0.6rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 1rem 2rem;
  box-sizing: border-box;
  align-self: flex-end;
  font-weight: 600;
  /* font-size: 0.9rem; */
  transition:
    background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;
  &:hover {
    background-color: #cb5a5a;
  }
`

export const Message = styled.div`
  position: absolute;
  margin-top: 1rem;
  left: 0;
  bottom: -3.3rem;
  padding: 0.7rem;
  width: 100%;
  background-color: #ff6666;
  border-radius: 0.6rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`
