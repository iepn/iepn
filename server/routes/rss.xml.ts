import { serverQueryContent } from '#content/server';
// @ts-ignore
import RSS from 'rss';

export default defineEventHandler(async (event) => {
    const feed = new RSS({
        title: 'RHYME.Q 韵清',
        site_url: 'https://iepn.pages.dev',
        feed_url: `https://iepn.pages.dev/rss.xml`,
    });

    const docs = await serverQueryContent(event)
        .sort({ date: -1 })
        .where({ _partial: false })
        .find();

    const blogPosts = docs.filter((doc) => doc?._path?.includes('/work'));
    for (const doc of blogPosts) {
        feed.item({
            title: doc.title ?? '-',
            url: `iepn.pages.dev${doc._path}`,
            date: doc.release_date,
            description: doc.description
        });
    }

    const feedString = feed.xml({ indent: true });
    event.res.setHeader('content-type', 'text/xml');
    event.res.end(feedString);
});
