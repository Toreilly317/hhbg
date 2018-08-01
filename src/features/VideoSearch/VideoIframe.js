import React from "react";

export default props => {
  return (
    <iframe
      maxWidth="100%"
      title="selected Video"
      src={`https://www.youtube.com/embed/${props.id}?autoplay=true`}
    />
  );
};
