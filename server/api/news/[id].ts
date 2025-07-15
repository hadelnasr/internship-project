// server/api/news/[id].ts
export default defineEventHandler(async (event) => {
    const { id } = event.context.params as { id: string };

    // Mock data (replace with DB call or fetch from external API)
    const newsItems = [
        { id: '1', title: 'News One', content: 'Content of News One' },
        { id: '2', title: 'News Two', content: 'Content of News Two' },
    ];

    const newsItem = newsItems.find(item => item.id === id);

    if (!newsItem) {
        throw createError({ statusCode: 404, statusMessage: 'News not found' });
    }

    return newsItem;
});
