import React from "react";
import PropTypes from "prop-types";

import "./svg.css";

const initialSize = "24";
const initialFill = "#000000";

const Icons = {
  Status: ({ size = initialSize, className = "Status", fill = initialFill }) => (
    <svg className={"svg " + className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width={size} height={size}>
      <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z" />
    </svg>
  ),
  NoAvatar: ({ size = initialSize, className = "NoAvatar", fill = initialFill }) => (
    <svg className={"svg " + className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <path
        d="M511.676,498.752l-12.8-51.2c-6.073-24.838-24.485-44.813-48.747-52.885l-93.867-31.275
	c-22.891-9.536-33.365-46.4-35.627-60.395c17.442-14.504,28.665-35.14,31.36-57.664c-0.385-3.847,0.523-7.713,2.581-10.987
	c3.326-0.833,6.049-3.215,7.317-6.4c6.142-14.872,9.997-30.588,11.435-46.613c0.003-0.871-0.104-1.738-0.32-2.581
	c-1.528-6.227-5.189-11.722-10.347-15.531v-56.555c0-34.368-10.496-48.469-21.547-56.64C339.004,33.472,321.276,0,255.996,0
	c-57.917,2.332-104.335,48.75-106.667,106.667v56.555c-5.158,3.809-8.819,9.304-10.347,15.531c-0.216,0.843-0.323,1.711-0.32,2.581
	c1.436,16.033,5.291,31.756,11.435,46.635c0.924,3.015,3.347,5.334,6.4,6.123c1.195,0.597,3.435,3.691,3.435,11.243
	c2.711,22.588,13.999,43.271,31.531,57.771c-2.24,13.973-12.651,50.816-34.901,60.117l-94.699,31.445
	c-24.243,8.071-42.643,28.026-48.725,52.843l-12.8,51.2c-1.449,5.71,2.005,11.514,7.715,12.963c0.853,0.217,1.73,0.327,2.61,0.328
	h490.667c5.891-0.002,10.665-4.779,10.664-10.67C511.993,500.461,511.886,499.595,511.676,498.752z"
      />
    </svg>
  ),
  Send: ({ size = initialSize, className = "Send", fill = initialFill }) => (
    <svg className={"svg " + className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 448" width={size} height={size}>
      <g>
        <polygon points="0.213,32 0,181.333 320,224 0,266.667 0.213,416 448,224 		" />
      </g>
    </svg>
  ),
  Remove: ({ size = initialSize, className = "Remove", fill = initialFill }) => (
    <svg className={"svg " + className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" />
      <path
        d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0"
        fill="#f0f0f0"
      />
    </svg>
  ),
  Clear: ({ size = initialSize, className = "Clear", fill = initialFill }) => (
    <svg className={"svg " + className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <g>
        <path d="m180.602 242.734h171.097v84.913h-171.097z" transform="matrix(.707 -.707 .707 .707 -123.707 271.727)" />
        <path d="m99.025 160.701h171.097v85.824h-171.097z" transform="matrix(.707 -.707 .707 .707 -89.916 190.15)" />
        <path d="m377.877 275.933-120.984 120.984 75.695 75.695h164.412c8.284 0 15-6.716 15-15s-6.716-15-15-15h-164.413l105.981-105.987z" />
        <path d="m72.526 254.976-51.984 51.976c-13.247 13.246-20.542 30.856-20.542 49.588 0 18.73 7.295 36.341 20.542 49.587l62.092 62.092c2.813 2.813 6.628 4.394 10.606 4.394h196.922z" />
        <path d="m459.781 315.411 31.666-31.667c13.246-13.246 20.541-30.856 20.541-49.588 0-18.73-7.295-36.341-20.541-49.587l-124.675-124.674c-27.343-27.343-71.832-27.343-99.175 0l-31.665 31.667z" />
      </g>
    </svg>
  ),
  Exit: ({ size = initialSize, className = "Exit", fill = initialFill }) => (
    <svg className={"svg " + className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
      <path d="m361.5 392v40c0 44.113281-35.886719 80-80 80h-201c-44.113281 0-80-35.886719-80-80v-352c0-44.113281 35.886719-80 80-80h201c44.113281 0 80 35.886719 80 80v40c0 11.046875-8.953125 20-20 20s-20-8.953125-20-20v-40c0-22.054688-17.945312-40-40-40h-201c-22.054688 0-40 17.945312-40 40v352c0 22.054688 17.945312 40 40 40h201c22.054688 0 40-17.945312 40-40v-40c0-11.046875 8.953125-20 20-20s20 8.953125 20 20zm136.355469-170.355469-44.785157-44.785156c-7.8125-7.8125-20.476562-7.8125-28.285156 0-7.8125 7.808594-7.8125 20.472656 0 28.28125l31.855469 31.859375h-240.140625c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20h240.140625l-31.855469 31.859375c-7.8125 7.808594-7.8125 20.472656 0 28.28125 3.90625 3.90625 9.023438 5.859375 14.140625 5.859375 5.121094 0 10.238281-1.953125 14.144531-5.859375l44.785157-44.785156c19.496093-19.496094 19.496093-51.214844 0-70.710938zm0 0" />
    </svg>
  ),
  Back: ({ size = initialSize, className = "Back", fill = initialFill }) => (
    <svg className={"svg " + className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492 492" width={size} height={size}>
      <path
        d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12
			C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084
			c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864
			l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"
      />
    </svg>
  ),
};

export default Icons;

Icons.Status.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
  fill: PropTypes.string,
};
Icons.NoAvatar.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
  fill: PropTypes.string,
};
Icons.Send.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
  fill: PropTypes.string,
};
Icons.Remove.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
  fill: PropTypes.string,
};
Icons.Clear.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
  fill: PropTypes.string,
};
Icons.Exit.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
  fill: PropTypes.string,
};
Icons.Back.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
  fill: PropTypes.string,
};
