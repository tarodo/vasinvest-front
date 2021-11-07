import React, { useState } from 'react';
import {
  Alert, Box, Card, CardActions, CardContent, Grid, Link, TextField, Typography,
} from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import Button from '@mui/material/Button';
import Joi from 'joi-browser';
import axios from 'axios';
import { useHistory } from 'react-router';
import { Config } from '../config';

const useStyles = makeStyles({
  cardStyle: {
    width: 480,
    marginTop: '10%',
  },
  typographyStyle: {
    textAlign: 'left',
  },
});

const LoginForm = () => {
  const [data, setData] = useState({ email: '', pswd: '' });
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  const schema = {
    email: Joi.string().email({ tlds: { allow: false } }).required().label('Email'),
    pswd: Joi.string().required().min(5).label('Password'),
  };

  const classes = useStyles();

  const doSubmit = () => {
    const bodyFormData = new FormData();
    bodyFormData.set('username', data.email);
    bodyFormData.set('password', data.pswd);
    axios.post(`${Config.url}token`, bodyFormData).then((res) => {
      if (res && res.status === 200) {
        localStorage.setItem('access_token', `Bearer ${res.data.access_token}`);
        setErrors([]);
        console.log(localStorage.getItem('access_token'));
        axios.defaults.headers.common.authorization = res.data.access_token;
        history.replace('/my_kvc');
      } else if (res && res.data) {
        console.log('got detail');
        setErrors([res.data.detail]);
      } else {
        setErrors(['Unknown error occured']);
      }
    }).catch((e) => {
      if (e.response && e.response.data) {
        setErrors([e.response.data.detail]);
      } else {
        setErrors(['Unknown error occured']);
      }
    });
  };

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(data, schema, options);
    if (!error) return null;

    const pre_errors = [];
    for (const item of error.details) pre_errors.push(item.message);
    return pre_errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const new_errors = validate();
    setErrors(new_errors || []);
    if (new_errors) return;

    doSubmit();
  };

  const handleChange = ({ currentTarget: input }) => {
    const new_data = { ...data };
    new_data[input.name] = input.value;
    setData(new_data);
  };

  const isDisabled = data.email.trim() === '' || data.pswd.trim() === '';
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
    >
      <Card variant="outlined" className={classes.cardStyle}>
        <CardContent>
          <Typography className={classes.typographyStyle} position="static" gutterBottom variant="h5">Log In</Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              id="email"
              name="email"
              variant="filled"
              fullWidth
              label="Email"
              sx={{ marginY: 1 }}
              onChange={handleChange}
              value={data.email}
            />
            <TextField
              id="pswd"
              name="pswd"
              variant="filled"
              fullWidth
              label="Password"
              sx={{ marginY: 1 }}
              type="password"
              onChange={handleChange}
              value={data.pswd}
            />
            {errors.map((error, key) => (
              <Alert
                key={key}
                severity="error"
                sx={{ marginTop: 1 }}
              >
                {error}
              </Alert>
            ))}
            <Button
              onClick={handleSubmit}
              variant="contained"
              sx={{ marginTop: 2 }}
              fullWidth
              disabled={isDisabled}
            >
              Log in
            </Button>
          </Box>
        </CardContent>
        <CardActions>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            px={1}
            mb={1}
          >
            <Link sx={{ cursor: 'pointer' }}>Create account</Link>
            <Link sx={{ cursor: 'pointer' }}>Forgot password?</Link>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default LoginForm;
