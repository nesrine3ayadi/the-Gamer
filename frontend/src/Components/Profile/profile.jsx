import React from 'react'
import channelbanner from '../../img/channel-banner.png'
import s2 from '../../img/s2.png'

function Profile() {
    return (
        <div class="single-channel-page" id="content-wrapper">
        <div class="single-channel-image">
           <img class="img-fluid" alt="" src={channelbanner}/>
           <div class="channel-profile">
              <img class="channel-profile-img" alt="" src="img/s2.png"/>
              <div class="social hidden-xs">
                 Social &nbsp;
                 <a class="fb" href="#">Facebook</a>
                 <a class="tw" href="#">Twitter</a>
                 <a class="gp" href="#">Google</a>
              </div>
           </div>
        </div>
            
        </div>
    )
}

export default Profile
