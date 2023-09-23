// EditButton.jsx
import React from "react";
import { Button } from "@goorm-dev/gds-challenge";
import { EditIcon } from "@goorm-dev/gds-icons";
import styles from "./EditButton.module.scss";

const EditButton = () => {
  return (
    <Button icon={<EditIcon />} iconSide="left" size="sm" color="basic" content="start" outline>수정하기</Button>
)
  ;
};

export default EditButton;
