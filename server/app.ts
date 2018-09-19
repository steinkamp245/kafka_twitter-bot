import express from 'express';
import db from './startup/db';
import config from './startup/config';
import { streamTweets } from './services/twitter.service';

const app = express();

config(app);
db();
streamTweets('javascript').subscribe(tweet => console.log(tweet));




