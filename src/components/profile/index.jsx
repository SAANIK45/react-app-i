import React from 'react'
import './profile.style.css'
import Bio from './bio';
import Skills from './skills';
import Links from './links';

class Profile extends React.Component {
    me = {
        name: 'Samiul Ahmed',
        title: 'Frontend developer',
        skillA: 'react',
        skillB: 'javasript',
        skillC: 'bootstrap',
        linkA: 'facebook',
        linkB: 'twitter',
        linkC: 'github'

    }

    render() {
        return (
            <div className='MainPro'>
                <Bio name={this.me.name} title={this.me.title} />
                <Skills skillA={this.me.skillA} skillB={this.me.skillB} skillC={this.me.skillC} />
                <Links linkA={this.me.linkA} linkB={this.me.linkB} linkC={this.me.linkC} />
            </div>
        )
    }
}

export default Profile;