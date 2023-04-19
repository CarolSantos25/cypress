/// <reference types="cypress"/>


class Login {
    getElementosLogin() {
        return require('../elementos/login_elementos.js')     
    }

    getElementosProdutcs() {
        return require('../elementos/products_elementos.js')
    }

    acessarSaucedemo() {
        cy.visit('/');
        Cypress.on(
            "uncaught:exception", 
            (err, runnable) => 
              // returning false here prevents Cypress from failing the test
              false
        );
    }

    validarTitulo() {
        //cy.get = pegar alguma coisa
        //cy.get() = passar dentro do parentese this. função onde estar o elemento mais o elemento
        //.should() = pergunta ao cypress se contém o texto 
        cy.get(this.getElementosLogin().tituloPag).should('have.text', 'Swag Labs')
    }

    login(usuario, senha) {
        // if(usuario == '') {
        //     cy.get(this.getElementosLogin().password).type(senha)
        // } else if(senha == '') {
        //     cy.get(this.getElementosLogin().userName).type(usuario) 
        // }
        cy.get(this.getElementosLogin().userName).type(usuario)
        cy.get(this.getElementosLogin().password).type(senha)
    }

    acessarLogin() {
        cy.get(this.getElementosLogin().btnLogin).click()
    }

    validarTituloProducts() {
        cy.get(this.getElementosProdutcs().tituloHome).should('contain', 'Products')
    }

    validarUsuarioBloqueado() {
        cy.get(this.getElementosLogin().textUsuarioBloqueado).should('contain', 'Epic sadface: Sorry, this user has been locked out.')
    }

}

export default new Login();