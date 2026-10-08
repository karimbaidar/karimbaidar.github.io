(function () {
  'use strict';
  if (!window.React || !window.ReactDOM) {
    var loadingNode = document.getElementById('root');
    if (loadingNode) loadingNode.textContent = 'The site could not load React. Check your internet connection and refresh.';
    return;
  }
  var h = React.createElement;
  var F = React.Fragment;
  var navigation = [
    { label: 'Our idea', href: '#vision' },
    { label: 'Our products', href: '#products' },
    { label: 'How we build', href: '#model' },
    { label: 'Principles', href: '#principles' }
  ];
  var faqs = [
    { question: 'What exactly is Zalaand?', answer: 'Zalaand is the name behind a growing ambition: to create focused digital products that each tackle a specific, real-world problem. Every product can have its own name, website and users.' },
    { question: 'What is the first Zalaand product?', answer: 'CommerceGuardian OS is our first featured product. It helps Shopify merchants identify order risks before fulfillment. You can explore it at commerceguardianos.com.' },
    { question: 'Will every application carry the Zalaand name?', answer: 'No. Individual products can have independent brands and domains. Zalaand is the creator behind them, not a label every product has to wear.' },
    { question: 'Are more apps available already?', answer: 'Only CommerceGuardian OS is featured here for now. Future applications will be introduced when they are ready, rather than listed as if they already exist.' }
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
    return h('a', { href: '#home', className: 'brand', 'aria-label': 'Zalaand home' },
      h(Mark, null),
      h('span', { className: 'brand-word' }, 'ZALAAND')
    );
  }
  function ProductGraphic() {
    return h('div', { className: 'hero-graphic product-visual', 'aria-label': 'Featured Zalaand product: CommerceGuardian OS' },
      h('div', { className: 'graphic-top' }, h('span', null, 'BUILT BY ZALAAND'), h('b', null, 'PRODUCT 001')),
      h('div', { className: 'product-preview' },
        h('div', { className: 'preview-mark', 'aria-hidden': 'true' }, 'CG'),
        h('div', { className: 'preview-caption' }, 'OUR FIRST FEATURED PRODUCT'),
        h('h3', null, 'CommerceGuardian', h('span', null, ' OS')),
        h('p', null, 'Better decisions before orders ship.'),
        h('div', { className: 'preview-pillrow' },
          h('span', null, 'Order risk'),
          h('span', null, 'Shopify'),
          h('span', null, 'Fulfillment')
        ),
        h('div', { className: 'preview-rule' }),
        h('a', { className: 'preview-link', href: 'https://commerceguardianos.com/', target: '_blank', rel: 'noopener noreferrer' }, 'Explore the product ↗')
      ),
      h('div', { className: 'graphic-bottom' }, h('span', null, 'Distinct products. Clear purpose.'), h('strong', null, 'More to create'))
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
      h('div', { className: 'announce' }, 'Creating what the world is still missing'),
      h('header', { className: 'header' },
        h('nav', { className: 'wrap nav', 'aria-label': 'Main navigation' },
          h(Brand, null),
          h('div', { id: 'navigation', className: 'links' + (menuOpen ? ' open' : '') },
            navigation.map(function (n) { return h('a', { key: n.href, href: n.href, onClick: closeMenu }, n.label); })
          ),
          h('a', { className: 'nav-action', href: '#products' }, 'Explore our products ', h('span', { 'aria-hidden': 'true' }, '↗')),
          h('button', { className: 'menu-btn', type: 'button', onClick: function () { setMenuOpen(!menuOpen); }, 'aria-expanded': menuOpen, 'aria-controls': 'navigation', 'aria-label': menuOpen ? 'Close menu' : 'Open menu' }, menuOpen ? 'Close ✕' : 'Menu ☰')
        )
      ),
      h('main', { id: 'main' },
        h('section', { className: 'hero', id: 'home' },
          h('div', { className: 'wrap hero-grid' },
            h('div', { className: 'hero-copy' },
              h('div', { className: 'eyebrow' }, 'ZALAAND / THE IDEAS BEHIND THE PRODUCTS'),
              h('h1', null, 'The world', h('br'), h('span', { className: 'accent' }, 'isn’t finished.')),
              h('p', null, 'There are better ways to solve everyday problems, and ideas worth bringing to life. We turn those possibilities into focused, independent products.'),
              h('div', { className: 'button-group' },
                h('a', { href: '#products', className: 'btn btn-primary' }, 'Explore what we build ', h('span', { 'aria-hidden': 'true' }, '↗')),
                h('a', { href: '#vision', className: 'btn btn-secondary' }, 'Discover Zalaand ', h('span', { 'aria-hidden': 'true' }, '→'))
              ),
              h('div', { className: 'hero-foot' }, h('span', { className: 'dash' }), 'Ideas become products. Products make a difference.')
            ),
            h(ProductGraphic, null)
          )
        ),
        h('div', { className: 'trust-band' },
          h('div', { className: 'wrap trust-inner' },
            h('strong', null, 'We build for problems worth solving'),
            h('div', { className: 'trust-values' },
              h('span', null, 'Real problems'),
              h('span', null, 'Original products'),
              h('span', null, 'Independent brands')
            )
          )
        ),
        h('section', { id: 'vision', className: 'section' },
          h('div', { className: 'wrap vision' },
            h('div', { className: 'vision-left', 'aria-hidden': 'true' },
              h('div', { className: 'vision-small one' }),
              h('div', { className: 'vision-small two' }),
              h('div', { className: 'vision-small three' }),
              h('div', { className: 'vision-stat' }, h('strong', null, '∞'), h('span', null, 'possibilities', h('br'), 'worth exploring'))
            ),
            h('div', { className: 'vision-copy' },
              h('div', { className: 'section-kicker' }, '01 / The idea'),
              h('h2', { className: 'section-heading' }, 'We don’t build the same thing twice.'),
              h('p', null, 'Zalaand draws its name from a Pashto word meaning bright or radiant. To us, it stands for possibility: seeing what could be better and doing something about it.'),
              h('p', null, 'We create individual software products, each with its own problem to solve, its own identity and its own audience. The applications stand on their own. The conviction to keep building connects them.'),
              h('div', { className: 'signature' }, h('span', { 'aria-hidden': 'true' }, '✳'), 'One maker. Many independent ideas.')
            )
          )
        ),
        h('section', { id: 'products', className: 'section ecosystem' },
          h('div', { className: 'wrap' },
            h('div', { className: 'section-head-row' },
              h('div', null, h('div', { className: 'section-kicker' }, '02 / From Zalaand'), h('h2', { className: 'section-heading' }, 'Meet the products.', h('br'), 'Meet their purpose.')),
              h('p', { className: 'section-intro' }, 'Every product starts with a question: what could work better? Each answer deserves a brand and experience of its own.')
            ),
            h('div', { className: 'portfolio-grid' },
              h('article', { className: 'portfolio-card featured-portfolio' },
                h('div', { className: 'portfolio-top' },
                  h('span', { className: 'portfolio-eyebrow' }, '01 / FEATURED PRODUCT'),
                  h('span', { className: 'portfolio-status' }, 'Explore now')
                ),
                h('div', { className: 'portfolio-logo', 'aria-hidden': 'true' }, 'CG'),
                h('h3', null, 'CommerceGuardian OS'),
                h('p', null, 'Help protect Shopify orders before fulfillment. CommerceGuardian OS brings address-risk signals, operational reviews and order-risk visibility into the merchant workflow.'),
                h('div', { className: 'portfolio-tags' }, h('span', null, 'E-commerce'), h('span', null, 'Shopify'), h('span', null, 'Order operations')),
                h('a', { className: 'portfolio-visit', href: 'https://commerceguardianos.com/', target: '_blank', rel: 'noopener noreferrer' }, 'Visit commerceguardianos.com ', h('span', { 'aria-hidden': 'true' }, '↗'))
              ),
              h('article', { className: 'portfolio-card future-portfolio' },
                h('div', { className: 'portfolio-top' }, h('span', { className: 'portfolio-eyebrow' }, 'WHAT COMES NEXT'), h('span', { className: 'future-spark', 'aria-hidden': 'true' }, '✳')),
                h('div', { className: 'future-orbit', 'aria-hidden': 'true' }, h('span', null, '+')),
                h('h3', null, 'The next idea is out there.'),
                h('p', null, 'We’re leaving this space open for the next product worth building. No invented product names, no empty promises.'),
                h('div', { className: 'future-end' }, 'New products will be introduced here.')
              )
            )
          )
        ),
        h('section', { id: 'model', className: 'section model' },
          h('div', { className: 'wrap' },
            h('div', { className: 'section-kicker' }, '03 / How we build'),
            h('h2', { className: 'section-heading' }, 'No one-size-fits-all products.'),
            h('p', { className: 'section-intro' }, 'Zalaand is a home for distinct ideas, not a single app stretched into every industry. Each product is developed around the people it serves.'),
            h('div', { className: 'model-steps' },
              [
                { n: '01', title: 'Find the friction', body: 'Start with a specific problem people encounter, not a technology searching for a purpose.' },
                { n: '02', title: 'Make something useful', body: 'Turn the insight into a focused product with a clear job and an experience of its own.' },
                { n: '03', title: 'Let the product lead', body: 'Give every application its own name, domain, audience and room to evolve.' }
              ].map(function (item) { return h('article', { className: 'model-step', key: item.n }, h('div', { className: 'step-count' }, item.n), h('h3', null, item.title), h('p', null, item.body)); }),
            ),
            h('div', { className: 'model-ribbon' }, h('span', { className: 'line' }), 'Different challenges. Different products. One drive to create.')
          )
        ),
        h('section', { id: 'principles', className: 'section' },
          h('div', { className: 'wrap principle-grid' },
            h('div', null,
              h('div', { className: 'section-kicker' }, '04 / What drives us'),
              h('h2', { className: 'section-heading' }, 'Curiosity meets commitment.'),
              h('p', { className: 'section-intro' }, 'We believe useful technology begins with questioning what already exists, then having the patience to build a better alternative.'),
              h('div', { className: 'principles' },
                [
                  { n: '1', title: 'Solve something real', text: 'Practical problems deserve more attention than hype.' },
                  { n: '2', title: 'Give each idea its own identity', text: 'Great products should stand on their own merits.' },
                  { n: '3', title: 'Care about the details', text: 'Clarity, reliability and good design are part of the product.' },
                  { n: '4', title: 'Keep asking what’s next', text: 'The best next idea may be in an entirely different industry.' }
                ].map(function (item) { return h('div', { className: 'principle', key: item.n }, h('h3', null, h('span', null, item.n), item.title), h('p', null, item.text)); })
              )
            ),
            h('aside', { className: 'quote-panel' },
              h('div', { className: 'quote-mark', 'aria-hidden': 'true' }, '“'),
              h('blockquote', null, 'What exists today is not the limit of what we can create tomorrow.'),
              h('small', null, 'The thinking behind Zalaand')
            )
          )
        ),
        h('section', { className: 'section faq-section', id: 'questions' },
          h('div', { className: 'wrap faq-layout' },
            h('div', null, h('div', { className: 'section-kicker' }, '05 / Questions'), h('h2', { className: 'section-heading' }, 'A clearer picture.'), h('p', { className: 'section-intro' }, 'A little more about the products and the people behind them.')),
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
            h('div', null, h('div', { className: 'section-kicker' }, 'There is more to build'), h('h2', null, 'The world isn’t finished. Neither are we.')),
            h('a', { className: 'btn', href: '#products' }, 'Explore the first product ', h('span', { 'aria-hidden': 'true' }, '↗'))
          )
        )
      ),
      h('footer', { className: 'footer' },
        h('div', { className: 'wrap' },
          h('div', { className: 'footer-top' },
            h('div', { className: 'footer-about' }, h(Brand, null), h('p', null, 'Zalaand creates focused digital products for problems worth solving. Every application has its own purpose, identity and ambition.')),
            h('div', { className: 'footer-col' }, h('h3', null, 'Explore'), h('a', { href: '#vision' }, 'Our vision'), h('a', { href: '#products' }, 'Our products'), h('a', { href: '#model' }, 'How we build')),
            h('div', { className: 'footer-col' }, h('h3', null, 'Understand'), h('a', { href: '#principles' }, 'Our principles'), h('a', { href: '#questions' }, 'Common questions'), h('a', { href: '#home' }, 'Return to top'))
          ),
          h('div', { className: 'footer-bottom' }, h('p', null, '© ' + new Date().getFullYear() + ' Zalaand. All rights reserved.'), h('p', null, 'The world isn’t finished.'))
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