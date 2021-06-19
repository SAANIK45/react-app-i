import React, { Component } from 'react';
import Profile from './profile';
import Bio from './profile/bio';
import Skills from './profile/skills';
import Links from './profile/links';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <div className='Container'>
                    <Profile />
                    <div className='MainPro'>
                        <Bio name='Rana Haider' title='Backend Developer' />
                        <Skills skillA='Python' skillB='Django' skillC='Ruby' />
                        <Links linkA='Insta' linkB='Twitter' linkC='Whatsup' />
                    </div>
                </div>
            </div>
        );
    }
}
export default App;