import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import Chip from "@material-ui/core/Chip";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {CTX} from './Store'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "50px",
    padding: theme.spacing(3, 2),
  },
  flex: {
    display: "Flex",
    alignItems: "center"
  },
  topicsWindow: {
    width: "300px",
    height: "300px",
    borderRight: "1px solid grey",
  },
  chatWindow: {
    width: "70%",
    height: "300px",
  },
  chatBox: {
    width: "85%",
  },
  button: {
    width: "15%",
  },
}));

function Dashboard() {
  const classes = useStyles();
// CTX store
const {allChats, sendChatAction, user} = React.useContext(CTX)
const topics = Object.keys(allChats);


//Local state
  const [activeTopic, changeActiveTopic] = React.useState(topics[0])
  const [textValue, changeTextValue] = React.useState('')


  return (
    <div className={classes.root}>
      <Paper elevation={1} style={{ margin: "auto" }}>
        <Typography variant="h3" component="h3">
          Chat app
        </Typography>
        <Typography variant="h5" component="h5">
          {activeTopic}
        </Typography>
        <div className={classes.flex}>
          <div
            ClassName={classes.topicsWindow}
            style={{
              width: "300px",
              height: "300px",
              borderRight: "1px solid grey",
            }}
          >
            <List>
              {topics.map((topic) => (
                <ListItem button key={topic}  onClick={e => changeActiveTopic(e.target.innerText)} >
                  <ListItemText primary={topic}>
                   
                    </ListItemText>
                </ListItem>
              ))}
              
            </List>
          </div>
          <div  ClassName={classes.chatWindow} style={{ width: "70%", height: "300px", padding:"20px" }}          >
            {allChats[activeTopic].map((chat, i) => (
              <div className={classes.flex} key={i}>
                <Chip label={chat.from} />
                {console.log('pppppp ' + chat.msg)}
                <Typography variant="body1" gutterBottom>{chat.msg}</Typography>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.flex}>
        <TextField id="standard-basic" label="send a chat" className={classes.chatBox} value={textValue} onChange={(e)=> changeTextValue(e.target.value)} />
            <Button variant="contained" color="primary" onClick={()=>{sendChatAction({from:user, msg: textValue, topic: activeTopic}); changeTextValue('');
            
            }} >
                  Send
           </Button>
        </div>
      </Paper>
    </div>
  );
}

export default Dashboard;
