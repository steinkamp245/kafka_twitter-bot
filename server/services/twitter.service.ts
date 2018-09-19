import config from 'config';
import { Observable } from 'rxjs';
const Twitter = require('twitter');


const client = new Twitter({
    consumer_key: config.get('twitterAPI.consumerKey'),
    consumer_secret: config.get('twitterAPI.consumerSecret'),
    access_token_key: config.get('twitterAPI.accessToken'),
    access_token_secret: config.get('twitterAPI.accessTokenSecret')
});


interface Tweet {
    url: string
    text: string
}

export function streamTweets(track: string) {
    return new Observable<Tweet>(observer => {
        var stream = client.stream('statuses/filter', { track });
        stream.on('data', function (event: any) {
            observer.next({ url: `https://twitter.com/${event.user.screen_name}/status/${event.id_str}`, text: event.text });
        });

        stream.on('error', function (error: Error) {
            observer.error(error);
        });
    });
}



