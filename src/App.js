import React from "react";
import "./style.css";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

export default function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Productos a futuro'}/>

    </>
  );
}
