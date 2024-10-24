import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Lucas De Sousa Dantas - Desenvolvedor Web</title>
        <meta name="description" content="Portfólio de Lucas De Sousa Dantas" />
      </Head>

      <header className="bg-blue-800 text-white p-6">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">Lucas De Sousa Dantas</h1>
          <p className="mt-2 text-xl">Desenvolvedor Web</p>
        </div>
      </header>

      <main className="container mx-auto py-12">
        {/* Introdução */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Sobre Mim</h2>
          <p className="text-lg leading-7">
            Aos 22 anos, possuo mais de três anos de experiência em desenvolvimento web, destacando-me pela agilidade na resolução de problemas complexos e capacidade de adaptação rápida a novas tecnologias e desafios.
          </p>
        </section>

        {/* Experiência */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Experiência Profissional</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">Desenvolvedor Web</h3>
              <p className="text-gray-600">RD Exclusive | Jul/2022 - Atualmente</p>
              <ul className="list-disc ml-5 mt-2">
                <li>Desenvolvimento e atualização de sistemas com NextJS, ReactJS, PHP, e integrações com banco de dados.</li>
                <li>Correção de bugs, análise de desempenho e aumento da segurança.</li>
                <li>Configuração de DNS e SMTP com integração à Cloudflare.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold">Estágio em Desenvolvimento Web</h3>
              <p className="text-gray-600">Click Internet | Dez/2021 - Jul/2022</p>
              <ul className="list-disc ml-5 mt-2">
                <li>Manutenção e otimização de sites WordPress com prazos curtos.</li>
                <li>Análise e remoção de vírus, configuração de ambientes e segurança.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold">Desenvolvedor Fullstack</h3>
              <p className="text-gray-600">Freelancer | Jun/2021 - Atualmente</p>
              <ul className="list-disc ml-5 mt-2">
                <li>Desenvolvimento e deploy de sites e landing pages com NextJS, React, PHP e WordPress.</li>
                <li>Planejamento de projetos e configuração de VPS para múltiplos sites.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-800 text-white text-center py-4">
        <p>© 2024 Lucas De Sousa Dantas. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}
