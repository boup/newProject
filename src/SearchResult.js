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
/*const data = [
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
*/
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

function SearchResult(props) {
  const [change, setChange] = React.useState(false);
  const classes = useStyles();

  const handdleChange = () => {
    setChange(!change);
  };
  const da = props.datas.map((item) =>
    item.map((item) => item.stop.map((item) => item))
  );
  const dat = da.map((item) => item[0]);
  const d = dat.map((item) => item[0]);
  const d1 = dat.map((item) => item[item.length - 1]);
  console.log("first:", d, "last", d1);
  return (
    <div className="timeline_section">
      {props.datas.map((item, index) => (
        <Timeline key={index} align="alternate">
          {item.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent>
                {item.stop.map((item, index) => (
                  <Typography key={index} variant="body2" color="textSecondary">
                    {item}
                  </Typography>
                ))}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary" onClick={handdleChange} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                {change && (
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1">
                      Line {item.line}
                    </Typography>
                    <Typography>Dep:15:18-Arr.18:25</Typography>
                  </Paper>
                )}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      ))}
    </div>
  );
}
export default SearchResult;
{
  /*import React from "react";

function SearchResult(props) {
  return (
    <div className="container mt-5 text-center">
      {props.data.map((item, index) => (
        <div key={index}>
          <ul className="bg-warning mt-5 text-success">
            {item.map((item, index) => (
              <li key={index}> Line{item.line}</li>
            ))}
          </ul>
          <div className="row mt-5 ">
            <li>{props.input_0}</li>
            <li>{props.input_1}</li>
          </div>
        </div>
      ))}
    </div>
  );
}


export default SearchResult;*/
}
