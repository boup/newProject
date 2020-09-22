import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import  cityData  from "../LineBetweenCities";
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
import {line1,line2,line3,line4,line5,line6,line7,line8,line9,line10,line11,line12,line13,line14,line15} from "./LineByLine";
import {FaBus} from "react-icons/fa"
import InsideCityModal from './InsideCityModal';
import ShowDataContainer from '../insidethecity/ShowDataContainer';

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    padding:5,
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

  const handdleClick = ()=> {
      return <InsideCityModal/>;
  }
  return (
    <div>
         
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
       
          <Typography><strong><div className="btn btn-outline-danger"><span className="mb-4" style={{color:"#362023"}}><FaBus/></span><span className="pl-1 mt-1">DDK</span></div></strong>Dakar-Tivaoune </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              {line1.map((item,intex)=> (<InsideCityModal time= {item.time} operator={item.operator} price={item.price} from="Dakar" to="Tivaone" />))}
          
         {line1.map((item=>item.destination.map((item,index)=>(
         <>
         <Timeline align="alternate" >

        <TimelineItem>

          <TimelineSeparator>
              
           <TimelineDot key={index} color="primary"/> 
        
          <TimelineConnector />
        </TimelineSeparator>
       
        <TimelineContent>{item}</TimelineContent>
      </TimelineItem>
      </Timeline>
      
      </>
    ))))}
         </Typography>
        </AccordionDetails>
      </Accordion>
     
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><strong><div className="btn btn-outline-danger"><span className="mb-4" style={{color:"#362023"}}><FaBus/></span><span className="pl-1 mt-1"> DDK</span></div></strong>Dakar-Fatick </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {line2.map((item,intex)=> (<InsideCityModal time= {item.time} operator={item.operator} price={item.price} from="Dakar" to="Fatick" />))}

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
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><strong><div className="btn btn-outline-danger"><span className="mb-4" style={{color:"#362023"}}><FaBus/></span><span className="pl-1 mt-1">DDK</span></div></strong>Dakar-Kaolack </Typography>
       
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {line3.map((item,intex)=> (<InsideCityModal time= {item.time} operator={item.operator} price={item.price} from="Dakar" to="Kaolack" />))}

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
      <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><strong><div className="btn btn-outline-danger"><span className="mb-4" style={{color:"#362023"}}><FaBus/></span><span className="pl-1 mt-1">DDK</span></div></strong> Dakar-Podor/Ndioum </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {line4.map((item,intex)=> (<InsideCityModal time= {item.time} operator={item.operator} price={item.price}  from="Dakar" to="Podor/Ndioum" />))}

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
      <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><strong><div className="btn btn-outline-danger"><span className="mb-4" style={{color:"#362023"}}><FaBus/></span><span className="pl-1 mt-1">DDK</span></div></strong>Dakar-Saint-Louis </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
    

          {line5.map((item,intex)=> (<InsideCityModal time= {item.time} operator={item.operator} price={item.price} from="Dakar" to="Saint-Louis" />))}

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
      <Accordion square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><strong><div className="btn btn-outline-danger"><span className="mb-4" style={{color:"#362023"}}><FaBus/></span><span className="pl-1 mt-1">DDK</span></div></strong>Dakar-Ziguinchor </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {line6.map((item,intex)=> (<InsideCityModal time= {item.time} operator={item.operator} price={item.price} from="Dakar" to="Ziguinchor" />))}

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
      <Accordion square expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><strong><div className="btn btn-outline-danger"><span className="mb-4" style={{color:"#362023"}}><FaBus/></span><span className="pl-1 mt-1">DDK</span></div></strong>Dakar-Ourossogui/Matam </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {line7.map((item,intex)=> (<InsideCityModal time= {item.time} operator={item.operator} price={item.price} from="Dakar" to="Ourossogui/Matam" />))}

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
      <Accordion square expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><strong><div className="btn btn-outline-danger"><span className="mb-4" style={{color:"#362023"}}><FaBus/></span><span className="pl-1 mt-1">DDK</span></div></strong>Dakar-Kaffrine </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {line8.map((item,intex)=> (<InsideCityModal time= {item.time} operator={item.operator} price={item.price} from="Dakar" to="Kaffrine" />))}

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
      <Accordion square expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><strong><div className="btn btn-outline-danger"><span className="mb-4" style={{color:"#362023"}}><FaBus/></span><span className="pl-1 mt-1">DDK</span></div></strong>Dakar-Koungheul </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {line9.map((item,intex)=> (<InsideCityModal time= {item.time} operator={item.operator} price={item.price} from="Dakar" to="Kounghel" />))}

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
      <Accordion square expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><strong><div className="btn btn-outline-danger"><span className="mb-4" style={{color:"#362023"}}><FaBus/></span><span className="pl-1 mt-1">DDK</span></div></strong>Dakar-Tambacounda </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {line10.map((item,intex)=> (<InsideCityModal time= {item.time} operator={item.operator} price={item.price} from="Dakar" to="Tambacounda" />))}

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
      <Accordion square expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><strong><div className="btn btn-outline-danger"><span className="mb-4" style={{color:"#362023"}}><FaBus/></span><span className="pl-1 mt-1">DDK</span></div></strong>Dakar-Velingara </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {line11.map((item,intex)=> (<InsideCityModal time= {item.time} operator={item.operator} price={item.price}  from="Dakar" to="Velingara" />))}

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
      <Accordion square expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><strong><div className="btn btn-outline-danger"><span className="mb-4" style={{color:"#362023"}}><FaBus/></span><span className="pl-1 mt-1">DDK</span></div></strong>Dakar-Kolda </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {line12.map((item,intex)=> (<InsideCityModal time= {item.time} operator={item.operator} price={item.price} from="Dakar" to="Kolda" />))}

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
      <Accordion square expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><strong><div className="btn btn-outline-danger"><span className="mb-4" style={{color:"#362023"}}><FaBus/></span><span className="pl-1 mt-1">DDK</span></div></strong>Dakar-Thies </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {line13.map((item,intex)=> (<InsideCityModal time= {item.time} operator={item.operator} price={item.price} from="Dakar" to="Thies" />))}

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
      <Accordion square expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><strong><div className="btn btn-outline-danger"><span className="mb-4" style={{color:"#362023"}}><FaBus/></span><span className="pl-1 mt-1">DDK</span></div></strong>Dakar-Diourbel </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {line14.map((item,intex)=> (<InsideCityModal time= {item.time} operator={item.operator} price={item.price} from="Dakar" to="Diourbel" />))}

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
      <Accordion square expanded={expanded === 'panel15'} onChange={handleChange('panel15')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><strong><div className="btn btn-outline-danger"><span className="mb-4" style={{color:"#362023"}}><FaBus/></span><span className="pl-1 mt-1">DDK</span></div></strong>Dakar-Touba </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {line15.map((item,index)=> (<InsideCityModal key={index} time= {item.time} operator={item.operator} price={item.price} from="Dakar" to="Touba" />))}

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
    </div>
  );
}