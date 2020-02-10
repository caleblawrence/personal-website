import React, { useState } from 'react';
import { NextPage } from 'next';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Meta from '../components/meta'
import Head from 'next/head'
import Button from '@material-ui/core/Button';

const SayHello: NextPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const submit = () => {
    fetch('/api/hello', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message
      }),
    }
    )
      .then((response) => response.json())
      .then(() => {
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error:', error);
      })
  }

  return (
    <div className="hello-wrapper">
      <Meta />
      <Head>
        <title>Say Hello</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Typography variant="h4" gutterBottom>
        Say Hello
      </Typography>
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <TextField
            id="name"
            name="name"
            label="Name"
            fullWidth
            variant="outlined"
            autoComplete="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            id="email"
            name="email"
            label="Email"
            fullWidth
            variant="outlined"
            autoComplete="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            label="Message"
            multiline={true}
            name="message"
            rows={2}
            rowsMax={4}
            variant="outlined"
            fullWidth
            onChange={(e) => setMessage(e.target.value)}
          />
        </Grid>
        <div className="submitButton">
          <Button variant="contained" color="primary" onClick={() => submit()}>
            Submit
            </Button>
        </div>
      </Grid>

      {submitted && 
        <>
          <br />  
          <br />  

          <Typography variant="h4" gutterBottom>
            Thanks. I'll get back with you.
          </Typography>
        </>
      }

      <style jsx >{`
        .hello-wrapper {
          margin-right: auto; /* 1 */
          margin-left:  auto; /* 1 */
          max-width: 900px; /* 2 */
          padding-right: 10px; /* 3 */
          padding-left:  10px; /* 3 */
        }
        .submitButton {
          margin-left: 10px !important;
        }
      `}</style>
    </div>
  )
}

export default SayHello;