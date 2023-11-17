'use client'

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* align-items: center; */
  height: calc(100vh - 4rem);
  padding: 1rem 0;
`

export const PostContainer = styled.ul`
  display: flex;
  flex-direction: row;
  padding-left: 2rem;
  padding-right: 1rem;
  width: 100%;
  min-width: 200px;
  /* max-width: 1012px; */
  flex-wrap: wrap;
`

export const Post = styled.li`
  display: flex;
  flex-grow: 1;
  background-color: #fff;
  flex-direction: row;
  min-width: calc(50% - 1rem);
  /* overflow: hidden; */
  border-radius: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  /* margin: 0 2rem 1.5rem 2rem; */
  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
  padding: 1.7rem 2rem;
  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

export const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 1.7rem;
  flex-grow: 1;
`

export const PostImg = styled.div`
  min-width: 25%;
  width: 25%;
  height: 100%;
  margin-top: auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 0.8rem;
  opacity: 0.9;
  @media only screen and (max-width: 768px) {
    height: 200px;
    width: 100%;
    margin-bottom: 0.8rem;
  }
`

export const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #001a45;
  position: relative;
  &:after {
    content: '>';
    font-size: 1.1rem;
    opacity: 0;
    position: absolute;
    line-height: 2rem;
    margin-left: 5px;
    transition:
      opacity 0.2s ease-in-out,
      margin-left 0.2s ease-in-out;
  }
  &:hover {
    &:after {
      opacity: 1;
      margin-left: 10px;
    }
  }
`

export const AuthorContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`
export const AuthorImg = styled.div`
  min-width: 45px;
  min-height: 45px;
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
  margin-bottom: 0.5rem;
  line-height: 1.4rem;
  max-height: 5.6rem;
  overflow: hidden;
  position: relative;
  &:after {
    content: ' ';
    position: absolute;
    left: 0;
    top: calc(5.6rem - 30px);
    width: 100%;
    height: 30px;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 5%,
      rgba(0, 212, 255, 0) 100%
    );
  }
`

export const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const IndicatorHover = styled.div`
  margin-top: 0.5rem;
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

export const CreatePost = styled.div`
  display: flex;
  background-color: #fff;
  align-items: center;
  flex-grow: 1;
  border-radius: 1rem;
  margin: 0 2rem 1.5rem 2rem;
  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
  padding: 1rem 2rem;
  cursor: pointer;
  transition:
    color 0.2s ease-in-out,
    background-color 0.2s ease-in-out;
  &:hover {
    color: #fff;
    background-color: #8d66ff;
  }
`
