import React, { Component } from 'react';
import HomeCard from '../ui/HomeCard'
import {hashHistory} from 'react-router'

export default class Home extends Component {

    homeCardReleases = {

        title: 'Releases',
        text: 'Menage Releases',
        buttonName: 'Releases',
        action: () => hashHistory.push('/releases')

    }

    homeCardBacklog = {

        title: 'Backlog',
        text: 'Menage Backlog',
        buttonName: 'Backlog',
        action: () => hashHistory.push('/backlog')

    }

    homeCardSprints = {

        title: 'Sprints',
        text: 'Menage Sprints',
        buttonName: 'Sprints',
        action: () => hashHistory.push('/sprints')

    }

    render() {

        return (
            <div className="container text-center">
                <div className="row">
                    <HomeCard {...this.homeCardReleases}/>
                    <HomeCard {...this.homeCardBacklog}/>
                    <HomeCard {...this.homeCardSprints}/>
                </div>
            </div>
        );

    }

}