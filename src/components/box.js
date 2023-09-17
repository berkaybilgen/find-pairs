import { useState } from "react";

const Box = (props) => {
  const setOpened = () => {
    props.setOpened(props.index);
  };

  const imgUrl = props.isOpen ? "img/" + props.image : "img/box.jpg";
  let content = <img src={imgUrl} onClick={setOpened}></img>;

  if (props.isDone) {
    content = "";
  }

  return <div className="box">{content}</div>;
};

export default Box;
