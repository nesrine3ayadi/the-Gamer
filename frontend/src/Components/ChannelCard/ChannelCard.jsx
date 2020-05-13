import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './ChannelCard.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ChannelCard(props) {
  const classNamees = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="clash-card archer">
    <div className="clash-card__image clash-card__image--archer">
      <img src={props.user.imageUser} alt="archer" />
    </div>
    <div className="clash-card__level clash-card__level--archer">Level 5</div>
    <div className="clash-card__unit-name">{props.user.username}</div>
    <div className="clash-card__unit-description">
      The Archer is a female warrior with sharp eyes. She wears a short, light green dress, a hooded cape, a leather belt and an attached small pouch.
    </div>

    <div className="clash-card__unit-stats clash-card__unit-stats--archer clearfix">
      <div className="one-third">
        <div className="stat">25</div>
        <div className="stat-value">Streaming</div>
      </div>

      <div className="one-third">
        <div className="stat">24</div>
        <div className="stat-value">Followers</div>
      </div>

      <div className="one-third no-border">
        <div className="stat">300</div>
        <div className="stat-value">Donate</div>
      </div>

    </div>

  </div> 
    // <Card classNameName={classNamees.root}>
    //   <CardHeader
    //     avatar={
    //       <Avatar aria-label="recipe" classNameName={classNamees.avatar}>
    //         R
    //       </Avatar>
    //     }
    //     action={
    //       <IconButton aria-label="settings">
    //         <MoreVertIcon />
    //       </IconButton>
    //     }
    //     title={props.user.username}
    //     subheader={props.user.createdAt}
    //   />
    //   <CardMedia
    //     classNameName={classNamees.media}
    //     image="/static/images/cards/paella.jpg"
    //     title="Paella dish"
    //   />
    //   <CardContent>
    //     <Typography variant="body2" color="textSecondary" component="p">
    //       This impressive paella is a perfect party dish and a fun meal to cook together with your
    //       guests. Add 1 cup of frozen peas along with the mussels, if you like.
    //     </Typography>
    //   </CardContent>
    //   <CardActions disableSpacing>
    //     <IconButton aria-label="add to favorites">
    //       <FavoriteIcon />
    //     </IconButton>
    //     <IconButton aria-label="share">
    //       <ShareIcon />
    //     </IconButton>
    //     <IconButton
    //       classNameName={clsx(classNamees.expand, {
    //         [classNamees.expandOpen]: expanded,
    //       })}
    //       onClick={handleExpandClick}
    //       aria-expanded={expanded}
    //       aria-label="show more"
    //     >
    //       <ExpandMoreIcon />
    //     </IconButton>
    //   </CardActions>
    //   <Collapse in={expanded} timeout="auto" unmountOnExit>
    //     <CardContent>
    //       <Typography paragraph>Method:</Typography>
    //       <Typography paragraph>
    //         Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
    //         minutes.
    //       </Typography>
          
         
    //       <Typography>
    //         Set aside off of the heat to let rest for 10 minutes, and then serve.
    //       </Typography>
    //     </CardContent>
    //   </Collapse>
    // </Card>
  );
}
