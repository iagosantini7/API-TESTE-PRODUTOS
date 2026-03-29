
import request from 'supertest'
import { expect } from 'chai';
//const { expect } = require('chai');

describe('Login', () => {
    describe('POST/login', () => {
        it('Deve retornar 200 com um token em string, quando utilizar credencias validas', async () => {
            const resposta = await request('http://localhost:3000')
                .post('/auth/login')
                .set('Content-Type', 'application/json')
                .send({
                    'email': 'iago@gmail.com',
                    'senha': '123456789'
                });
                
            expect(resposta.status).to.equal(200);
            expect(resposta.body.message).to.equal('Login realizado com sucesso!')
            expect(resposta.body.token).to.be.a('string');
            expect(resposta.body.usuario.id).to.equal(2);
            expect(resposta.body.usuario.nome).to.equal('iago');
            expect(resposta.body.usuario.email).to.equal('iago@gmail.com')
            
        });
    });
});