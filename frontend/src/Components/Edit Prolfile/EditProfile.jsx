import React from 'react'

function EditProfile() {
    return (
        <div className="row">
        <FormControl className="col-md-8">
          <InputLabel htmlFor="usename">Username</InputLabel>
          <Input
            id="username"
            aria-describedby="my-helper-text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <FormHelperText id="my-helper-text">
            Change your username.
          </FormHelperText>
        </FormControl>
        <FormControl className="col-md-8">
          <InputLabel htmlFor="Email">Email address</InputLabel>
          <Input
            id="Email"
            aria-describedby="my-helper-text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormHelperText id="my-helper-text">Put your email.</FormHelperText>
        </FormControl>
        <FormControl className="col-md-8">
          <InputLabel htmlFor="Aboutuser">About me</InputLabel>
          <Input
            id="Aboutuser"
            aria-describedby="my-helper-text"
            value={aboutUser}
            onChange={(e) => setAboutUser(e.target.value)}
          />
          <FormHelperText id="my-helper-text">
            Write something about you
          </FormHelperText>
        </FormControl>
        <FormControl className="col-md-8">
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            aria-describedby="my-helper-text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormHelperText id="my-helper-text">
            Change your password
          </FormHelperText>
        </FormControl>
        <FormControl className="col-md-8">
          <InputLabel htmlFor="password">Country</InputLabel>
          <Input
            aria-describedby="my-helper-text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <FormHelperText id="my-helper-text">
            Where are you from ?
          </FormHelperText>
        </FormControl>
        <FormControl className="col-md-8">
          <form>
            <div className="form-group">
              <Input
                aria-describedby="my-helper-text"
                type="file"
                onChange={onFileChange}
              />
              <FormHelperText id="my-helper-text">
                change your profile picture
              </FormHelperText>
            </div>
            <div className="form-group">
              <Link to="/home">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={() => onSubmit()}
                >
                  update profile
                </button>
              </Link>
            </div>
          </form>
        </FormControl>
       
      
      </div>
    )
}

export default EditProfile
