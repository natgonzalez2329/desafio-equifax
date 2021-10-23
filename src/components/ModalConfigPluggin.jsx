import React from "react";



const ModalConfigPluggin = ({listPlugin,filterPluggin}) => {
  return (
    <div>
      {listPlugin.map((pluggin) => {
        return (
          <button
            type="button"
            key={pluggin.uid}
            data-tag={pluggin.uid}
            onClick={(e)=>{filterPluggin(e.target.dataset.tag)}}
          >
            {pluggin.id}
          </button>
        );
      })}
    </div>
  );
};

export default ModalConfigPluggin;