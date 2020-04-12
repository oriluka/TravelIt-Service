import React from 'react';
import css from './neighborhood.module.css';
import styleable from 'react-styleable';

class Neighborhood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGettingAround: false,
      GettingAround:
      <div className={this.props.css.readNeigh}>
        <a className={this.props.css.click} href='' onClick={this.handleClickGetAround.bind(this)}>Read more about the neighborhood <span className={`fas fa-chevron-down ${this.props.css.icon}`}></span></a>
      </div>,
      showRules: false,
      Rules: <div className={this.props.css.readNeigh}>
        <a className={this.props.css.click} href='' onClick={this.handleClickRules.bind(this)}>Read all rules<span className={`fas fa-chevron-down ${this.props.css.icon}`}></span></a>
      </div>
    };
  }

  handleClickGetAround(e) {
    e.preventDefault();
    if (this.state.showGettingAround) {
      this.setState ({
        showGettingAround: false,
        GettingAround:
        <div className={this.props.css.readNeigh}>
          <a className={this.props.css.click} href='' onClick={this.handleClickGetAround.bind(this)}>Read more about the neighborhood<span className={`fas fa-chevron-down ${this.props.css.icon}`}></span></a>
        </div>
      });
    } else {
      this.setState ({
        showGettingAround: true,
        GettingAround:
          <div className={this.props.css.readNeigh}>
            <h3>Getting around</h3>
            <p>
              {this.props.data.location.gettingAround} <br/>
            Property is conveniently located near the bus line with limited service.
            </p>
            <div>
              <a className={this.props.css.click} href='' onClick={this.handleClickGetAround.bind(this)}>Hide<span className={`fas fa-chevron-up ${this.props.css.icon}`}></span></a>
            </div>
          </div>
      });
    }
  }

  handleClickRules(e) {
    e.preventDefault();
    if (this.state.showRules) {
      this.setState ({
        showRules: false,
        Rules:
        <div className={this.props.css.readNeigh}>
          <a className={this.props.css.click} href='' onClick={this.handleClickRules.bind(this)}>Read all rules<span className={`fas fa-chevron-down ${this.props.css.icon}`}></span></a>
        </div>
      });
    } else {
      this.setState ({
        showRules: true,
        Rules:
          <div className={this.props.css.readNeigh}>
            <h3>Additional Rules</h3>
            <p>{this.props.data.rulesbody}</p>
            <div>
              <a className={this.props.css.click} href='' onClick={this.handleClickRules.bind(this)}>Hide rules<span className={`fas fa-chevron-up ${this.props.css.icon}`}></span></a>
            </div>
          </div>
      });
    }
  }

  render() {
    return (
      <div className={this.props.css.root}>
        <h2 className={this.props.css.title}>The neighborhood</h2>
        <div className={this.props.css.location}>{`${this.props.data.name}'s place is located in ${this.props.data.city} ${this.props.data.state} United States.`}
        </div>
        <p className={this.props.css.body}>
          {this.props.data.locationbody}
        </p>
        {this.state.GettingAround}
        <div className={this.props.css.map}>
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=${this.props.api}&q=${this.props.data.zip}`}>
          </iframe>
          <p className={this.props.css.mapP}>
       Exact location information is provided after a booking is confirmed.
          </p>
        </div>
        <h2 className={this.props.css.title}>Things to keep in mind</h2>
        <p className={this.props.css.checkTime}>
          <strong>Check-in:</strong> {this.props.data.rulescheckin} <br/>
          <strong>Checkout:</strong> {this.props.data.rulescheckout}
        </p>
        <h3>House Rules</h3>
        <div className={this.props.css.rulesBody}>
          <p>
            <div className={this.props.css.rulesIconOne}>
              <span class="fas fa-baby-carriage"></span><span> &nbsp;&nbsp; Not suitable for children and infants</span>
            </div>
            <div ClassName={this.props.css.rulesIcontwo}>
              <span class="fas fa-paw"></span><span> &nbsp; No pets</span>
            </div>
            <div className={this.props.css.rulesIconOne}>
              <span class="fas fa-glass-cheers"></span><span> &nbsp; No parties or events</span>
            </div>
            <div className={this.props.css.rulesIcontwo}>
              <span class="fas fa-smoking-ban"></span><span> &nbsp; Smoking is not allowed</span>
            </div>
          </p>
        </div>
        {this.state.Rules}
      </div>
    );
  }
}

export default styleable(css)(Neighborhood);
