import cn from "classnames";

import { Card } from '@/components';

import { Typography } from "@goorm-dev/gds-challenge";

import styles from "./UserAnswer.module.scss";

const UserAnswer = () => {
  return (
    <Card center padding="none" className={cn(styles.emptyView, styles.centerContent)}>
        <Typography color="hint" token="paragraph-sm">
          이름?
        </Typography>
    </Card>
  );
};

export default UserAnswer;
