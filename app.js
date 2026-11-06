const rows=[...document.querySelectorAll('.clip')];
async function start(row){const videos=[...row.querySelectorAll('video')];try{await Promise.all(videos.map(v=>{if(v.readyState>=2)return Promise.resolve();return new Promise((resolve,reject)=>{v.addEventListener('loadeddata',resolve,{once:true});v.addEventListener('error',reject,{once:true});if(!v.src){v.src=v.dataset.src;v.load()}})}));if(!row.visible||row.paused)return;videos.forEach(v=>{v.currentTime=0});await Promise.all(videos.map(v=>v.play()));}catch{console.warn('Video playback unavailable', row)}}
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{e.target.visible=e.isIntersecting;if(e.isIntersecting&&!e.target.paused)start(e.target);else e.target.querySelectorAll('video').forEach(v=>v.pause())}),{threshold:0.15});
rows.forEach(row=>observer.observe(row));
document.getElementById('weather').onchange=e=>{let count=0;rows.forEach(row=>{row.hidden=!!e.target.value&&row.dataset.weather!==e.target.value;if(!row.hidden)count++;else row.querySelectorAll('video').forEach(v=>v.pause())});document.getElementById('count').textContent=count+' sequences'};
setInterval(()=>rows.filter(r=>r.visible&&!r.paused&&!r.hidden).forEach(r=>{const vs=[...r.querySelectorAll('video')];vs.slice(1).forEach(v=>{if(v.readyState>=2&&Math.abs(v.currentTime-vs[0].currentTime)>.08)v.currentTime=vs[0].currentTime})}),200);

document.querySelectorAll(".clip video").forEach(v=>v.addEventListener("contextmenu",e=>e.preventDefault()));
