import React from 'react'

function InputSearchBox(props) {
    return (
      <>
        <form id="searchFrm" name="searchFrm" onSubmit={props.handleSubmit}>
          <div className="form-group">
            <label htmlFor="inputTitle">Title</label>
            <div className="input-group mb-3">
              <div className="input-group-prepend bg-white">
                <span className="input-group-text p-3" id="basic-addon1">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </span>
              </div>
  
              <input
                type="search"
                className="form-control"
                id="title"
                name="title"
                placeholder="Search By Title"
                aria-label="Title"
                aria-describedby="basic-addon1"
                value={props.input}
                onChange={props.handleChange}
              />
            </div>
          </div>
        </form>
      </>
    );
  }

  
  export default React.memo(InputSearchBox)