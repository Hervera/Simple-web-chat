import React from 'react';

function UsernameForm({ saveUsername, username, setUsername }) {
    return (
        <div className="col-md-12 col-xl-12">
            <div className="flex-grow-0 py-3 px-4 border-top">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Type your name"
                        id="username" 
                        maxLength={15} 
                        autoComplete="off" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                    <button className="btn btn-primary" onClick={saveUsername}>Save</button>
                </div>
            </div>
        </div>


    )
}

export default UsernameForm;
