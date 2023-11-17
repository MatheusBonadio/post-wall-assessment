'use client'

import styled from 'styled-components'

export const Container = styled.div`
  margin: 1rem 2rem;
  background-color: #fff;
  border-radius: 1rem;
  padding: 2rem;
`

export const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #001a45;
`

export const Subtitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 1rem 0;
  color: #001a45;
`

export const AuthorContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`
export const AuthorImg = styled.div`
  min-width: 45px;
  height: 45px;
  background-color: #efeaff;
  color: #300f93;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.6rem;
  font-weight: 600;
  font-size: 0.9rem;
  border: 1px solid #8d66ff;
`

export const DateContainer = styled.div`
  margin-left: 10px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  font-size: 1rem;
`

export const Author = styled.span`
  font-weight: 500;
  color: #001a45;
`

export const Date = styled.span`
  font-weight: 300;
  font-size: 0.9rem;
`

export const Description = styled.p`
  text-align: justify;
  line-height: 1.4rem;
  overflow: hidden;
  position: relative;
  margin-bottom: 1rem;
`

export const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`

export const IndicatorHover = styled.div`
  background-color: #eee;
  color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  padding: 0.4rem 0.9rem;
  border-radius: 0.8rem;
  cursor: pointer;
  user-select: none;
  margin-right: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  transition:
    background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;
  &:hover {
    background-color: #8d66ff;
    color: #fff;
  }
`

export const IconHover = styled.div`
  background-color: #eee;
  color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  padding: 0.4rem;
  border-radius: 0.8rem;
  cursor: pointer;
  user-select: none;
  margin-right: 0.3rem;
  transition:
    background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;
  &:hover {
    background-color: #8d66ff;
    color: #fff;
  }
`

export const Hr = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin-bottom: 1rem;
`

export const PostImg = styled.div`
  /* min-width: 25%; */
  max-width: 768px;
  width: 100%;
  height: 150px;
  margin-top: auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 0.8rem;
  opacity: 0.9;
  margin-bottom: 1rem;
`
