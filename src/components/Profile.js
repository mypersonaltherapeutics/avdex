import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { Button, Form } from 'semantic-ui-react'


const Profile = ({ handleSubmit }) => (
    <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Field>
            <label>Name</label>
            <Field name="name" component="input" type="text" placeholder='Your name or your company name' />
        </Form.Field>

        <Form.Field>
            <label>Website</label>
            <Field name="website" component="input" type="text" placeholder='' />
        </Form.Field>

        <Button primary type='submit'>Sign and submit</Button>
    </Form>
)

Profile.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
}

const ProfileForm = reduxForm({
    form: 'profile'
})(Profile)


export default ProfileForm
