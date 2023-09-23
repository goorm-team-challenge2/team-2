// EditButton.jsx
import React from "react";
import { Button } from "@goorm-dev/gds-challenge";  // 가정: Button 컴포넌트가 이 모듈에서 가져올 수 있습니다.
import { EditIcon } from "@goorm-dev/gds-icons";
import styles from "./EditButton.module.scss";

const EditButton = () => {
  return (
    <Button icon={<EditIcon />} iconSide="left" size="sm" color="basic" content="start" outline>수정하기</Button>
)
  ;
};

export default EditButton;
