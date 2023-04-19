class LoginElementos {
    constructor() {
        this.tituloPag = ".login_logo"
        this.userName = "#user-name"
        this.password = "#password"
        this.btnLogin = "[data-test='login-button']"
        this.textUsuarioBloqueado = "[data-test='error']"
    }
}
module.exports = new LoginElementos()