document.addEventListener('DOMContentLoaded', () => {
  // Carregar os dados dos elementos HTML
  fetch('data/elements.json')
    .then(response => response.json())
    .then(data => {
      renderElements(data);
    })
    .catch(error => {
      console.error('Erro ao carregar os elementos:', error);
      document.querySelector('.loading').textContent = 'Erro ao carregar os elementos. Consulte o console para mais detalhes.';
    });
});

function renderElements(elements) {
  const container = document.getElementById('elements-container');
  const template = document.getElementById('element-template');
  
  // Limpar o container
  container.innerHTML = '';
  
  // Renderizar cada elemento
  elements.forEach(element => {
    const elementElement = template.content.cloneNode(true);
    
    // Preencher os dados
    elementElement.querySelector('.element-title').textContent = element.title;
    elementElement.querySelector('.context').textContent = element.context;
    elementElement.querySelector('.description').textContent = element.description;
    
    // Adicionar o código HTML formatado
    const codeElement = elementElement.querySelector('.element-code');
    codeElement.innerHTML = formatHTMLCode(element.code);
    
    // Adicionar o exemplo
    const exampleElement = elementElement.querySelector('.element-example');
    exampleElement.innerHTML = element.example;
    
    // Adicionar ao container
    container.appendChild(elementElement);
  });
}

function formatHTMLCode(htmlCode) {
  // Formata o código HTML com realce de sintaxe
  return htmlCode;
}