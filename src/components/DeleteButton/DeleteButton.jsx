// EditButton.jsx
import React from "react";
import { Button } from "@goorm-dev/gds-challenge";
import { TrashIcon } from "@goorm-dev/gds-icons";
import styles from "./DeleteButton.module.scss";

const DeleteButton = () => {
    return (
        <Button icon={<TrashIcon />} iconSide="left" size="sm" color="basic" content="start" outline>삭제하기</Button>
    )
        ;
};

export default DeleteButton;
