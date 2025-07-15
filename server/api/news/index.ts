// server/api/news/[id].ts
export default defineEventHandler(async (event) => {
    // Mock data (replace with DB call or fetch from external API)
    return [
        { id: '1', title: 'News One', content: 'Content of News One', description: "This is the news 1 description" },
        { id: '2', title: 'News Two', content: 'Content of News Two' , description: "This is the news 2 description" },
        { id: '3', title: 'News Three', content: 'Content of News Three' , description: "This is the news 3 description" },
    ];
});
