export default function Servicos() {
  const services = [['bi-building-add', 'Abertura de empresas', 'Cuidamos de toda a burocracia para legalizar seu negócio com agilidade.'], ['bi-receipt', 'Assessoria fiscal', 'Planejamento tributário e emissão de guias para uma operação saudável.'], ['bi-people', 'Departamento pessoal', 'Gestão de folha de pagamento e encargos trabalhistas sem surpresas.'], ['bi-file-earmark-text', 'Imposto de renda', 'Declarações para pessoas físicas e jurídicas com revisão cuidadosa.']];
  return (
    <main className="page-section">
      <div className="container">
        <div className="page-heading">
          <span className="section-kicker">Soluções sob medida</span>
          <h1>Nossos serviços</h1>
          <p>O suporte certo para cada fase da sua empresa, com orientação próxima e linguagem simples.</p>
        </div>
        <div className="row g-4">
          {services.map(([icon, title, description]) => (
            <div className="col-md-6" key={title}>
              <article className="service-card">
                <div className="service-icon">
                  <i className={`bi ${icon}`} />
                </div>
                <h2>{title}</h2>
                <p>{description}</p>
                <a href="/contato" className="service-link">
                  Saiba mais <i className="bi bi-arrow-up-right" />
                </a>
              </article>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}