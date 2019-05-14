import React from "react";
import ReactDOM from "react-dom";

console.log(__dirname);

class Image extends React.Component {
    render() {
        return <img src={this.props.image_path} alt={this.props.alt} 
                width={this.props.height} height={this.props.height}/>
    }
}

class ProfileImage extends React.Component {
    render() {
        return <Image image_path={this.props.image_path} alt="Profile Picture" 
                width="128" height="128"/>
    }
}

const Index = () => {
  return (
    <div className="main">
        <div className="profile">
            <ProfileImage image_path="../sunset-pexels.jpeg"/>
        </div>
    </div>);
};

ReactDOM.render(<Index />, document.getElementById("index"));