import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import  cityData  from "../../Cities";
import{line1,line2,line3,line4,line5,line6,line7,line8,line9,line10,line11,line12,line13,line14,line15,line16,line17} from "./StopByLine";
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import {FaBus} from "react-icons/fa"

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');
console.log("Data exported:",cityData);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div    >
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><strong><div className="btn btn-outline-danger"><span className="mb-4" style={{color:"#362023"}}><FaBus/></span><span className="pl-1 mt-1">P1</span></div></strong>Terminus des Parcelles-Place Leclerc </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {line1.map((item=>item.destination.map((item,index)=>(
         <Timeline align="alternate" >

         <TimelineItem>
 
           <TimelineSeparator>
           <TimelineDot key={index} color="primary" />
         
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent>{item}</TimelineContent>
       </TimelineItem>
       </Timeline>
     ))))}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><strong><div className="btn btn-outline-danger"><span className="mb-4" style={{color:"#362023"}}><FaBus/></span><span className="pl-1 mt-1">P1</span></div></strong>Daroukhane-Leclerc </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {line2.map((item=>item.destination.map((item,index)=>(
         <Timeline align="alternate" >

         <TimelineItem>
 
           <TimelineSeparator>
           <TimelineDot key={index} color="primary" />
         
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent>{item}</TimelineContent>
       </TimelineItem>
       </Timeline>
     ))))}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><strong><div className="btn btn-outline-danger"><span className="mb-4" style={{color:"#362023"}}><FaBus/></span><span className="pl-1 mt-1">P1</span></div></strong>Daroukhane-Leclerc </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {line3.map((item=>item.destination.map((item,index)=>(
         <Timeline align="alternate" >

         <TimelineItem>
 
           <TimelineSeparator>
           <TimelineDot key={index} color="primary" />
         
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent>{item}</TimelineContent>
       </TimelineItem>
       </Timeline>
     ))))}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><strong><div className="btn btn-outline-danger"><span className="mb-4" style={{color:"#362023"}}><FaBus/></span><span className="pl-1 mt-1">P1</span></div></strong>Daroukhane-Leclerc </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {line4.map((item=>item.destination.map((item,index)=>(
         <Timeline align="alternate" >

         <TimelineItem>
 
           <TimelineSeparator>
           <TimelineDot key={index} color="primary" />
         
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent>{item}</TimelineContent>
       </TimelineItem>
       </Timeline>
     ))))}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><strong><div className="btn btn-outline-danger"><span className="mb-4" style={{color:"#362023"}}><FaBus/></span><span className="pl-1 mt-1">P1</span></div></strong>Daroukhane-Leclerc </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {line5.map((item=>item.destination.map((item,index)=>(
         <Timeline align="alternate" >

         <TimelineItem>
 
           <TimelineSeparator>
           <TimelineDot key={index} color="primary" />
         
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent>{item}</TimelineContent>
       </TimelineItem>
       </Timeline>
     ))))}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><strong><div className="btn btn-outline-danger"><span className="mb-4" style={{color:"#362023"}}><FaBus/></span><span className="pl-1 mt-1">P1</span></div></strong>Daroukhane-Leclerc </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {line6.map((item=>item.destination.map((item,index)=>(
         <Timeline align="alternate" >

         <TimelineItem>
 
           <TimelineSeparator>
           <TimelineDot key={index} color="primary" />
         
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent>{item}</TimelineContent>
       </TimelineItem>
       </Timeline>
     ))))}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><strong><div className="btn btn-outline-danger"><span className="mb-4" style={{color:"#362023"}}><FaBus/></span><span className="pl-1 mt-1">P1</span></div></strong>Daroukhane-Leclerc </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {line7.map((item=>item.destination.map((item,index)=>(
         <Timeline align="alternate" >

         <TimelineItem>
 
           <TimelineSeparator>
           <TimelineDot key={index} color="primary" />
         
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent>{item}</TimelineContent>
       </TimelineItem>
       </Timeline>
     ))))}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><strong><div className="btn btn-outline-danger"><span className="mb-4" style={{color:"#362023"}}><FaBus/></span><span className="pl-1 mt-1">P1</span></div></strong>Daroukhane-Leclerc </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {line8.map((item=>item.destination.map((item,index)=>(
         <Timeline align="alternate" >

         <TimelineItem>
 
           <TimelineSeparator>
           <TimelineDot key={index} color="primary" />
         
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent>{item}</TimelineContent>
       </TimelineItem>
       </Timeline>
     ))))}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><strong><div className="btn btn-outline-danger"><span className="mb-4" style={{color:"#362023"}}><FaBus/></span><span className="pl-1 mt-1">P1</span></div></strong>Daroukhane-Leclerc </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {line9.map((item=>item.destination.map((item,index)=>(
         <Timeline align="alternate" >

         <TimelineItem>
 
           <TimelineSeparator>
           <TimelineDot key={index} color="primary" />
         
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent>{item}</TimelineContent>
       </TimelineItem>
       </Timeline>
     ))))}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><strong><div className="btn btn-outline-danger"><span className="mb-4" style={{color:"#362023"}}><FaBus/></span><span className="pl-1 mt-1">P1</span></div></strong>Daroukhane-Leclerc </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {line10.map((item=>item.destination.map((item,index)=>(
         <Timeline align="alternate" >

         <TimelineItem>
 
           <TimelineSeparator>
           <TimelineDot key={index} color="primary" />
         
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent>{item}</TimelineContent>
       </TimelineItem>
       </Timeline>
     ))))}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><strong><div className="btn btn-outline-danger"><span className="mb-4" style={{color:"#362023"}}><FaBus/></span><span className="pl-1 mt-1">P1</span></div></strong>Daroukhane-Leclerc </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {line11.map((item=>item.destination.map((item,index)=>(
         <Timeline align="alternate" >

         <TimelineItem>
 
           <TimelineSeparator>
           <TimelineDot key={index} color="primary" />
         
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent>{item}</TimelineContent>
       </TimelineItem>
       </Timeline>
     ))))}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><strong><div className="btn btn-outline-danger"><span className="mb-4" style={{color:"#362023"}}><FaBus/></span><span className="pl-1 mt-1">P1</span></div></strong>Daroukhane-Leclerc </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {line12.map((item=>item.destination.map((item,index)=>(
         <Timeline align="alternate" >

         <TimelineItem>
 
           <TimelineSeparator>
           <TimelineDot key={index} color="primary" />
         
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent>{item}</TimelineContent>
       </TimelineItem>
       </Timeline>
     ))))}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><strong><div className="btn btn-outline-danger"><span className="mb-4" style={{color:"#362023"}}><FaBus/></span><span className="pl-1 mt-1">P1</span></div></strong>Daroukhane-Leclerc </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {line13.map((item=>item.destination.map((item,index)=>(
         <Timeline align="alternate" >

         <TimelineItem>
 
           <TimelineSeparator>
           <TimelineDot key={index} color="primary" />
         
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent>{item}</TimelineContent>
       </TimelineItem>
       </Timeline>
     ))))}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><strong><div className="btn btn-outline-danger"><span className="mb-4" style={{color:"#362023"}}><FaBus/></span><span className="pl-1 mt-1">P1</span></div></strong>Daroukhane-Leclerc </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {line14.map((item=>item.destination.map((item,index)=>(
         <Timeline align="alternate" >

         <TimelineItem>
 
           <TimelineSeparator>
           <TimelineDot key={index} color="primary" />
         
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent>{item}</TimelineContent>
       </TimelineItem>
       </Timeline>
     ))))}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><strong><div className="btn btn-outline-danger"><span className="mb-4" style={{color:"#362023"}}><FaBus/></span><span className="pl-1 mt-1">P1</span></div></strong>Daroukhane-Leclerc </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {line15.map((item=>item.destination.map((item,index)=>(
         <Timeline align="alternate" >

         <TimelineItem>
 
           <TimelineSeparator>
           <TimelineDot key={index} color="primary" />
         
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent>{item}</TimelineContent>
       </TimelineItem>
       </Timeline>
     ))))}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><strong><div className="btn btn-outline-danger"><span className="mb-4" style={{color:"#362023"}}><FaBus/></span><span className="pl-1 mt-1">P1</span></div></strong>Daroukhane-Leclerc </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {line16.map((item=>item.destination.map((item,index)=>(
         <Timeline align="alternate" >

         <TimelineItem>
 
           <TimelineSeparator>
           <TimelineDot key={index} color="primary" />
         
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent>{item}</TimelineContent>
       </TimelineItem>
       </Timeline>
     ))))}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><strong><div className="btn btn-outline-danger"><span className="mb-4" style={{color:"#362023"}}><FaBus/></span><span className="pl-1 mt-1">P1</span></div></strong>Daroukhane-Leclerc </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {line17.map((item=>item.destination.map((item,index)=>(
         <Timeline align="alternate" >

         <TimelineItem>
 
           <TimelineSeparator>
           <TimelineDot key={index} color="primary" />
         
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent>{item}</TimelineContent>
       </TimelineItem>
       </Timeline>
     ))))}
          </Typography>
        </AccordionDetails>
      </Accordion>
         </div>
  );
}