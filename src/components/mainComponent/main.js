import React from 'react'

function main(){
    return (
        <>
            <section className="masthead">
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-10 align-self-end">
                            <h4 className="text-uppercase text-primary">Quem partiu continuará sempre vivendo no seu coração</h4>
                            <hr className="divider my-4"></hr>
                        </div>
                    
                        <div className="col-lg-8 align-self-baseline">
                            <p className="text-dark mb-5">  
                                Realize o cadastro gratuito, 
                                cadastre fotos, escreva a história da pessoa que partiu e geramos um QR-Code para 
                                você sempre lembrar isto acessando de seu celular.
                            </p>
                            <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Cadastro</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default main