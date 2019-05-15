import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";

import axios from 'axios';

import Overview from './Overview';
import StudyList from './StudyList';
import HeaderDashboard from './HeaderDashboard';
import SidebarDashboard from './SidebarDashboard';

// import { GooSpinner } from "react-spinners-kit";

class Dashboard extends React.Component {

    state = {
        studies: [],
        isUpdated: false,
    }

    componentDidMount() {

        axios.get(`/study/${this.props.userID}`)
            .then(res => {
                // console.log(res.data)
                // console.log(this.state.studies);
                this.setState({
                    studies: res.data
                });
                console.log(this.state.studies);
            })
            .catch(err => {
                console.log(err);
            })
    }

    // componentDidUpdate() {
    //     axios.get(`/study/${this.props.userID}`)
    //         .then(res => {
    //             console.log(res);
    //             this.setState({
    //                 studies: res.data,
    //             });
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }

    render() {

        // if (this.state.isLoading) {
        //     return (
        //         <div style={{ position: "fixed", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        //             <GooSpinner
        //                 size={100}
        //                 color="#FFE748"
        //                 loading={this.state.isLoading} />
        //         </div>)
        // }

        return (
            <div style={{ backgroundColor: "#F8F8F8", minHeight: "100vh" }}>
                <HeaderDashboard />
                {/* <SidebarDashboard /> */}
                <Overview studies={this.state.studies} />
                <StudyList studies={this.state.studies} />
            </div >
        )
    }
}

const mapStateToProps = state => ({
    userID: state.auth.user.id
});

export default withRouter(connect(mapStateToProps)(Dashboard));

// export default Dashboard;