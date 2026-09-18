export default function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <span className="eyebrow"><i className="bi bi-stars" /> Contabilidade que acompanha seu ritmo</span>
              <h1>Mais clareza para o seu negócio <span>crescer.</span></h1>
              <p className="hero-lead">Cuidamos da saúde financeira da sua empresa para você tomar decisões melhores e focar no que realmente importa.</p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <a className="btn btn-primary btn-lg" href="/contato">Fale com um especialista <i className="bi bi-arrow-right" /></a>
                <a className="btn btn-outline-light btn-lg" href="/servicos">Conheça os serviços</a>
              </div>
              <div className="hero-proof mt-5">
                <i className="bi bi-check-circle-fill" /> Atendimento próximo, decisões seguras e resultados consistentes.
              </div>
            </div>
            <div className="col-lg-5">
              <div className="hero-card">
                <div className="hero-card-icon">
                  <i className="bi bi-graph-up-arrow" />
                </div>
                <p className="text-uppercase small mb-2">Seu negócio em boas mãos</p>
                <h2>Estratégia que transforma números em oportunidades.</h2>
                <div className="hero-stat">
                  <strong>+8 anos</strong>
                  <span>simplificando a rotina de empreendedores</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-5 home-intro">
        <div className="row g-4 align-items-end">
          <div className="col-md-7">
            <span className="section-kicker">Nosso jeito de fazer</span>
            <h2>Contabilidade sem complicação e com visão de futuro.</h2>
          </div>
          <div className="col-md-5">
            <p className="text-secondary mb-0">Do primeiro passo à expansão, traduzimos a complexidade contábil em caminhos práticos para o seu crescimento.</p>
          </div>
        </div>
      </section>
    </main>
  );
}