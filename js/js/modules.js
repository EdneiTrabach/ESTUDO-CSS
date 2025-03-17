document.addEventListener('DOMContentLoaded', () => {
  // Carregar os dados dos módulos JavaScript
  fetch('data/modules.json')
    .then(response => response.json())
    .then(data => {
      renderModules(data);
    })
    .catch(error => {
      console.error('Erro ao carregar os módulos:', error);
      document.querySelector('.loading').textContent = 'Erro ao carregar os módulos. Consulte o console para mais detalhes.';
    });
});

function renderModules(modules) {
  const container = document.getElementById('modules-container');
  const template = document.getElementById('module-template');
  
  // Limpar o container
  container.innerHTML = '';
  
  // Renderizar cada módulo
  modules.forEach(module => {
    const moduleElement = template.content.cloneNode(true);
    
    // Preencher os dados
    moduleElement.querySelector('.module-title').textContent = module.title;
    moduleElement.querySelector('.context').textContent = module.context;
    moduleElement.querySelector('.description').textContent = module.description;
    
    // Adicionar o código JS formatado
    const codeElement = moduleElement.querySelector('.module-code');
    codeElement.innerHTML = formatJSCode(module.code);
    
    // Adicionar o exemplo
    const exampleElement = moduleElement.querySelector('.module-example');
    exampleElement.innerHTML = module.example;
    
    // Adicionar ao container
    container.appendChild(moduleElement);
  });
}

function formatJSCode(jsCode) {
  // Formata o código JavaScript com realce de sintaxe
  return jsCode;
}