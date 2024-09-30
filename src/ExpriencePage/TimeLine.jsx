import { useState } from 'react';
import './TimeLine.css';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

const ExperienceTimeline = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverText, setPopoverText] = useState('');

  const handlePopoverOpen = (event, text) => {
    setAnchorEl(event.currentTarget);
    setPopoverText(text);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setPopoverText('');
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Timeline>
        <TimelineItem
          onMouseEnter={(e) => handlePopoverOpen(e, 'Developed real-time live stream data tools, implemented CI/CD pipelines, and contributed to Fanbase dashboard development.')}
          onMouseLeave={handlePopoverClose}
        >
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h3>LEARFIELD</h3> 
            <p>Software Engineer Intern <br/>(Summer 2024)</p>
          </TimelineContent>
        </TimelineItem>
        
        <TimelineItem
          onMouseEnter={(e) => handlePopoverOpen(e, 'Specialized in web development, machine learning / deep learning technologies, and engineering leadership.')}
          onMouseLeave={handlePopoverClose}
        >
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h3>Rice University</h3>
            <p>Master of Computer Science <br/>(2022-2024)</p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem
          onMouseEnter={(e) => handlePopoverOpen(e, 'SIDEARM Sports, Web Developer Intern: Built client-facing web solutions for over 20 college athletics departments.')}
          onMouseLeave={handlePopoverClose}
        >
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h3>SIDEARM Sports</h3>
            <p>Web Developer Intern <br/>(Summer 2022&2023)</p>
          </TimelineContent>
        </TimelineItem>
        
        <TimelineItem
          onMouseEnter={(e) => handlePopoverOpen(e, 'Syracuse University, Bachelor of Computer Science: Graduated with honors, focused on algorithms, data structures, Python, C++, Java, Software development, Operating Systems, and Computer Networks.')}
          onMouseLeave={handlePopoverClose}
        >
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h3>Syracuse University</h3>
            <p>BS of Computer Science <br/>(2019-2022)</p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>

      {/* Popover for displaying detailed descriptions */}
      <Popover
        id="mouse-over-popover"
        sx={{ pointerEvents: 'none' }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ 
          p: 1, 
          maxWidth: '300px', 
          wordWrap: 'break-word', 
          whiteSpace: 'normal' 
        }}>
          {popoverText}
        </Typography>
      </Popover>
    </div>
  );
};

export default ExperienceTimeline;