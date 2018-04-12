import React, { Component } from 'react';
import ReleaseForm from '../ui/ReleaseForm';

export default class Releases extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            releases: [
                {
                    id: 1,
                    releaseName: 'Release 01',
                    releaseDate: '01/03/2018'
                },
                {
                    id: 2,
                    releaseName: 'Release 02',
                    releaseDate: '01/03/2019'
                },
                {
                    id: 3,
                    releaseName: 'Release 03',
                    releaseDate: '01/03/2020'
                },
                {
                    id: 4,
                    releaseName: 'Release 04',
                    releaseDate: '01/03/2021'
                }

            ]
        }
    }

    handleSubmit(e, { name, date }) {
        e.preventDefault();
        let state = this.state;
        let myRelease = {
            id: state.releases.length + 1,
            releaseName: name,
            releaseDate: date
        }
        this.setState({ releases: state.releases.concat(myRelease) });
    }

    handleRemove(id) {
        console.log('Implement remove function here!');
        var myReleases = this.state.releases;
        myReleases.splice(id, 1)
        this.setState({ releases: myReleases });
    }

    render() {
        return (
            <div className="container" style={{ paddingTop: '10px' }}>
                <ReleaseForm submitHandler={this.handleSubmit} />
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Release Name</th>
                            <th scope="col">Release Date</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.releases.map((release, index) => {
                            const onClickRemove = (e) => {
                                this.handleRemove(index);
                            }
                            return (
                                <tr key={release.id}>

                                    <th scope="row">{release.id}</th>
                                    <td>{release.releaseName}</td>
                                    <td>{release.releaseDate}</td>
                                    <td><button onClick={onClickRemove} className="btn btn-danger btn-sm">Remover</button></td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        );
    }

}