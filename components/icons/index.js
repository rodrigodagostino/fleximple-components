/**
 * COMPONENT: Interface Icons
 */

import { SVG, Path, Circle } from '@wordpress/components'

export const toolbarIcons = {
  alignmentHorizontalStart: (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
      <Path d="M3 6h18V4H3zm11 10V8H3v8zM3 20h18v-2H3z" />
    </SVG>
  ),
  alignmentHorizontalCenter: (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
      <Path d="M3 6h18V4H3zm14.5 10V8h-11v8zM3 20h18v-2H3z" />
    </SVG>
  ),
  alignmentHorizontalEnd: (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
      <Path d="M3 6h18V4H3zm18 10V8H10v8zM3 20h18v-2H3z" />
    </SVG>
  ),
  alignmentHorizontalSpaceEvenly: (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
      <Path d="M3 6h18V4H3zm7.5 10V8H6v8zM3 20h18v-2H3zm15-4V8h-4.5v8z" />
    </SVG>
  ),
  alignmentHorizontalSpaceAround: (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
      <Path d="M3 6h18V4H3zm6.75 10V8h-4.5v8zM3 20h18v-2H3zm15.75-4V8h-4.5v8z" />
    </SVG>
  ),
  alignmentHorizontalSpaceBetween: (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
      <Path d="M3 6h18V4H3zm4.5 10V8H3v8zM3 20h18v-2H3zm18-4V8h-4.5v8z" />
    </SVG>
  ),

  alignmentVerticalTop: (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
      <Path d="M19 4v16h2V4zM7.5 14h9V4h-9zM3 4v16h2V4z" />
    </SVG>
  ),
  alignmentVerticalCenter: (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
      <Path d="M19 4v16h2V4zM7.5 17h9V7h-9zM3 4v16h2V4z" />
    </SVG>
  ),
  alignmentVerticalBottom: (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
      <Path d="M19 4v16h2V4zM7.5 20h9V10h-9zM3 4v16h2V4z" />
    </SVG>
  ),
  alignmentVerticalSpaceEvenly: (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
      <Path d="M19 4v16h2V4zM7 10.667h10v-4H7zM3 4v16h2V4zm4 13.333h10v-4H7z" />
    </SVG>
  ),
  alignmentVerticalSpaceAround: (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
      <Path d="M19 4v16h2V4zM7 10h10V6H7zM3 4v16h2V4zm4 14h10v-4H7z" />
    </SVG>
  ),
  alignmentVerticalSpaceBetween: (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
      <Path d="M19 4v16h2V4zM7 8h10V4H7zM3 4v16h2V4zm4 16h10v-4H7z" />
    </SVG>
  ),

  distributionLeft: (
    <SVG xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <Path d="m3 5h14v-2h-14zm9 8v-6h-9v6zm-9 4h14v-2h-14z" />
    </SVG>
  ),
  distributionCenter: (
    <SVG xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <Path d="m3 5h14V3H3v2zm12 8V7H5v6h10zM3 17h14v-2H3v2z" />
    </SVG>
  ),
  distributionRight: (
    <SVG xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <Path d="m3 5h14v-2h-14zm14 8v-6h-9v6zm-14 4h14v-2h-14z" />
    </SVG>
  ),
  distributionFull: (
    <SVG xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <Path d="m3 5h14v-2h-14zm14 8v-6h-14v6zm-14 4h14v-2h-14z" />
    </SVG>
  ),
}

export const tabIcons = {
  mobile: (
    <SVG width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
      <Path d="M14.375 0h-8.75C4.59 0 3.75.84 3.75 1.875v16.25C3.75 19.16 4.59 20 5.625 20h8.75c1.035 0 1.875-.84 1.875-1.875V1.875C16.25.84 15.41 0 14.375 0zm-2.5 17.656a.47.47 0 01-.469.469H8.594a.47.47 0 01-.469-.469v-.312a.47.47 0 01.469-.469h2.812a.47.47 0 01.469.469zm2.5-3.125a.47.47 0 01-.469.469H6.094a.47.47 0 01-.469-.469V2.344a.47.47 0 01.469-.469h7.812a.47.47 0 01.469.469z" />
    </SVG>
  ),

  tablet: (
    <SVG width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
      <Path d="M16.875 0H3.125C2.09 0 1.25.84 1.25 1.875v16.25C1.25 19.16 2.09 20 3.125 20h13.75c1.035 0 1.875-.84 1.875-1.875V1.875C18.75.84 17.91 0 16.875 0zM12.5 17.656a.47.47 0 01-.469.469H7.97a.47.47 0 01-.469-.469v-.312a.47.47 0 01.469-.469h4.062a.47.47 0 01.469.469zm4.375-3.125a.47.47 0 01-.469.469H3.594a.47.47 0 01-.469-.469V2.344a.47.47 0 01.469-.469h12.812a.47.47 0 01.469.469z" />
    </SVG>
  ),

  desktop: (
    <SVG width="22.5" height="20" viewBox="0 0 22.5 20" aria-hidden="true">
      <Path d="M20.625 0H1.875C.84 0 0 .84 0 1.875v12.5c0 1.035.84 1.875 1.875 1.875h7.5l-.625 1.875H5.937a.935.935 0 00-.937.938c0 .519.418.937.938.937h10.625a.935.935 0 00.937-.938.935.935 0 00-.938-.937H13.75l-.625-1.875h7.5c1.035 0 1.875-.84 1.875-1.875v-12.5C22.5.84 21.66 0 20.625 0zM20 13.75H2.5V2.5H20z" />
    </SVG>
  ),
}

export const interactionIcons = {
  dragHandle: (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
      <Path d="M9.75 15a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm4.5 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-4.5-4.131a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm4.5 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM9.75 6.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm4.5 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
    </SVG>
  ),

  times: (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
      <Path d="M16.95 8.46L13.41 12l3.54 3.54-1.41 1.41L12 13.42l-3.53 3.53-1.42-1.42L10.58 12 7.05 8.47l1.42-1.42L12 10.58l3.54-3.53z" />
    </SVG>
  ),

  plus: (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
      <Path d="M12.997 5.997v5.006h5.006v1.994l-4.999.007v4.992h-2.008v-4.992H6.004v-2.008h4.992l.007-5z" />
    </SVG>
  ),
}

export const componentIcons = {
  mapMarker: (
    <SVG xmlns="http://www.w3.org/2000/svg" className="map-marker" height="42" width="26">
      <ellipse cx="13" cy="39" rx="7.5" ry="3" className="map-marker__shadow" opacity=".3" fill="#15151a" />
      <Path
        className="map-marker__fill"
        d="M13 .5C6 .5.5 6 .5 13 .5 25 13 38.5 13 38.5S25.5 25 25.5 13C25.5 6 19.9.5 13 .5z"
        fill="#3e404f"
      />
      <Path
        className="map-marker__glow"
        d="M13 1A12 12 0 0 0 1.021 13.45 12 12 0 0 1 13 2a12 12 0 0 1 12 11.574A12 12 0 0 0 13 1z"
        fill="#686a84"
      />
      <Path
        className="map-marker__stroke"
        d="M13 .5C6 .5.5 6 .5 13 .5 25 13 38.5 13 38.5S25.5 25 25.5 13C25.5 6 19.9.5 13 .5z"
        fill="none"
        stroke="#15151a"
      />
      <Circle cx="13" cy="13.098" r="5" className="map-marker__hole" fill="#15151a" />
    </SVG>
  ),
}
