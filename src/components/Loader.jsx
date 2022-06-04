import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
  <ContentLoader 
    speed={2}
    width={316}
    height={350}
    viewBox="0 0 316 436"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="8" y="275" rx="3" ry="3" width="286" height="32" /> 
    <rect x="6" y="325" rx="3" ry="3" width="130" height="27" /> 
    <rect x="164" y="326" rx="3" ry="3" width="130" height="27" /> 

    <rect x="11" y="10" rx="100" ry="100" width="286" height="251" />
  </ContentLoader>
)

export default Loader
