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
import {FaBus} from "react-icons/fa"

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
    

  return (
  
    <div className=" container-fluid timeline_section ">
   {props.line?  <strong><div className="btn btn-outline-danger"><span className="mb-4" style={{color:"#362023"}}><FaBus/></span><span className="pl-1 mt-1"> {props.line}</span></div></strong>:null}
      <Timeline align="alternate"className="Home" >
      {/*{props.datas.map((item)=>item.map((item)=>item.destination.map((item,index)=>(*/}
      {props.datas.map((item,index)=>item.map((item)=>(

        <TimelineItem>

          <TimelineSeparator>
          <TimelineDot key={index} color="primary" />
        
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>{item}</TimelineContent>
           


      </TimelineItem>
        ))
      )}
      </Timeline>
     {/* {props.datas.map((item, index) => (
        <Timeline key={index} >
          {item.map((item, index) => (

                  
           {/* <TimelineItem key={index}>
              
              <TimelineOppositeContent>
                {item.destination.map((item, index) => (
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
                      <FaBus/> {item.number}
                    </Typography>
                    <Typography>Dep:15:18-Arr.18:25</Typography>
                  </Paper>
                )}
                
              </TimelineContent>
              
                </TimelineItem>
          ))}
        </Timeline>
      ))}*/}
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
