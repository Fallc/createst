import React, { Component } from "react";
import { withRouter } from 'react-router'
import { } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import './HeaderDashboard.css';


class HeaderDashboard extends Component {

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.push("/login");
  };

  render() {
    return (
      <header id="header-dashboard">

        <svg style={{ width: "200px", marginTop: "5px", marginLeft: "20px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 294.9 48.5">
          <g transform="translate(43.484)" fill="none">
            <circle cx="15.5" cy="15.5" r="15.5" />
            <circle cx="15.5" cy="15.5" r="14.5" stroke="#f43543" strokeWidth="2" />
          </g>
          <path d="M6.528 31.159L23.78.753 41.176 31.16H6.528z" fill="none" />
          <path d="M9.993 29.25H37.71L23.852 4.925 9.992 29.25m-3.464 1.909L23.78.753 41.176 31.16H6.528z" fill="#ffe748" />
          <path fill="none" stroke="#00c325" strokeWidth="2" d="M23.252 19.1l40.5-8.1" />
          <g>
            <path d="M259.127 36.1c0 .4-.1.9-.2 1.3s-.3.8-.5 1.1-.5.6-.9.8-.8.3-1.3.3-.9-.1-1.2-.3-.6-.5-.9-.9l-.1 1.1h-.8v-1-8.4h.8v4.1c.5-.9 1.2-1.3 2.3-1.3.5 0 .9.1 1.2.3.3.2.6.4.8.7s.4.7.5 1.1c.2.3.3.7.3 1.1zm-.8.1c0-.3 0-.6-.1-1l-.3-.9c-.2-.3-.4-.5-.6-.7-.3-.2-.6-.3-1-.3s-.7.1-1 .2-.5.4-.7.6-.3.6-.4.9-.1.7-.1 1c0 .3 0 .7.1 1l.3.9c.2.3.4.5.6.6.3.2.6.2 1 .2s.7-.1 1-.2c.3-.2.5-.4.7-.6.2-.3.3-.6.4-.9 0-.1.1-.4.1-.8zM262.527 42h-.8l1-2.5-2.8-6.5h.9l2.2 5.5 2.2-5.5h.8l-3.5 9z" />
          </g>
          <path d="M280.927 29.5v9.6h2.5v-9.6h11.5v11.8h-2.2v-9.6h-2.5v9.6h-2.2v-9.6h-2.5v9.6h-6.8v-9.6h-2.2v9.6h-2.2v-9.6h-2.2v-2.2h8.8z" />
          <g fill="#262d36">
            <path d="M114.327 3.7c2.5 2 3.9 4.6 4.4 7.9l-2.4.2c-.4-2.8-1.6-5-3.6-6.6-2-1.6-4.5-2.4-7.4-2.4-3.6 0-6.4 1.2-8.6 3.5s-3.3 5.6-3.3 9.7 1.1 7.4 3.4 9.7c2.3 2.3 5.2 3.5 8.6 3.5 5.8 0 10-3.1 10.9-8.4l2.4.2c-.6 3.2-2 5.7-4.4 7.6-2.4 1.8-5.4 2.8-8.8 2.8-4.2 0-7.7-1.4-10.4-4.1-2.7-2.8-4.1-6.5-4.1-11.2 0-4.8 1.3-8.5 4-11.2s6.2-4.1 10.4-4.1c3.4-.1 6.4.9 8.9 2.9zM132.627 12.6c-1.8 0-3.3.6-4.4 1.8-1.1 1.2-1.6 2.6-1.6 4.3V31h-2.2V10.8h2.2v3.3c.8-2 3-3.6 6.2-3.6v2.1zM154.227 21.7h-16.5c0 2.4.8 4.2 2.2 5.6 1.4 1.4 3.1 2 5.2 2 3.5 0 5.9-1.6 6.7-4.4l2.2.2c-1 3.8-4.2 6.2-8.8 6.2-2.9 0-5.2-.9-7.1-2.8s-2.8-4.4-2.8-7.7.9-5.8 2.7-7.7 4.2-2.8 7-2.8 5.1.9 6.7 2.7c1.6 1.8 2.4 4.2 2.4 7.2v1.5zm-16.5-1.9h14.3c0-4.5-2.5-7.4-7-7.4-4.1 0-7.1 2.8-7.3 7.4zM174.327 18.1V31h-2.3v-3c-1.5 2.3-3.7 3.4-6.7 3.4-3.9 0-6.4-2-6.4-5.6 0-3.6 2.5-5.6 7.4-5.9l5.8-.4v-1.4c0-3.6-1.7-5.7-5-5.7s-5.3 2.3-5.3 5l-2.3-.1c0-1.9.7-3.5 2-4.9 1.4-1.4 3.2-2.1 5.5-2.1 4.7.1 7.3 2.9 7.3 7.8zm-2.3 3.4l-5.6.3c-3.6.2-5.4 1.5-5.4 4s1.5 3.6 4.5 3.6c3.7 0 6.4-2.2 6.4-7v-.9zM190.427 29v2c-.7.1-1.5.2-2.6.2-3.5 0-5.6-2-5.6-6.1V12.7h-3.8v-2h3.8V3.5h2.3v7.2h5.8v2h-5.8l-.1 12c0 3 1.3 4.5 3.8 4.5.6 0 1.3-.1 2.2-.2zM212.427 21.7h-16.5c0 2.4.8 4.2 2.2 5.6 1.4 1.4 3.1 2 5.2 2 3.5 0 5.9-1.6 6.7-4.4l2.2.2c-1 3.8-4.2 6.2-8.8 6.2-2.9 0-5.2-.9-7.1-2.8s-2.8-4.4-2.8-7.7.9-5.8 2.7-7.7 4.2-2.8 7-2.8 5.1.9 6.7 2.7c1.6 1.8 2.4 4.2 2.4 7.2v1.5zm-16.5-1.9h14.3c0-4.5-2.5-7.4-7-7.4-4.1 0-7.1 2.8-7.3 7.4zM231.427 16.1l-2.2.2c-.3-2.4-2-3.9-4.9-3.9-3.1 0-4.7 1.4-4.7 3.7 0 .6.2 1.2.4 1.6.2.4.8.7 1.1.9.3.2 1.4.4 1.7.6l1 .2 1.1.2c2.5.6 4.3 1.3 5.4 2s1.7 2 1.7 3.7c0 3.8-2.9 6-7.4 6-4.3 0-7.2-2.1-7.7-5.8l2.2-.2c.4 2.6 2.4 4 5.5 4s5.1-1.3 5.1-3.9c0-1.2-.4-2-1.2-2.5-.8-.5-2.3-1-4.6-1.5-.8-.2-1.3-.3-1.6-.4l-1.3-.4c-.6-.2-1.1-.4-1.3-.5-.4-.3-1.5-.9-1.8-1.5-.3-.6-.6-1.5-.6-2.6 0-3.5 2.6-5.8 7-5.7 4.2.1 6.6 2.3 7.1 5.8zM247.027 29v2c-.7.1-1.5.2-2.6.2-3.5 0-5.6-2-5.6-6.1V12.7h-3.8v-2h3.8V3.5h2.3v7.2h5.8v2h-5.8l-.1 12c0 3 1.3 4.5 3.8 4.5.6 0 1.3-.1 2.2-.2z" />
          </g>
        </svg>

        <button id="logout-btn" onClick={this.onLogoutClick}>
          <span>Logout</span>
          <svg style={{ fill: "#F43543" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M4.70710678,12 L7.85355339,15.1464466 C8.04881554,15.3417088 8.04881554,15.6582912 7.85355339,15.8535534 C7.65829124,16.0488155 7.34170876,16.0488155 7.14644661,15.8535534 L3.14644661,11.8535534 C2.95118446,11.6582912 2.95118446,11.3417088 3.14644661,11.1464466 L7.14644661,7.14644661 C7.34170876,6.95118446 7.65829124,6.95118446 7.85355339,7.14644661 C8.04881554,7.34170876 8.04881554,7.65829124 7.85355339,7.85355339 L4.70710678,11 L15.5,11 C15.7761424,11 16,11.2238576 16,11.5 C16,11.7761424 15.7761424,12 15.5,12 L4.70710678,12 Z M10.5,4 C10.2238576,4 10,3.77614237 10,3.5 C10,3.22385763 10.2238576,3 10.5,3 L18.5,3 C19.8807119,3 21,4.11928813 21,5.5 L21,18.5 C21,19.8807119 19.8807119,21 18.5,21 L10.5,21 C10.2238576,21 10,20.7761424 10,20.5 C10,20.2238576 10.2238576,20 10.5,20 L18.5,20 C19.3284271,20 20,19.3284271 20,18.5 L20,5.5 C20,4.67157288 19.3284271,4 18.5,4 L10.5,4 Z" />
          </svg>
        </button>

        {/* <svg xmlns="http://www.w3.org/2000/svg" width="300" height="53.511">
          <g data-name="Gruppe 93">
            <text transform="translate(71.676 41)" font-size="43" font-family="Lack-Regular, Lack">
              <tspan x="0" y="0">createst</tspan>
            </text>
            <g data-name="Ellipse 99" transform="translate(34.632 14.261)" fill="none" stroke="#f43543" stroke-width="2">
              <circle cx="15.474" cy="15.474" r="15.474" stroke="none" />
              <circle cx="15.474" cy="15.474" r="14.474" />
            </g>
            <g data-name="Rechteck 690" fill="none" stroke="#ffe748" stroke-width="2">
              <path stroke="none" d="M0 15.746h28v28H0z" />
              <path d="M1 16.746h26v26H1z" />
            </g>
            <path data-name="Linie 100" fill="none" stroke="#00c325" stroke-width="2" d="M14.368 33.112l40.526-8.105" />
            <text data-name="by" transform="translate(257.36 50.511)" font-size="13" font-family="UniversNextPro-Light, Univers Next Pro" font-weight="300">
              <tspan x="0" y="0">by</tspan>
            </text>
            <path data-name="Logo_of_the_Technical_University_of_Munich (2)" d="M286.039 40.511v9.618h2.482v-9.618H300V52.3h-2.172v-9.617h-2.482v9.618h-2.171v-9.618h-2.482v9.618h-6.827v-9.618h-2.171v9.618h-2.171v-9.618h-2.172v-2.172z" />
          </g>
        </svg> */}


      </header>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default withRouter(connect(
  mapStateToProps,
  { logoutUser }
)(HeaderDashboard));

// export default HeaderDashboard;
