import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from 'axios';



// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

import CreateStudy from './CreateStudy';
import StudyCard from './StudyCard';


class StudyList extends React.Component {
    state = {
        studies: [],
        isUpdated: false
    }

    componentDidMount() {
        axios.get(`/study/${this.props.userID}`)
            .then(res => {
                console.log(res.data)
                // console.log(this.state.studies);
                this.setState({
                    studies: res.data,
                });
                console.log(this.state.studies);
            })
            .catch(err => {
                console.log(err);

            })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.isUpdated !== this.state.isUpdated) {
            // console.log('called Component did update, should update view')
            axios.get(`/study/${this.props.userID}`)
                .then(res => {
                    console.log(res);
                    this.setState({
                        studies: res.data
                    });
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    updateView = () => {
        this.setState({
            isUpdated: !this.state.isUpdated
        })
    }

    render() {
        // if (this.state.isLoading) {
        //     return <div>Loading...</div>
        // }
        // console.log(this.props.userID);
        // console.log(`/study/${this.props.userID}`);
        // console.log(this.state.isUpdated);
        return (
            <div style={{ marginLeft: "290px" }}>
                <Grid container alignItems="center" spacing={16} style={{ marginTop: "0.75rem" }}>
                    <Grid item>
                        <h2 className="study-name-heading">Studies</h2>
                    </Grid>
                    <Grid item>
                        <CreateStudy action={this.updateView} />
                    </Grid>

                </Grid>
                {/* <h3 style={{ margin: '2rem 0' }}>Studies</h3>
                <CreateStudy action={this.updateView} /> */}
                {/* <StudyCard
                    studyName="Chair Study"
                    studyDate="02.04.2019"
                    completedParticipants="35"
                    studyOpen={true}
                /> */}
                {/* {console.log(this.state.studies)} */}
                {/* {this.state.isLoading ? <div>Loading</div> : */}
                <Grid container direction="row"
                    justify="flex-start"
                    alignItems="flex-start">
                    {
                        this.state.studies.map((study, index) => (
                            <Grid key={index} item style={{ padding: "20px 80px 20px 0" }}>
                                <Link to={'/studies/' + study.study._id}>
                                    <StudyCard
                                        studyName={study.study.study_name}
                                        studyDate={new Date(study.study.createdAt).toLocaleDateString()}
                                        completedParticipants={study.participants_count}
                                        studyOpen={study.study.open} />
                                </Link>

                                {/* <Card style={{ width: 300, height: 150 }}>
                                    <CardContent>
                                        <Typography variant="h5" component="h2">
                                            {study.study_name}
                                        </Typography>
                                        <Typography color="textSecondary">
                                            {study.createdAt}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="large">
                                            <Link to={'/study/' + study._id}>
                                                Details
                                            </Link>
                                        </Button>
                                    </CardActions>
                                </Card> */}
                            </Grid>
                        ))}

                </Grid>
                {/* } */}

            </div>
        )
    }
}

const mapStateToProps = state => ({
    userID: state.auth.user.id
});

export default connect(
    mapStateToProps
)(withRouter(StudyList));

// export default StudyList;
