import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

const Anchor = {
  ArrowLeft: ({
    width = '20',
    height = '17',
    viewBox = '0 0 20 17',
    fill = 'none',
    opacity = '1',
    color = '#212121',
    fillrule = 'evenodd',
    cliprule = 'evenodd',
    xmlns = 'http://www.w3.org/2000/svg',
    strokeColor = '',
    ...rest
  }) => (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns={xmlns}
    >
      <Path
        fill-rule={fillrule}
        clip-rule={cliprule}
        d="M19.3337 8.32019C19.3337 8.76317 19.0045 9.12926 18.5775 9.1872L18.4587 9.19519L0.958721 9.19519C0.475473 9.19519 0.0837212 8.80344 0.0837212 8.32019C0.0837212 7.87721 0.412901 7.51112 0.839989 7.45318L0.958721 7.44519L18.4587 7.44519C18.942 7.44519 19.3337 7.83694 19.3337 8.32019Z"
        fill={color}
        fill-opacity={opacity}
        stroke={strokeColor}
        {...rest}
      />
      <Path
        fill-rule={fillrule}
        clip-rule={cliprule}
        d="M8.6339 14.7285C8.97634 15.0695 8.97754 15.6235 8.63657 15.9659C8.32659 16.2772 7.84054 16.3065 7.49745 16.0531L7.39913 15.9686L0.340797 8.9406C0.0285549 8.6297 0.000149727 8.1419 0.255596 7.79881L0.340746 7.70055L7.39908 0.671384C7.7415 0.330383 8.29551 0.33153 8.63651 0.673946C8.94651 0.985233 8.97375 1.4714 8.71888 1.81342L8.63395 1.91138L2.19858 8.3209L8.6339 14.7285Z"
        fill={color}
        fill-opacity={opacity}
        stroke={strokeColor}
        {...rest}
      />
    </Svg>
  ),
  ChevronDown: ({
    width = '30',
    height = '30',
    viewBox = '0 0 30 30',
    fill = 'none',
    opacity = '1',
    color = 'white',
    fillrule = 'evenodd',
    cliprule = 'evenodd',
    xmlns = 'http://www.w3.org/2000/svg',
    strokeColor = '',
    ...rest
  }) => (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns={xmlns}
    >
      <Path
        fill-rule={fillrule}
        clip-rule={cliprule}
        d="M9.14541 10.8203L14.7179 16.4303L20.2905 10.8203L22.0023 12.5559L14.7179 19.8892L7.43359 12.5559L9.14541 10.8203Z"
        fill={color}
        fill-opacity={opacity}
        stroke={strokeColor}
        {...rest}
      />
    </Svg>
  ),
  ChevronRight: ({
    width = '24',
    height = '24',
    viewBox = '0 0 24 24',
    fill = 'none',
    opacity = '1',
    color = 'white',
    fillrule = 'evenodd',
    cliprule = 'evenodd',
    xmlns = 'http://www.w3.org/2000/svg',
    strokeColor = '',
    ...rest
  }) => (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns={xmlns}
    >
      <Path
        fill-rule={fillrule}
        clip-rule={cliprule}
        d="M8.58984 16.58L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.58Z"
        fill={color}
        fill-opacity={opacity}
        stroke={strokeColor}
        {...rest}
      />
    </Svg>
  ),
  ActiveDot: ({
    width = '32',
    height = '8',
    viewBox = '0 0 32 8',
    fill = 'none',
    xmlns = 'http://www.w3.org/2000/svg',
    rx = '4',
    color = '#1076BB',
  }) => (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns={xmlns}
    >
      <Rect width={width} height={height} rx={rx} fill={color} />
    </Svg>
  ),
  InActiveDot: ({
    width = '8',
    height = '8',
    viewBox = '0 0 8 8',
    fill = 'none',
    xmlns = 'http://www.w3.org/2000/svg',
    rx = '4',
    color = '#F0F0F0',
  }) => (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns={xmlns}
    >
      <Rect width={width} height={height} rx={rx} fill={color} />
    </Svg>
  ),
  TouchDown: ({
    width = '20',
    height = '17',
    viewBox = '0 0 20 17',
    fill = 'none',
    opacity = '1',
    color = '#212121',
    fillrule = 'evenodd',
    cliprule = 'evenodd',
    xmlns = 'http://www.w3.org/2000/svg',
    strokeColor = '',
    ...rest
  }) => (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns={xmlns}
    >
      <Path
        fill-rule={fillrule}
        clip-rule={cliprule}
        d="M3.72473 6.64131C3.94662 6.41942 4.29383 6.39925 4.53851 6.5808L4.60861 6.64131L10 12.0324L15.3914 6.64131C15.6133 6.41942 15.9605 6.39925 16.2052 6.5808L16.2753 6.64131C16.4972 6.8632 16.5173 7.21042 16.3358 7.4551L16.2753 7.52519L10.4419 13.3585C10.2201 13.5804 9.87283 13.6006 9.62816 13.419L9.55806 13.3585L3.72473 7.52519C3.48065 7.28112 3.48065 6.88539 3.72473 6.64131Z"
        fill={color}
        fill-opacity={opacity}
        stroke={strokeColor}
        {...rest}
      />
    </Svg>
  ),
  TouchRight: ({
    width = '20',
    height = '17',
    viewBox = '0 0 20 17',
    fill = 'none',
    opacity = '1',
    color = '#212121',
    fillrule = 'evenodd',
    cliprule = 'evenodd',
    xmlns = 'http://www.w3.org/2000/svg',
    strokeColor = '',
    ...rest
  }) => (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns={xmlns}
    >
      <Path
        fill-rule={fillrule}
        clip-rule={cliprule}
        d="M6.64139 16.2754C6.4195 16.0535 6.39933 15.7063 6.58088 15.4617L6.64139 15.3916L12.0325 10.0002L6.64139 4.60877C6.4195 4.38688 6.39933 4.03966 6.58088 3.79499L6.64139 3.72489C6.86328 3.503 7.2105 3.48283 7.45518 3.66437L7.52527 3.72489L13.3586 9.55822C13.5805 9.78011 13.6007 10.1273 13.4191 10.372L13.3586 10.4421L7.52527 16.2754C7.2812 16.5195 6.88547 16.5195 6.64139 16.2754Z"
        fill={color}
        fill-opacity={opacity}
        stroke={strokeColor}
        {...rest}
      />
    </Svg>
  ),
};

export default Anchor;
