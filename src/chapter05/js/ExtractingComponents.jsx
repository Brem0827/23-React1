import React from "react";

/*
function Comment(props){
    return(
        <div className="comment">
          <div className="user-info">
            <img className="avatar"
              src={props.author.avatarUrl}
              alt={props.author.name}
            />
            <div className="user-info-name">
              {props.author.name}
            </div>
          </div>
          <div className="comment-text">
            {props.text}
          </div>
          <div className="comment-date">
            {FormDataEvent(props.date)}
          </div>
        </div>
    )
}
*/
function Avatar(props){
    return(
        <img className="avatar"
              src={props.author.avatarUrl}
              alt={props.author.name}
            />
    )
}

function UserInfo(props){
    return(
        <div className="user-info">
            <Avatar user={props.user} />
            <div className="user-info-name">
              {props.user.name}
            </div>
        </div>
    )
}

function Comment(props){
  return(
    <div className="comment">
        <UserInfo user={props.author} />
        <div className="comment-text">
          {props.text}
        </div>
        <div className="comment-date">
          {formatDate(prps.date)}
        </div>
    </div>
  )
}