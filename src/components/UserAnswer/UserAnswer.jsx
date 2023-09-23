// UserAnswer.jsx
import React, { useState } from 'react';
import cn from "classnames";
import { Card } from "@/components";
import { Typography } from "@goorm-dev/gds-challenge";
import styles from "./UserAnswer.module.scss";
import EditButton from "@/components/EditButton/EditButton";
import Users from "@/components/Users/Users"

const UserAnswer = () => {
    const [userCount, setUserCount] = useState(0);  // Initialize userCount state

    return (
        <Card center padding="none" className={cn(styles.emptyView, styles.centerContent)}>
            <div className={styles.listHeader}>
                <Typography weight={500} color="dark">
                    {`응답한 참여자`}
                </Typography>
                <Typography color="primary" weight={500} >{userCount}</Typography>
            </div>
            <div className={styles.list}>
                <Users setUserCount={setUserCount} />
            </div>
        </Card>
    );
};

export default UserAnswer;
