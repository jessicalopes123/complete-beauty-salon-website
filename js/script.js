document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

document.querySelectorAll('.card .btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const servico = btn.dataset.servico || 'Serviço';
    const target = document.querySelector('#contato'); 
    
    if(target){
      target.scrollIntoView({behavior:'smooth', block:'start'});
      }
  });
});




