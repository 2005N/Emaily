// SurveyFormReview shows user their form inputs for review
import _ from 'lodash';
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const reviewFields = _.map(formFields, ({name, label}) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    });
    
    return (
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <button className="yellow darken-3 white-text btn-flat" onClick={onCancel} >
                Back
            </button>
            <button 
            onClick={() => submitSurvey(formValues, history)}
            className='green btn-flat right white-text'>
                Send Survey
                <i className='material-icons right'>email</i>
            </button>
        </div>
    );
};

function mapStateToProps(state){
    return { formValues: state.form.SurveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));