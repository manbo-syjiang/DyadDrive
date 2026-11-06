const rows=[...document.querySelectorAll('.clip')];
document.getElementById('weather').onchange=e=>{let count=0;rows.forEach(row=>{row.hidden=!!e.target.value&&row.dataset.weather!==e.target.value;if(!row.hidden)count++});document.getElementById('count').textContent=count+' sequences'};
