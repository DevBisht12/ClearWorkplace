import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import Typography from '@mui/joy/Typography';


export default function HomeJobCard({imgSrc,cTitle}) {
  return (
    <Card
      variant="outlined"
      sx={{
        width: 270,
        margin:' 0 2rem'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Avatar src={imgSrc} size="sm" />
      </Box>
      <CardContent>
        <Typography level="title-lg">{cTitle}</Typography>
        <Typography level="body-sm">
          We are a community of developers prepping for coding interviews,
          participate
        </Typography>
      </CardContent>
      <CardActions buttonFlex="0 1 120px">
        
        <Button variant="outlined" color="neutral">
          View
        </Button>
        <Button variant="solid" sx={{backgroundColor:'black'}}>
          Apply
        </Button>
      </CardActions>
    </Card>
  );
}

