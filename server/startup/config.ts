import config from 'config';
import express from 'express'



export default function (app: express.Application) {
    if (!config.get('jwtPrivateKey')) {
        throw new Error('FATAL ERROR: jwtPrivateKey is not defined');
    }
    if (!config.get('googleOauth.clientId')) {
        throw new Error('FATAL ERROR: googleOauth.clientId is not defined');
    }
    if (!config.get('googleOauth.clientSecret')) {
        throw new Error('FATAL ERROR: googleOauth.clientSecret is not defined');
    }
    if (!config.get('twitterAPI.consumerKey')) {
        throw new Error('FATAL ERROR: twitterAPI.consumerKey is not defined');
    }
    if (!config.get('twitterAPI.consumerSecret')) {
        throw new Error('FATAL ERROR: twitterAPI.consumerSecret is not defined');
    }
    if (!config.get('twitterAPI.accessToken')) {
        throw new Error('FATAL ERROR: twitterAPI.accessToken is not defined');
    }
    if (!config.get('twitterAPI.accessTokenSecret')) {
        throw new Error('FATAL ERROR: twitterAPI.accessTokenSecret is not defined');
    }
}