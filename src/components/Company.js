import React from 'react';

export default function Company(props) {
  return (
    <div className="card-co">
      <div className="media-co" style={{backgroundImage: `url(${props.image})`}} />
      <div>
        <h2 className="title-co">{props.company}</h2>
        <p className="text-co">{props.type} • {props.place} • {props.where}</p>
        <p className="desc-co" style={{fontSize: '80%', color: '#666', margin: '20px'}}>{props.desc}</p>
        <h3 className="link-co" style={{textAlign: 'left'}}>{props.role3} <a style={{color: "white", fontSize: "70%"}}>{props.date3}</a></h3>
        <p className="desc-co" style={{textAlign: 'left', marginLeft: '10px'}}>{props.desc5}</p>
        <p className="desc-co" style={{textAlign: 'left', marginLeft: '10px'}}>{props.desc6}</p>
        <h3 className="link-co" style={{textAlign: 'left'}}>{props.role2} <a style={{color: "white", fontSize: "70%"}}>{props.date2}</a></h3>
        <p className="desc-co" style={{textAlign: 'left', marginLeft: '10px'}}>{props.desc3}</p>
        <p className="desc-co" style={{textAlign: 'left', marginLeft: '10px'}}>{props.desc4}</p>
        <h3 className="link-co" style={{textAlign: 'left'}}>{props.role1} <a style={{color: "white", fontSize: "70%"}}>{props.date1}</a></h3>
        <p className="desc-co" style={{textAlign: 'left', marginLeft: '10px'}}>{props.desc1}</p>
        <p className="desc-co" style={{textAlign: 'left', marginLeft: '10px'}}>{props.desc2}</p>
        <a className="link-co" style={{textAlign: 'left', marginLeft: '10px'}} href={props.url1} target="_blank">{props.link1}</a>
        <a className="link-co" style={{textAlign: 'left', marginLeft: '10px'}} href={props.url2} target="_blank">{props.link2}</a>
      </div>
    </div>
  );
}
