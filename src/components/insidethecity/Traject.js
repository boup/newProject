import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
const data = [
  {
    id: 1,
    line: "Parcelle Assainie",
    color: "primary",
    value: "Line 21",
    info: "depart: 17:30---arr:18:15",
  },
  {
    id: 2,
    line: "Dior",
    color: null,
    value: "Line 21",
    info: "depart: 17:30---arr:18:15",
  },
  {
    id: 3,
    line: "Diamelaye",
    color: "secondary",
    value: "Line 21",
    info: "depart: 17:30---arr:18:15",
  },
  {
    id: 4,
    line: "VDN",
    color: "secondary",
    value: "Line 21",
    info: "depart: 17:30---arr:18:15",
  },
];
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function Traject() {
  const [change, setChange] = React.useState(false);
  const classes = useStyles();

  const handdleChange = () => {
    setChange(!change);
  };
  return (
    <div className="timeline_section">
      <Timeline align="alternate">
        {data.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                {item.line}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color={`${item.color}`} onClick={handdleChange} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              {change && (
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="h6" component="h1">
                    {item.value}
                  </Typography>
                  <Typography>{item.info}</Typography>
                </Paper>
              )}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
