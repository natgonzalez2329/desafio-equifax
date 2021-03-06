import React from 'react';

const ModalConfigPluggin = ({ listPlugin, filterPluggin }) => {
  return (
    <div>
      {listPlugin.map((pluggin) => {
        return (
          <div className="btn-group">
            <input
              type="radio"
              className="btn-check"
              name="options"
              id={pluggin.uid}
              autocomplete="off"
              checked
            />
            <label
              className="btn btn-secondary"
              for={pluggin.uid}
              key={pluggin.uid}
              data-tag={pluggin.uid}
              onClick={(e) => {
                filterPluggin(e.target.dataset.tag);
              }}
            >
              {pluggin.id}
              <span>
                {pluggin.checkSaved ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check-circle m-3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-dot"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                  </svg>
                )}
              </span>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default ModalConfigPluggin;
