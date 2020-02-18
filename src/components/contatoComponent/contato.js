import React from 'react'

function contato(){
    return(
        <>
          <section class="page-section" id="contact">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="mt-0 text-primary">Em caso de dúvida entre em contato</h2>
                        <hr class="divider my-4"></hr>
                        <p class="text-muted mb-5">Quaisquer dúvidas iremos exclarecer o mais breve possível para você</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                        <i class="fas fa-phone fa-3x mb-3 text-muted"></i>
                        <div>
                            (99) 9999-9999
                        </div>
                    </div>

                    <div class="col-lg-4 mr-auto text-center">
                        <i class="fas fa-envelope fa-3x mb-3 text-muted"></i>
                        <a class="d-block" href="mailto:contact@yourwebsite.com">contact@yourwebsite.com</a>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default contato