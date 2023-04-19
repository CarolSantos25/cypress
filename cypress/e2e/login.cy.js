
import Login from '../pages/login-usuarios'

describe('Login usuarios', () => {
    beforeEach(() => {
        Login.acessarSaucedemo()
        Login.validarTitulo()
    });

    it('Login usuario comum', () => {

        Login.login(Cypress.env('comum'), Cypress.env('senha'));
        Login.acessarLogin();
        Login.validarTituloProducts();
    })

    it('Login usuario bloqueado', () => {
        Login.login(Cypress.env('bloqueado'), Cypress.env('senha'));
        Login.acessarLogin();
        Login.validarUsuarioBloqueado();
    })

    it('Login usuario com problema', () => {
        Login.login(Cypress.env('pro'), Cypress.env('senha'));
        Login.acessarLogin();
        Login.validarTituloProducts();
    })

    it('Login usuario com falha', () => {
        Login.login(Cypress.env('falha'), Cypress.env('senha'));
        Login.acessarLogin();
        Login.validarTituloProducts();
    })



  
})