import React from "react";
import flv from "flv.js";
import { connect } from "react-redux";
import { fetchStream } from "../../Actions/action";
import { Player } from "video-react";
import Navbar from "../Navbar/navbar2";
import Chat from "../Chat/Chat";

class StreamShow extends React.Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const id = String(this.props.match.params.id);
    this.props.fetchStream(id);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }

    const id = String(this.props.match.params.id);
    this.player = flv.createPlayer({
      type: "flv",
      url: "http://localhost:8000/live/" + id + ".flv",
    });

    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading..</div>;
    }

    return (
        <div>

      
        <Navbar />
      <div className="show container">
      
        <h1>Enjoy Watching {this.props.stream.title}</h1>
        <div className="row">
        
          <div className="col-md-8 col-sm-12">
            <video   ref={this.videoRef} style={{ width: "100%" }}    controls={true}   />

            <h5>{this.props.stream.description}</h5>
          </div>
          <div className="col-md-4 col-sm-12">
          <Chat  idprofile={this.props.match.params.idUser} />
          </div>
        </div>
      </div>   </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
