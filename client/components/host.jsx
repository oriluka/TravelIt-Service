import React from 'react';
import css from './host.module.css';
import styleable from 'react-styleable';

class Host extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Body: <p>{this.props.data.body.slice(0, 200)}... <a className={this.props.css.links}href='' onClick={this.handleClick.bind(this)}>Read more</a></p>
    };
  }

  handleClick(e) {
    e.preventDefault();
    this.setState ({
      Body: <p>{this.props.data.body}</p>
    });
  }

  render() {
    const data = this.props.data;
    const style = this.props.css;
    return (
      <div className={style.root}>
        <div className={style.profile}>
          <h2>Hosted by {data.name}</h2>
          <p className={style.location}>
            {data.city}, {data.state} · Joined in {data.monthjoined} {data.yearjoined}
          </p>
          <p>
            <span class="fas fa-star"></span> &nbsp; {data.review} Reviews &nbsp; <span class="fas fa-badge-check"></span> &nbsp; {data.verified}
          </p>
          <div className={style.picWrapper}>
            <img className={style.profilePic} src={data.image} width={60} height={60} mode='fit'></img>
          </div>
        </div>
        <div className={style.superhost}>
          <p>
            <span className={style.bold}>{data.name} is a Superhost ·</span> Superhosts are experienced, highly rated hosts <br/> who are committed to providing great stays for guests.
            <div className={style.medalIcon}>
              <span className={style.medalIcon} class="fad fa-medal" style={{'--fa-primary-color': 'orange', '--fa-secondary-color': 'dimgray'}}></span>
            </div>
          </p>
        </div>
        <div className={style.Body}>
          {this.state.Body}
        </div>
        <p>
          <div className={style.interactionGuest}>
            <h3> Interaction with guests</h3>
            {data.interaction}
          </div>
          <div className={style.info}>
            <div className={style.info}>
              Languages: <strong>English</strong>
            </div>
            <div className={style.info}>
              Response rate: <strong>100%</strong>
            </div>
            <div className={style.info}>
              Response time: <strong>within an hour</strong>
            </div>
          </div>
          <div className={style.buttonWrap}>
            <div className={style.links}>
              <a>Contact host</a>
            </div>
          </div>
          <div className={style.disclaimer}>
          Always communicate through Airbnb · To protect your payment, never transfer money or communicate outside of the Airbnb website or app. <a className={style.links} href=''>Learn more</a>
          </div>
        </p>
      </div>
    );
  }
}

export default styleable(css)(Host);