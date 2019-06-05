// Landing Page Component after initial page load

import React from "react";
import { Link } from "react-router-dom";
import Tilt from 'react-tilt';

import Header from '../layout/Header';

import './Landing.css';

const Landing = () => (

  <React.Fragment>
    <Header />

    <div className="container valign-wrapper" style={{ marginTop: "1rem" }}>
      <div className="row">
        <div className="col-s6 landing-illustration">
          <Tilt className="Tilt" options={{ max: 20 }} style={{ height: 460, width: 450 }} >
            <svg xmlns="http://www.w3.org/2000/svg" width="344.395" height="458.914">
              <g data-name="Gruppe 94" transform="translate(-269.846 -184.469)">
                <path data-name="Pfad 287" d="M472.447 539.81c-10.532-10.539-27.137-11.016-37.085-1.068s-9.472 26.518 1.068 37.085z" fill="#185aa2" />
                <path data-name="Pfad 288" d="M518.642 427.651l-140.227-242.4-46.523 79.95 1.448 2.509c68.465.734 123.753 53.343 123.753 118.143a112.874 112.874 0 0 1-19.277 63.026l34 59.014z" fill="#e8454b" />
                <path data-name="Pfad 289" d="M471.807 508.729l-34.5-59.837.136-.211a112.554 112.554 0 0 0 19.216-62.794c0-31.21-12.81-60.612-36.038-82.8s-54.227-34.576-87.253-34.93h-.238l-1.68-2.924 46.992-80.766.354.612L519.12 427.648zm-33.536-59.837l33.542 58.177 46.353-79.44-139.751-241.535-46.047 79.125 1.21 2.1c33.148.415 64.243 12.919 87.586 35.161s36.31 51.956 36.31 83.39a113.4 113.4 0 0 1-19.2 63.039z" fill="#010101" />
                <path data-name="Pfad 290" d="M333.701 267.526l104.571 181.386-.143.211c-23.187 34.644-62.9 55.322-106.237 55.322h-.408V267.302h2.094zm103.6 181.352l-104.2-180.74h-.8v235.484c42.8-.15 82.017-20.548 104.993-54.744z" fill="#fbe557" />
                <path data-name="Pfad 291" d="M333.103 268.142l104.2 180.74c-22.976 34.2-62.2 54.594-104.993 54.744V268.132h.8z" fill="#fbe557" />
                <path data-name="Pfad 292" d="M331.892 504.445h-.408V267.302h2.094l.122.2 104.571 181.407-.143.211c-23.186 34.634-62.894 55.325-106.236 55.325z" fill="none" stroke="#1d1d1c" strokeMiterlimit="10" strokeWidth=".5" />
                <path data-name="Pfad 293" d="M332.307 268.132v235.491c42.837-.129 82.017-20.569 104.993-54.744l-104.2-180.74h-.8z" fill="none" stroke="#1d1d1c" strokeMiterlimit="10" strokeWidth=".5" />
                <path data-name="Pfad 294" d="M333.34 267.73l104.449 181.169a112.874 112.874 0 0 0 19.277-63.026c0-64.8-55.261-117.409-123.726-118.143z" fill="none" stroke="#1d1d1c" strokeMiterlimit="10" strokeWidth=".5" />
                <path data-name="Pfad 295" d="M437.762 449.675l-.333-.571-104.803-181.788h.721c33.236.354 64.419 12.844 87.817 35.161s36.31 51.956 36.31 83.39a113.385 113.385 0 0 1-19.345 63.236zm-103.7-181.55L437.81 448.09a112.541 112.541 0 0 0 18.848-62.244c0-31.21-12.81-60.612-36.038-82.8-23.078-21.983-53.805-34.372-86.559-34.9z" fill="none" stroke="#1d1d1c" strokeMiterlimit="10" strokeWidth=".5" />
                <path data-name="Pfad 296" d="M548.131 638.921h-220.04l110.018-190.525zm-217.22-1.646h214.344L438.082 451.646z" fill="#010101" />
                <path data-name="Pfad 297" d="M529.754 608.792l-16.924 29.306h33.842z" fill="#fbe557" />
                <path data-name="Rechteck 85" d="M336.549 425.847l1.431-.823L463.003 642.56l-1.431.822z" />
                <path data-name="Rechteck 86" fill="#010101" d="M426.098 585.136l56.74-56.74 1.164 1.164-56.74 56.74z" />
                <path data-name="Rechteck 87" fill="#010101" d="M435.447 600.097l56.432-56.432 1.164 1.164-56.432 56.432z" />
                <path data-name="Rechteck 88" fill="#010101" d="M443.552 615.691l56.74-56.74 1.164 1.164-56.74 56.74z" />
                <circle data-name="Ellipse 77" cx="9.302" cy="9.302" r="9.302" transform="rotate(-36.43 1107.841 -272.35)" fill="#fbe557" />
                <path data-name="Pfad 298" d="M399.752 602.237a9.621 9.621 0 1 1-13.008-3.991 9.622 9.622 0 0 1 13.008 3.991zm-16.448 8.717a8.989 8.989 0 1 0 3.728-12.151 8.989 8.989 0 0 0-3.728 12.151z" fill="#fbe557" />
                <circle data-name="Ellipse 78" cx="6.677" cy="6.677" r="6.677" transform="rotate(-45 874.397 -205.044)" fill="#010101" />
                <path data-name="Pfad 299" d="M416.711 554.959a7 7 0 1 1-9.458-2.9 7 7 0 0 1 9.458 2.9zm-11.8 6.262a6.364 6.364 0 1 0 2.645-8.608 6.364 6.364 0 0 0-2.645 8.608z" fill="#010101" />
                <path data-name="Pfad 300" d="M338.215 498.033a2.9 2.9 0 1 1 2.9-2.9 2.9 2.9 0 0 1-2.9 2.9z" fill="#010101" />
                <path data-name="Pfad 301" d="M338.215 519.874a2.9 2.9 0 1 1 2.9-2.9 2.9 2.9 0 0 1-2.9 2.9z" fill="#010101" />
                <path data-name="Pfad 302" d="M338.215 541.741a2.9 2.9 0 1 1 2.89-2.91 2.9 2.9 0 0 1-2.89 2.91z" fill="#010101" />
                <path data-name="Pfad 303" d="M338.215 563.605a2.9 2.9 0 1 1 2.9-2.9 2.9 2.9 0 0 1-2.9 2.9z" fill="#010101" />
                <path data-name="Pfad 304" d="M338.215 585.47a2.9 2.9 0 1 1 2.9-2.9 2.9 2.9 0 0 1-2.9 2.9z" fill="#010101" />
                <path data-name="Pfad 305" d="M338.215 607.33a2.9 2.9 0 1 1 2.9-2.9 2.9 2.9 0 0 1-2.9 2.9z" fill="#010101" />
                <path data-name="Pfad 306" d="M305.483 498.033a2.9 2.9 0 1 1 2.9-2.9 2.9 2.9 0 0 1-2.9 2.9z" fill="#010101" />
                <path data-name="Pfad 307" d="M305.483 519.874a2.9 2.9 0 1 1 2.9-2.9 2.9 2.9 0 0 1-2.9 2.9z" fill="#010101" />
                <path data-name="Pfad 308" d="M305.483 541.741a2.9 2.9 0 1 1 2.9-2.9 2.9 2.9 0 0 1-2.9 2.9z" fill="#010101" />
                <path data-name="Pfad 309" d="M305.483 563.605a2.9 2.9 0 1 1 2.9-2.9 2.9 2.9 0 0 1-2.9 2.9z" fill="#010101" />
                <path data-name="Pfad 310" d="M305.483 585.47a2.9 2.9 0 1 1 2.9-2.9 2.9 2.9 0 0 1-2.9 2.9z" fill="#010101" />
                <path data-name="Pfad 311" d="M305.483 607.33a2.9 2.9 0 1 1 2.9-2.9 2.9 2.9 0 0 1-2.9 2.9z" fill="#010101" />
                <circle data-name="Ellipse 79" cx="2.903" cy="2.903" r="2.903" transform="translate(269.846 492.206)" fill="#010101" />
                <circle data-name="Ellipse 80" cx="2.903" cy="2.903" r="2.903" transform="translate(269.846 514.067)" fill="#010101" />
                <circle data-name="Ellipse 81" cx="2.903" cy="2.903" r="2.903" transform="translate(269.846 535.934)" fill="#010101" />
                <circle data-name="Ellipse 82" cx="2.903" cy="2.903" r="2.903" transform="translate(269.846 557.795)" fill="#010101" />
                <circle data-name="Ellipse 83" cx="2.903" cy="2.903" r="2.903" transform="translate(269.846 579.662)" fill="#010101" />
                <circle data-name="Ellipse 84" cx="2.903" cy="2.903" r="2.903" transform="translate(269.846 601.523)" fill="#010101" />
                <path data-name="Rechteck 89" fill="#010101" d="M535.812 373.39h16.475v16.475h-16.475z" />
                <path data-name="Rechteck 90" fill="#e8454b" d="M591.651 405.225h11.233v11.233h-11.233z" />
                <path data-name="Rechteck 91" fill="#185aa2" d="M590.726 323.181h23.513v23.513h-23.513z" />
                <path data-name="Pfad 312" d="M599.672 221.84h-32.86v32.863h32.86zm-8.214 24.649h-16.446v-16.435h16.428z" fill="#fbe557" />
                <path data-name="Rechteck 92" fill="#fff" d="M575.026 230.054h16.428v16.428h-16.428z" />
                <path data-name="Pfad 313" d="M522.186 522.261l-15.211-11.981-15.211 11.981-15.218-11.981-15.21 11.981-15.2-11.974-13.66 11.716-.66-.768 14.293-12.253 15.231 11.995 15.211-11.988 15.218 11.988 15.211-11.988 15.211 11.988 15.218-11.988 15.203 11.987 15.218-11.988 15.211 11.988 15.218-11.988 15.53 12.232-.626.8-14.9-11.736-15.221 11.977-15.211-11.981-15.219 11.981-15.211-11.981z" fill="#010101" />
                <path data-name="Pfad 314" d="M522.186 494.715l-15.211-11.981-15.211 11.981-15.218-11.981-15.21 11.981-15.2-11.967-13.66 11.709-.66-.768 14.293-12.253 15.231 11.995 15.211-11.988 15.218 11.988 15.211-11.988 15.211 11.988 15.218-11.988 15.203 11.987 15.218-11.988 15.211 11.988 15.218-11.988 15.531 12.233-.626.8-14.9-11.736-15.222 11.976-15.211-11.981-15.219 11.981-15.211-11.981z" fill="#010101" />
              </g>
            </svg>
          </Tilt>
        </div>

        <div className="col-s6">
          <h1 class="landing-heading">A new way to assess <span className="text-highlight">creativity.</span></h1>
          <p className="landing-text">
            Carry out test series to determine the potential for environmental changes in enhancing creative performance — objective and online.
            </p>
        </div>
        <div className="col-s6" style={{ marginTop: "1rem" }}>
          <Link to="/login" className="log-in-button">
            Log In
              </Link>
          <Link to="/signup" className="sign-up-button">
            Sign Up
              </Link>
        </div>
        <svg className="blob-left" xmlns="http://www.w3.org/2000/svg" width="387.042" height="407.123">
          <path d="M387.042 407.124H0V.001a93.344 93.344 0 0 1 17.56 11.958 88.974 88.974 0 0 1 14.962 16.753 92.781 92.781 0 0 1 7.47 12.989 99.512 99.512 0 0 1 5.231 13.652 129.524 129.524 0 0 1 5.023 28.908 241.09 241.09 0 0 1-.094 30.4c-.6 10.3-1.642 20.884-2.649 31.118-.994 10.094-2.021 20.526-2.619 30.647a241.51 241.51 0 0 0-.154 29.848 128.524 128.524 0 0 0 4.77 28.3 97.748 97.748 0 0 0 5 13.339 90.384 90.384 0 0 0 7.154 12.674c6.361 9.4 11.235 16.248 15.8 22.22a181.926 181.926 0 0 0 15.008 17.507 107.207 107.207 0 0 0 15.949 13.414 100.073 100.073 0 0 0 18.627 9.946 145.863 145.863 0 0 0 23.042 7.1 286.889 286.889 0 0 0 29.194 4.881c19.864 2.406 44.924 4.079 83.793 5.6a190.19 190.19 0 0 1 22.506 2.193 166.626 166.626 0 0 1 20.277 4.532 148.113 148.113 0 0 1 34.317 14.852c18.188 10.834 33.958 25.734 46.871 44.288z" fill="#fbe557" />
        </svg>
        <svg className="blob-right" xmlns="http://www.w3.org/2000/svg" width="431.162" height="254.217">
          <path d="M431.165 254.216H.003c46.929-18.94 92.9-35.228 136.639-48.408 26.274-7.919 51.988-14.777 76.427-20.382 27.011-6.2 53.112-11.008 77.578-14.3a315.243 315.243 0 0 0 34-6.314 167.725 167.725 0 0 0 25.4-8.333 91.383 91.383 0 0 0 18.023-10.075 57.689 57.689 0 0 0 11.879-11.538 49.143 49.143 0 0 0 6.964-12.724 61.921 61.921 0 0 0 3.276-13.634c1.228-9.33.808-19.269.4-28.88-.306-7.251-.623-14.747-.243-22a73.707 73.707 0 0 1 3.909-21.233 53.591 53.591 0 0 1 12.222-19.521 69.888 69.888 0 0 1 10.528-8.824A100.653 100.653 0 0 1 431.171.007v254.216z" fill="#e8454b" />
        </svg>
      </div>

    </div>

  </React.Fragment>
)

export default Landing;
