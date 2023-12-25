const request = require('supertest');
const app = require('../app');
const User = require('../models/User');

describe('POST /login', () => {


    beforeEach(async () => {
        await User.deleteMany();
    });

  
    it('It should return 200 for a valid login', async () => {
        
        const user = new User({
            email: 'test@example.com',
            password: 'test123',
        });
        await user.save();

        
        const response = await request(app)
            .post('/login')
            .send({ email: 'test@example.com', password: 'test123' });

       
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('message', 'Logged in successfully');
    });

    
    it('It should return 401 for an invalid password', async () => {
       
        const user = new User({
            email: 'test@example.com',
            password: 'test123',
        });
        await user.save();

       
        const response = await request(app)
            .post('/login')
            .send({ email: 'test@example.com', password: 'wrongPassword' });

        
        expect(response.statusCode).toBe(401);
        expect(response.body).toHaveProperty('message', 'Invalid password');
    });

   
    it('It should return 401 for a non-existent user', async () => {
        
        const response = await request(app)
            .post('/login')
            .send({ email: 'nonexistent@example.com', password: 'test123' });

        
        expect(response.statusCode).toBe(401);
        expect(response.body).toHaveProperty('message', 'User not found');
    });
});