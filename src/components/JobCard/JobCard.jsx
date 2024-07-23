import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import Typography from '@mui/joy/Typography';

export default function JobCard({imgSrc,Jobtitle,jobDescription}) {
  return (
    <Card
      variant="outlined"
      sx={{
        width: '100%',
        borderColor:'#e8eaed',
        backgroundColor:'transparent',
        overflow: 'auto',
        // resize: 'horizontal',
        margin:'1rem 0'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Avatar src={imgSrc}size="lg" />
        <AvatarGroup size="sm" sx={{ '--Avatar-size': '28px' }}>
          <Avatar src="/static/images/avatar/2.jpg" />
          <Avatar src="/static/images/avatar/3.jpg" />
          <Avatar src="/static/images/avatar/4.jpg" />
          <Avatar>+4K</Avatar>
        </AvatarGroup>
      </Box>
      <CardContent>
        <Typography level="title-lg">{Jobtitle}</Typography>
        <Typography level="body-sm">
          We are a community of developers prepping for coding interviews,
          participate, chat with others and get better at interviewing.
        </Typography>
      </CardContent>
      <CardActions buttonFlex="0 1 120px">
        <Button variant="outlined" color="neutral">
          View
        </Button>
        <Button variant="solid" color="primary">
          Apply
        </Button>
      </CardActions>
    </Card>
  );
}
