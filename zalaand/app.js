(function () {
  'use strict';
  var h = React.createElement;
  var F = React.Fragment;
  var navigation = [
    { label: 'Our vision', href: '#vision' },
    { label: 'The network', href: '#network' },
    { label: 'How it works', href: '#model' },
    { label: 'Principles', href: '#principles' }
  ];
  var areas = [
    { number: '01', symbol: '✧', title: 'Zalaand Academy', description: 'Expanding access to learning, education, mentorship and practical skills.', area: 'Education & learning' },
    { number: '02', symbol: '⌘', title: 'Zalaand Labs', description: 'Exploring technology and useful innovation for real-world challenges.', area: 'Technology & innovation' },
    { number: '03', symbol: '♡', title: 'Zalaand Impact', description: 'Supporting initiatives that strengthen communities and opportunity.', area: 'Community & development' },
    { number: '04', symbol: '◈', title: 'Zalaand Studio', description: 'Making space for storytelling, communication and creative expression.', area: 'Media & creativity' },
    { number: '05', symbol: '↗', title: 'Zalaand Ventures', description: 'Helping responsible enterprises turn ideas into sustainable value.', area: 'Enterprise & growth' },
    { number: '06', symbol: '◎', title: 'Zalaand Institute', description: 'Bringing research, thoughtful analysis and ideas into public life.', area: 'Research & ideas' }
  ];
  var faqs = [
    { question: 'Is Zalaand one organization or several?', answer: 'The vision is a network of distinct organizations connected by a shared identity and common principles. Each organization could have its own leadership, operations and priorities.' },
    { question: 'Will every organization make its own decisions?', answer: 'That is the intention. Operational independence is central to the model, while a coordinating body would look after shared identity, agreed values and collaboration.' },
    { question: 'Are these organizations already operating?', answer: 'No. The areas shown here are proposed directions, not a claim that the organizations have been incorporated or launched.' },
    { question: 'How would member organizations relate legally?', answer: 'The legal structure will be determined as Zalaand develops. Independent legal entities would require appropriate registration, governance agreements and clear responsibilities in each jurisdiction.' }
  ];
  function Mark(props) {
    var center = props.center || '#bfd8b6';
    var rays = [];
    for (var i = 0; i < 8; i++) {
      var angle = (Math.PI * 2 * i) / 8;
      rays.push(h('line', { key: i, x1: 21 + 10 * Math.cos(angle), y1: 21 + 10 * Math.sin(angle), x2: 21 + 17 * Math.cos(angle), y2: 21 + 17 * Math.sin(angle), stroke: center, strokeWidth: 2.6, strokeLinecap: 'round' }));
    }
    return h('svg', { className: 'brand-mark', viewBox: '0 0 42 42', fill: 'none', role: 'img', 'aria-label': 'Zalaand radiating light symbol' },
      h('circle', { cx: 21, cy: 21, r: 5.5, fill: center }),
      rays
    );
  }
  function Brand() {
    return h('a', { href: '#home', className: 'brand', 'aria-label': 'Zalaand Network home' },
      h(Mark, null),
      h('span', { className: 'brand-word' }, 'ZALAAND', h('small', null, 'NETWORK'))
    );
  }
  function NetworkGraphic() {
    var nodes = [
      { x: 255, y: 43, label: 'ACADEMY' },
      { x: 420, y: 131, label: 'LABS' },
      { x: 420, y: 299, label: 'IMPACT' },
      { x: 255, y: 392, label: 'STUDIO' },
      { x: 90, y: 299, label: 'VENTURES' },
      { x: 90, y: 131, label: 'INSTITUTE' }
    ];
    return h('div', { className: 'hero-graphic', role: 'img', 'aria-label': 'Diagram of six independent organizations connected to the Zalaand Network' },
      h('div', { className: 'graphic-top' }, h('span', null, 'A NETWORK OF POSSIBILITIES'), h('b', null, 'A shared center')),
      h('svg', { className: 'network-svg', viewBox: '0 0 510 438', 'aria-hidden': 'true' },
        h('circle', { cx: 255, cy: 215, r: 164, stroke: '#527866', strokeDasharray: '2 9', opacity: .38, fill: 'none' }),
        h('circle', { cx: 255, cy: 215, r: 100, fill: '#16382b', stroke: '#648b71', opacity: .8 }),
        nodes.map(function (n, i) {
          return h('line', { key: 'line-' + i, x1: 255, y1: 215, x2: n.x, y2: n.y, stroke: '#8aa98d', strokeWidth: 1.3, opacity: .55 });
        }),
        h('circle', { cx: 255, cy: 215, r: 66, fill: '#c5deb8' }),
        h('circle', { cx: 255, cy: 215, r: 56, stroke: '#6c9b74', strokeWidth: 1, fill: 'none' }),
        h('text', { x: 255, y: 208, textAnchor: 'middle', fontSize: 19, fontWeight: '800', letterSpacing: 1.1, fill: '#153628' }, 'ZALAAND'),
        h('text', { x: 255, y: 227, textAnchor: 'middle', fontSize: 10, fontWeight: 800, letterSpacing: 3, fill: '#40644c' }, 'NETWORK'),
        nodes.map(function (n, i) {
          return h(F, { key: 'node-' + i },
            h('circle', { cx: n.x, cy: n.y, r: 34, fill: '#183c2f', stroke: '#7baf84', strokeWidth: 1.3 }),
            h('circle', { cx: n.x, cy: n.y - 9, r: 6, fill: '#c0dba9' }),
            h('text', { x: n.x, y: n.y + 13, fontSize: n.label.length > 8 ? 7.2 : 8.4, fontWeight: 800, letterSpacing: .5, textAnchor: 'middle', fill: '#e0ebdc' }, n.label)
          );
        })
      ),
      h('div', { className: 'graphic-bottom' }, h('span', null, 'Independent operations'), h('strong', null, 'Shared direction, distinct paths'))
    );
  }
  function App() {
    var menu = React.useState(false);
    var menuOpen = menu[0];
    var setMenuOpen = menu[1];
    var faq = React.useState(0);
    var activeFaq = faq[0];
    var setFaq = faq[1];
    var closeMenu = function () { setMenuOpen(false); };
    return h(F, null,
      h('a', { className: 'skip-link', href: '#main' }, 'Skip to content'),
      h('div', { className: 'announce' }, 'An emerging vision for an independent network'),
      h('header', { className: 'header' },
        h('nav', { className: 'wrap nav', 'aria-label': 'Main navigation' },
          h(Brand, null),
          h('div', { id: 'navigation', className: 'links' + (menuOpen ? ' open' : '') },
            navigation.map(function (n) { return h('a', { key: n.href, href: n.href, onClick: closeMenu }, n.label); })
          ),
          h('a', { className: 'nav-action', href: '#network' }, 'Explore the network ', h('span', { 'aria-hidden': 'true' }, '↗')),
          h('button', { className: 'menu-btn', type: 'button', onClick: function () { setMenuOpen(!menuOpen); }, 'aria-expanded': menuOpen, 'aria-controls': 'navigation', 'aria-label': menuOpen ? 'Close menu' : 'Open menu' }, menuOpen ? 'Close ✕' : 'Menu ☰')
        )
      ),
      h('main', { id: 'main' },
        h('section', { className: 'hero', id: 'home' },
          h('div', { className: 'wrap hero-grid' },
            h('div', { className: 'hero-copy' },
              h('div', { className: 'eyebrow' }, 'The Zalaand vision'),
              h('h1', null, 'Many paths.', h('br'), h('span', { className: 'accent' }, 'One horizon.')),
              h('p', null, 'Imagine a network where independent organizations move confidently in their own directions, yet contribute to something greater together. That is the idea behind Zalaand.'),
              h('div', { className: 'button-group' },
                h('a', { href: '#vision', className: 'btn btn-primary' }, 'Discover our vision ', h('span', { 'aria-hidden': 'true' }, '↗')),
                h('a', { href: '#model', className: 'btn btn-secondary' }, 'How the network works ', h('span', { 'aria-hidden': 'true' }, '→'))
              ),
              h('div', { className: 'hero-foot' }, h('span', { className: 'dash' }), 'Independent by design. Connected by purpose.')
            ),
            h(NetworkGraphic, null)
          )
        ),
        h('div', { className: 'trust-band' },
          h('div', { className: 'wrap trust-inner' },
            h('strong', null, 'The foundation of a different kind of network'),
            h('div', { className: 'trust-values' }, h('span', null, 'Shared identity'), h('span', null, 'Local autonomy'), h('span', null, 'Collective progress'))
          )
        ),
        h('section', { id: 'vision', className: 'section' },
          h('div', { className: 'wrap vision' },
            h('div', { className: 'vision-left', 'aria-hidden': 'true' },
              h('div', { className: 'vision-small one' }),
              h('div', { className: 'vision-small two' }),
              h('div', { className: 'vision-small three' }),
              h('div', { className: 'vision-stat' }, h('strong', null, '1'), h('span', null, 'shared identity', h('br'), 'many directions'))
            ),
            h('div', { className: 'vision-copy' },
              h('div', { className: 'section-kicker' }, '01 / Our vision'),
              h('h2', { className: 'section-heading' }, 'Stronger together. Free to be different.'),
              h('p', null, 'Zalaand takes its inspiration from the Pashto word for radiant or shining. We see that light as something that can travel in many directions.'),
              h('p', null, 'Rather than building one institution that tries to do everything, we envision a family of distinct organizations. Each could lead in its own field, make its own decisions and create its own impact, connected by shared principles and a recognizable identity.'),
              h('div', { className: 'signature' }, h('span', { 'aria-hidden': 'true' }, '✳'), 'A common purpose, not a single operating model.')
            )
          )
        ),
        h('section', { id: 'network', className: 'section ecosystem' },
          h('div', { className: 'wrap' },
            h('div', { className: 'section-head-row' },
              h('div', null, h('div', { className: 'section-kicker' }, '02 / The possibilities'), h('h2', { className: 'section-heading' }, 'Different fields.', h('br'), 'Shared ambition.')),
              h('p', { className: 'section-intro' }, 'Zalaand could grow through independent organizations working across disciplines. These six areas illustrate possibilities, not existing operational branches.')
            ),
            h('div', { className: 'org-grid' }, areas.map(function (item) {
              return h('article', { className: 'org-card', key: item.number },
                h('div', { className: 'org-card-head' }, h('span', { className: 'org-index' }, item.number, ' / 06'), h('span', { className: 'org-glyph', 'aria-hidden': 'true' }, item.symbol)),
                h('h3', null, item.title),
                h('p', null, item.description),
                h('div', { className: 'org-meta' }, item.area)
              );
            })),
            h('p', { className: 'note' }, '* Illustrative names and areas for future organizations. Legal names, incorporation and operating structures have not been finalized.')
          )
        ),
        h('section', { id: 'model', className: 'section model' },
          h('div', { className: 'wrap' },
            h('div', { className: 'section-kicker' }, '03 / How it works'),
            h('h2', { className: 'section-heading' }, 'A network, not a hierarchy of ideas.'),
            h('p', { className: 'section-intro' }, 'The coordinating center would protect what unites us. Independent organizations would remain responsible for the work that makes each one valuable.'),
            h('div', { className: 'model-steps' },
              [
                { n: '01', title: 'One shared identity', body: 'A common name, purpose and basic principles connect the organizations without erasing their differences.' },
                { n: '02', title: 'Independent leadership', body: 'Each organization would lead its own people, projects, budgets and day-to-day decisions.' },
                { n: '03', title: 'Connected where it counts', body: 'Members could exchange knowledge, collaborate voluntarily and protect a shared standard of trust.' }
              ].map(function (item) { return h('article', { className: 'model-step', key: item.n }, h('div', { className: 'step-count' }, item.n), h('h3', null, item.title), h('p', null, item.body)); })
            ),
            h('div', { className: 'model-ribbon' }, h('span', { className: 'line' }), 'A small shared center. A wide horizon of independent action.')
          )
        ),
        h('section', { id: 'principles', className: 'section' },
          h('div', { className: 'wrap principle-grid' },
            h('div', null,
              h('div', { className: 'section-kicker' }, '04 / What guides us'),
              h('h2', { className: 'section-heading' }, 'Our principles are the connection.'),
              h('p', { className: 'section-intro' }, 'Independence means more when there is clarity about what is shared. The Zalaand vision rests on a few simple commitments.'),
              h('div', { className: 'principles' },
                [
                  { n: '1', title: 'Autonomy', text: 'Give each organization room to lead within its purpose.' },
                  { n: '2', title: 'Integrity', text: 'Build trust through clear responsibilities and ethical decisions.' },
                  { n: '3', title: 'Collaboration', text: 'Share experience and resources when it benefits the collective.' },
                  { n: '4', title: 'Positive impact', text: 'Keep meaningful human progress at the center of our work.' }
                ].map(function (item) { return h('div', { className: 'principle', key: item.n }, h('h3', null, h('span', null, item.n), item.title), h('p', null, item.text)); })
              )
            ),
            h('aside', { className: 'quote-panel' },
              h('div', { className: 'quote-mark', 'aria-hidden': 'true' }, '“'),
              h('blockquote', null, 'We do not need every branch to follow the same path. We need every path to contribute to a brighter future.'),
              h('small', null, 'The philosophy behind Zalaand')
            )
          )
        ),
        h('section', { className: 'section faq-section', id: 'questions' },
          h('div', { className: 'wrap faq-layout' },
            h('div', null, h('div', { className: 'section-kicker' }, '05 / Questions'), h('h2', { className: 'section-heading' }, 'A clearer picture.'), h('p', { className: 'section-intro' }, 'A few important answers about the network we are imagining.')),
            h('div', { className: 'faq-list' }, faqs.map(function (item, idx) {
              var isOpen = activeFaq === idx;
              return h('div', { className: 'faq-item', key: idx },
                h('button', { className: 'faq-question', type: 'button', onClick: function () { setFaq(isOpen ? -1 : idx); }, 'aria-expanded': isOpen, 'aria-controls': 'faq-' + idx }, h('span', null, item.question), h('span', { className: 'faq-icon', 'aria-hidden': 'true' }, isOpen ? '−' : '+')),
                isOpen ? h('p', { className: 'faq-answer', id: 'faq-' + idx }, item.answer) : null
              );
            }))
          )
        ),
        h('section', { className: 'cta' },
          h('div', { className: 'wrap cta-inner' },
            h('div', null, h('div', { className: 'section-kicker' }, 'The next chapter'), h('h2', null, 'A brighter future has more than one path.')),
            h('a', { className: 'btn', href: '#home' }, 'Back to the beginning ', h('span', { 'aria-hidden': 'true' }, '↑'))
          )
        )
      ),
      h('footer', { className: 'footer' },
        h('div', { className: 'wrap' },
          h('div', { className: 'footer-top' },
            h('div', { className: 'footer-about' }, h(Brand, null), h('p', null, 'A vision for independent organizations united by purpose, integrity and the belief that progress can take many forms.')),
            h('div', { className: 'footer-col' }, h('h3', null, 'Explore'), h('a', { href: '#vision' }, 'Our vision'), h('a', { href: '#network' }, 'The network'), h('a', { href: '#model' }, 'Operating model')),
            h('div', { className: 'footer-col' }, h('h3', null, 'Understand'), h('a', { href: '#principles' }, 'Our principles'), h('a', { href: '#questions' }, 'Common questions'), h('a', { href: '#home' }, 'Return to top'))
          ),
          h('div', { className: 'footer-bottom' }, h('p', null, '© ' + new Date().getFullYear() + ' Zalaand Network. Concept website.'), h('p', null, 'Built for the future at zalaand.org'))
        )
      )
    );
  }
  var root = document.getElementById('root');
  if (root && window.React && window.ReactDOM) {
    ReactDOM.createRoot(root).render(h(App, null));
  } else if (root) {
    root.textContent = 'The site could not load React. Check your internet connection and refresh.';
  }
})();