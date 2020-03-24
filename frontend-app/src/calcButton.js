import React from 'react';
import './App.css';


export const ButtonNumber = props =>  <button className={'button'} onClick={() => props.onClick(props.value)}>{props.value}</button>

export const OperationButton = props =>  <button className={'button'} onClick={() => props.onClick(props.value)}>{props.value}</button>

export const CleanButtonDEL = props =>  <button className={'clean-button'} onClick={() => props.onClick()}>{props.value}</button>

export const CleanButtonAC = props =>  <button className={'clean-button'} onClick={() => props.onClick()}>{props.value}</button>

export const ResultButton = props =>  <button className={'button'} onClick={() => props.onClick()}>{props.value}</button>







