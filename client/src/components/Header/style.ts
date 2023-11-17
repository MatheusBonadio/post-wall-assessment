'use client'

import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 100vh;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  z-index: 99;
  width: 250px;
  background-color: #fff;
  transition: width 0.3s;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  padding-bottom: 25px;
  box-sizing: border-box;
`

export const Logo = styled.a`
  min-height: 60px;
  position: relative;
  box-sizing: border-box;
  transition: min-width 0.3s;
  div {
    width: 100%;
    height: 70px;
    background-size: 170px;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/img/logo.png');
    cursor: pointer;
    transition: width 0.3s;
  }
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-size: 310px;
  background-repeat: no-repeat;
  background-position: bottom-52px right-10px;
  white-space: nowrap;
`

export const List = styled.a`
  height: 40px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #8d66ff;
  border-radius: 15px;
  margin: 3px 0;
  box-sizing: border-box;
  padding-left: 16px;
  transition: 0.3s;
  user-select: none;
  &:hover {
    background-color: #efeaff;
  }
  span {
    margin-left: 12px;
    font-size: 15px;
    opacity: 1;
    visibility: visible;
    transition: 0.3s;
    color: #000;
  }
`

export const Category = styled.div`
  color: #818181;
  font-size: 12px;
  margin: 20px 0 10px 15px;
  letter-spacing: 1px;
`

export const User = styled.div`
  display: flex;
  align-items: center;
`

export const Info = styled.div`
  &:first-child {
    color: #818181;
    font-size: 12px;
    margin-bottom: 5px;
  }
`

export const UserImg = styled.div`
  min-width: 40px;
  min-height: 40px;
  background-color: #efeaff;
  color: #300f93;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.6rem;
  font-weight: 600;
  font-size: 0.9rem;
  margin-right: 10px;
  border: 1px solid #8d66ff;
`
