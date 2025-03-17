document.addEventListener('DOMContentLoaded', () => {
  // Carregar os dados dos seletores
  fetch('data/selectors.json')
    .then(response => response.json())
    .then(data => {
      renderSelectors(data);
    })
    .catch(error => {
      console.error('Erro ao carregar os seletores:', error);
      document.querySelector('.loading').textContent = 'Erro ao carregar os seletores. Consulte o console para mais detalhes.';
    });
});

function renderSelectors(selectors) {
  const container = document.getElementById('selectors-container');
  const template = document.getElementById('selector-template');
  
  // Limpar o container
  container.innerHTML = '';
  
  // Renderizar cada seletor
  selectors.forEach(selector => {
    const selectorElement = template.content.cloneNode(true);
    
    // Preencher os dados
    selectorElement.querySelector('.selector-title').textContent = selector.title;
    selectorElement.querySelector('.context').textContent = selector.context;
    selectorElement.querySelector('.description').textContent = selector.description;
    
    // Adicionar o código CSS formatado
    const codeElement = selectorElement.querySelector('.selector-code');
    codeElement.innerHTML = formatCSSCode(selector.code);
    
    // Adicionar o exemplo
    const exampleElement = selectorElement.querySelector('.selector-example');
    exampleElement.innerHTML = selector.example;
    
    // Adicionar ao container
    container.appendChild(selectorElement);
  });
}

function formatCSSCode(cssCode) {
  // Formata o código CSS com realce de sintaxe baseado nas classes existentes
  return cssCode;
}
