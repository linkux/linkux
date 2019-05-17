import React from "react";

class Image extends React.Component {
    render() {
        return <img src={this.props.image_path} alt={this.props.alt} 
                width={this.props.height} height={this.props.height}/>
    }
}

class ProfileImage extends React.Component {
    render() {
        return <a href="../src/profile.html" target="_blank">
                    <Image image_path={this.props.image_path} alt="Profile Picture" width="128" height="128"/>
                </a>
    }
}

export default ProfileImage;