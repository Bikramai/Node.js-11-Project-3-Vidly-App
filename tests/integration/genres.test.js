const request = require('supertest');
const {Genre} = require('../../models/genre')

let server;

describe('/api/genres', () => {
    beforeEach(() => { server = require('../../index'); })
    afterEach(async () => { 
        server.close(); 
        await Genre.removeAllListeners({});
    });

    describe('GET /', () => {
        it('should return all genres',  async () => {
            await Genre.collection.insertMany([
                { name: 'genre1' },
                { name: 'genre2' },
            ]);
            const res = await request(server).get('/api/genres');
            expect(res.status).toBe(200);
            expect(res.body.length).toBe(2);
            expect(res.body.some(g => g.name === 'genre1')).toBeTruthy();
            expect(res.body.some(g => g.name === 'genre2')).toBeTruthy();
        });

        it('should handle a timer correctly', (done) => {
            const timer = setTimeout(() => {
                // Some code that needs to run after a delay
                done();
            }, 1000);
            timer.unref();
        })
    })
});

describe('GET /:id', () => {
    it('should return a genre if valid id is passed', async () => {
        const genre = new Genre({ name: 'genre1' });
        await genre.save();

        const res = await request(server).get('/api/genres/' + genre._id);

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty(genre);
    })
})

