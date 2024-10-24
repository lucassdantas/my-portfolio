import Head from 'next/head'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Lucas De Sousa Dantas - Desenvolvedor Web</title>
        <meta name="description" content="Portfólio de Lucas De Sousa Dantas" />
      </Head>

      {/* Cabeçalho */}
      <header className="bg-blue-800 text-white p-6">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">Lucas De Sousa Dantas</h1>
          <p className="mt-2 text-xl">Desenvolvedor Web Fullstack</p>
        </div>
      </header>

      {/* Seção Sobre */}
      <section className="container mx-auto py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Sobre Mim</h2>
        <p className="text-lg mb-4">
          Aos 22 anos, atuo na área de desenvolvimento web há mais de três anos.
          Destacado pela agilidade e eficiência na resolução de problemas complexos e urgentes, mantenho o controle sob pressão e me adapto facilmente a novas tecnologias e situações.
        </p>
        <p className="text-lg">
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/lucas-de-sousa-dantas/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Lucas de Sousa Dantas</a>
        </p>
      </section>

      {/* Seção de Experiência Profissional */}
      <section className="container mx-auto py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Experiência Profissional</h2>
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold">Desenvolvedor Web - RD Exclusive</h3>
          <p className="text-gray-600">Jul/2022 - Atualmente</p>
          <ul className="list-disc ml-5 mt-4">
            <li>Desenvolvi e atualizei sites e sistemas com NextJS, ReactJS e PHP.</li>
            <li>Integrei com bancos de dados, restrições de acesso, e-mails com SMTP e reCaptchaV3.</li>
            <li>Corrigi bugs, removi vírus e aumentei o desempenho e segurança de sites.</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold">Estágio em Desenvolvimento Web - Click Internet</h3>
          <p className="text-gray-600">Dez/2021 - Jul/2022</p>
          <ul className="list-disc ml-5 mt-4">
            <li>Desenvolvi e mantive sites WordPress utilizando o tema Flatsome.</li>
            <li>Realizei a instalação manual do WordPress e otimização de imagens.</li>
            <li>Analisei e removi vírus dos sites, otimizando o desempenho.</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold">Desenvolvedor Fullstack - Freelancer</h3>
          <p className="text-gray-600">Jun/2021 - Atualmente</p>
          <ul className="list-disc ml-5 mt-4">
            <li>Desenvolvi e fiz deploy de sites, fóruns e landing pages com NextJS, React e PHP.</li>
            <li>Configurei VPS com Cloudpanel para múltiplos sites e corrigi bugs relacionados a SMTP.</li>
            <li>Liderei equipes de desenvolvimento e realizei análise de SEO e segurança.</li>
          </ul>
        </div>
      </section>

      {/* Seção de Projetos */}
      <section className="container mx-auto py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Projeto 1 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Landing Pages</h3>
            <p className="mb-4">NextJS | ReactJS | Typescript | Deploy na Vercel e Hostinger VPS (configurei o ambiente para deploy)</p>
            <a href="http://thialitasilva.com.br" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">thialitasilva.com.br</a>
            <br />
            <a href="http://thialitasilva.com.br/power-boss" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">thialitasilva.com.br/power-boss</a>
            <br />
            <a href="http://postfast.com.br" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">postfast.com.br</a>
            <br />
            <a href="https://seutreino.com/28-dias-para-mudar/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">seutreino.com/28-dias-para-mudar/</a>
          </div>

          {/* Projeto 2 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Sistemas</h3>
            <p className="mb-4">PHP | React | TailwindCSS | Typescript | HTML | CSS | JS - RD Exclusive</p>
            <a href="http://trancarte.com.br/novosistemaarquitetos/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">trancarte.com.br/novosistemaarquitetos/</a>
            <br />
            <a href="http://rubrazlajes.com/parceiros/teste/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">rubrazlajes.com/parceiros/teste/</a>
            <br />
            <a href="http://rubrazlajes.com/parceiros/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">rubrazlajes.com/parceiros/</a>
          </div>

          {/* Projeto 3 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Rede Social</h3>
            <p className="mb-4">React | Tailwind CSS | Conversor de voz em texto - Projeto RocketSeat</p>
            <a href="https://github.com/lucassdantas/LinkUP.git" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
          </div>

          {/* Projeto 4 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Crud de Notas</h3>
            <p className="mb-4">Java Spring Boot - Projeto RocketSeat</p>
            <a href="https://github.com/lucassdantas/nlw-expert-notes" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
          </div>

          {/* Projeto 5 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Todo List (API)</h3>
            <p className="mb-4">Java Swing | Liderei equipe de back-end e Github - Projeto do Tec.Informática Senac</p>
            <a href="https://github.com/lucassdantas/java_todo_list" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
          </div>

          {/* Projeto 6 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Sistema de Estoque</h3>
            <p className="mb-4">Java Swing | Liderei equipe de back-end e Github - Projeto do Tec.Informática Senac</p>
            <a href="https://github.com/lucassdantas/ProjetoIntegrador" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
          </div>

          {/* Projeto 7 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Plugins para WordPress</h3>
            <a href="https://github.com/lucassdantas/wp_lcButtonClickRegister" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">lcButtonClickRegister</a><br />
            <a href="https://github.com/lucassdantas/wp_lcPrintButtonClicksRelatory" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">lcPrintButtonClicksRelatory</a><br />
            <a href="https://github.com/lucassdantas/custom_shipping_date" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Custom Shipping Date</a>
          </div>

          {/* Projeto 8 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Sites em WordPress</h3>
            <ul>
              <li><a href="https://rioprojetositalinea.com.br/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">rioprojetositalinea.com.br</a></li>
              <li><a href="https://prontorodas.com.br/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">prontorodas.com.br</a></li>
              <li><a href="https://humanizar.med.br/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">humanizar.med.br</a></li>
              <li><a href="https://autovistoriapredial.eng.br/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">autovistoriapredial.eng.br</a></li>
              <li><a href="https://lp.newgreensolutions.com.br/ebook/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">lp.newgreensolutions.com.br/ebook</a></li>
              <li><a href="https://lp.newgreensolutions.com.br/consultoria/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">lp.newgreensolutions.com.br/consultoria</a></li>
              <li><a href="https://chezcox.com.br/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">chezcox.com.br</a></li>
              <li><a href="https://ireneprada.com.br/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">ireneprada.com.br</a></li>
            </ul>
          </div>

          {/* Projeto 9 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Sites Institucionais</h3>
            <a href="https://rbdsre.ibremp.org.br" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">rbdsre.ibremp.org.br</a>
          </div>

          {/* Projeto 10 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Mapa de Equipamentos Florestais</h3>
            <p className="mb-4">React | Vite | TailwindCSS | Typescript | Desafio proposto por empresa</p>
            <a href="https://github.com/lucassdantas/aiko-florestal-machine/tree/teste/lucas-dantas" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
          </div>

          {/* Projeto 11 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Corporeto</h3>
            <p className="mb-4">NextJS, EmailJS e Tailwind | Deploy na Vercel - Trabalho remunerado</p>
            <a href="https://corporetorre.com.br/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">corporetorre.com.br</a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
