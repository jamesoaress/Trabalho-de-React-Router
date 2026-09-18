export default function Contato() {
  return (
    <main className="page-section">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5">
            <span className="section-kicker">Vamos conversar</span>
            <h1>Fale conosco</h1>
            <p className="lead text-secondary">Estamos prontos para entender o seu momento e encontrar a melhor solução.</p>
            <div className="contact-list">
              <p>
                <i className="bi bi-envelope" />
                <span><strong>E-mail</strong>mrv.controller@gmail.com</span>
              </p>
              <p>
                <i className="bi bi-telephone" />
                <span><strong>Telefone</strong>(44) 998805-0016</span>
              </p>
              <p>
                <i className="bi bi-geo-alt" />
                <span><strong>Endereço</strong>Rua Maringá, 2336 - Centro</span>
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <form className="contact-form">
              <h2>Envie uma mensagem</h2>
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">Seu nome</label>
                  <input id="name" className="form-control" placeholder="Como podemos chamar você?" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">Seu e-mail</label>
                  <input id="email" type="email" className="form-control" placeholder="voce@empresa.com" />
                </div>
                <div className="col-12">
                  <label htmlFor="message" className="form-label">Mensagem</label>
                  <textarea id="message" className="form-control" rows={5} placeholder="Conte brevemente como podemos ajudar" />
                </div>
                <div className="col-12">
                  <button type="button" className="btn btn-primary">Enviar mensagem <i className="bi bi-arrow-right" /></button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}