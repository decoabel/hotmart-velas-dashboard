const niches=[
{category:"Fabricación",name:"Velas artesanales para principiantes",demand:90,supply:88,angle:"Aprender desde cero con un proceso simple y guiado.",content:"Errores iniciales, materiales básicos, primeras velas y comparativas antes/después.",buyer:"Principiante que busca una actividad artesanal accesible y paso a paso."},
{category:"Fabricación",name:"Velas aromáticas",demand:91,supply:80,angle:"Aroma duradero y experiencia sensorial en casa.",content:"Pruebas de fragancias, fijación del aroma, combinaciones y presentación.",buyer:"Persona interesada en decoración, aroma del hogar y regalos."},
{category:"Fabricación",name:"Velas de soja",demand:89,supply:83,angle:"Velas modernas con estética natural y artesanal.",content:"Soja vs. parafina, acabado, mechas, aroma y problemas comunes.",buyer:"Consumidor atraído por propuestas naturales y estética minimalista."},
{category:"Fabricación",name:"Velas decorativas / moldes 3D",demand:86,supply:66,angle:"Diseños visuales para decoración y regalos.",content:"Moldes, relieves, flores, formas especiales y videos de desmolde.",buyer:"Público creativo que valora diseño y personalización."},
{category:"Fabricación",name:"Velas tipo postre / café",demand:91,supply:62,angle:"Crear velas que parecen postres reales y detienen el scroll.",content:"Videos sorpresa, capas, toppings, café, cupcakes y piezas hiperrealistas.",buyer:"Persona atraída por productos virales, regalos y emprendimientos visuales."},
{category:"Fabricación",name:"Wax Melts",demand:79,supply:44,angle:"Producto pequeño, coleccionable y fácil de combinar por aromas.",content:"Moldes, mezclas aromáticas, packaging, colecciones y bundles.",buyer:"Comprador de aromas para el hogar y productos de ticket accesible."},
{category:"Bienestar",name:"Aromaterapia",demand:87,supply:61,angle:"Convertir aroma y ambiente en una experiencia de bienestar.",content:"Familias aromáticas, ambientes, rutinas y momentos del día.",buyer:"Público de bienestar, autocuidado y hogar."},
{category:"Bienestar",name:"Velas de masaje / spa",demand:82,supply:43,angle:"Producto premium para spa, autocuidado y servicios de bienestar.",content:"Texturas, ritual de spa, uso profesional y presentación premium.",buyer:"Masajistas, esteticistas, spas y consumidores de autocuidado."},
{category:"Bienestar",name:"Velas con intención / rituales",demand:80,supply:47,angle:"Unir artesanía, intención y ritual personal.",content:"Colecciones temáticas, storytelling, colores y momentos de uso.",buyer:"Público interesado en rituales, regalos con significado y experiencias."},
{category:"Bienestar",name:"Velas naturales / ecológicas",demand:83,supply:58,angle:"Propuesta basada en materiales, origen y estilo de vida consciente.",content:"Materiales, packaging sobrio, comparativas y proceso artesanal.",buyer:"Consumidor sensible a materiales, sostenibilidad y estética natural."},
{category:"Bienestar",name:"Velas para relajación",demand:85,supply:55,angle:"Crear ambientes tranquilos y rutinas de descanso.",content:"Escenas nocturnas, lectura, baño, rituales y sonido ambiente.",buyer:"Personas que consumen contenido de descanso, hogar y autocuidado."},
{category:"Negocio",name:"Negocio de velas desde casa",demand:94,supply:72,angle:"Convertir una habilidad artesanal en una fuente de ingresos desde casa.",content:"Costos iniciales, espacio mínimo, catálogo, primeras ventas y testimonios.",buyer:"Emprendedor principiante que busca ingresos complementarios."},
{category:"Negocio",name:"Costos y fijación de precios",demand:88,supply:48,angle:"Cobrar correctamente, proteger margen y conocer la utilidad real.",content:"Ejemplos de costos, errores de precio, calculadoras y casos prácticos.",buyer:"Persona que ya produce o está a punto de vender y teme cobrar mal."},
{category:"Negocio",name:"Packaging / marca / presentación",demand:86,supply:51,angle:"Elevar el valor percibido mediante marca y presentación.",content:"Antes/después, etiquetas, cajas, fotografía y branding.",buyer:"Emprendedor que necesita verse profesional para vender más caro."},
{category:"Negocio",name:"Cómo vender velas por redes",demand:93,supply:54,angle:"Convertir contenido visual en consultas, leads y ventas.",content:"Reels, hooks, demostraciones, contenido educativo y CTA.",buyer:"Emprendedor que sabe hacer velas pero no sabe venderlas online."},
{category:"Negocio",name:"Proveedores y materiales",demand:91,supply:55,angle:"Reducir errores de compra y empezar con una lista clara de insumos.",content:"Checklists, ceras, mechas, envases, cantidades y compras inteligentes.",buyer:"Principiante con intención de compra y temor a desperdiciar dinero."},
{category:"Negocio",name:"Ingresos extra con velas",demand:95,supply:68,angle:"Presentar las velas como vehículo de ingreso complementario.",content:"Metas pequeñas, historias de transformación, productos iniciales y ventas desde casa.",buyer:"Persona que busca una segunda fuente de ingresos con una actividad manual."},
{category:"Eventos",name:"Velas para bodas",demand:82,supply:39,angle:"Recuerdos personalizados con alto valor emocional.",content:"Souvenirs, nombres, fechas, empaques, colecciones y pedidos por volumen.",buyer:"Emprendedor que quiere vender a novias, planners y eventos."},
{category:"Eventos",name:"Baby shower / bautizos",demand:78,supply:35,angle:"Detalles personalizados para celebraciones familiares.",content:"Mini velas, colores suaves, sets, mesas temáticas y packaging.",buyer:"Público de eventos familiares y pequeños emprendimientos de recuerdos."},
{category:"Eventos",name:"Velas personalizadas / souvenirs",demand:87,supply:47,angle:"Personalización para regalos, fechas y ocasiones especiales.",content:"Nombres, etiquetas, packs, acabados y ejemplos de pedidos.",buyer:"Emprendedor orientado a ventas por encargo y personalización."},
{category:"Eventos",name:"Velas para Navidad",demand:94,supply:57,angle:"Colecciones estacionales con fuerte intención de regalo.",content:"Aromas navideños, packs, preventa, edición limitada y cuenta regresiva.",buyer:"Emprendedor que quiere aprovechar picos estacionales de compra."},
{category:"Eventos",name:"San Valentín / Día de la Madre",demand:91,supply:52,angle:"Regalos visuales y emocionales para campañas de temporada.",content:"Packs, personalización, mensajes, edición limitada y fechas de entrega.",buyer:"Compradores de regalos y emprendedores de campañas estacionales."},
{category:"Eventos",name:"Regalos corporativos",demand:76,supply:31,angle:"Pedidos por volumen para empresas, clientes y eventos corporativos.",content:"Packaging corporativo, lotes, muestras, personalización y cotización.",buyer:"Emprendedor orientado a ventas B2B y pedidos de mayor volumen."}
];

const $=id=>document.getElementById(id);
const dashboard=$("dashboard"),grid=$("nicheGrid");
let selected=null;
let audioCtx=null,masterGain=null,musicTimer=null,musicOn=false,chordIndex=0;

const gap=n=>n.demand-n.supply;
const avg=(rows,key)=>rows.length?Math.round(rows.reduce((s,n)=>s+n[key],0)/rows.length):0;
const level=n=>{const g=gap(n);return g>=35?"Muy alta":g>=25?"Alta":g>=15?"Media-alta":g>=7?"Media":"Baja"};

function syncMusicUi(){
  const on=musicOn;
  $("musicLed").classList.toggle("on",on);
  $("musicBtn").setAttribute("aria-pressed",String(on));
  $("musicLabel").textContent=on?"Música ON":"Música OFF";
}
function playAmbientChord(){
  if(!audioCtx||!masterGain||!musicOn)return;
  const chords=[
    [196,246.94,293.66,392],
    [174.61,220,261.63,349.23],
    [220,261.63,329.63,440],
    [196,246.94,329.63,392]
  ];
  const notes=chords[chordIndex%chords.length];
  chordIndex++;
  const now=audioCtx.currentTime;
  notes.forEach((freq,i)=>{
    const osc=audioCtx.createOscillator();
    const gain=audioCtx.createGain();
    const filter=audioCtx.createBiquadFilter();
    osc.type=i%2===0?"sine":"triangle";
    osc.frequency.setValueAtTime(freq,now);
    filter.type="lowpass";
    filter.frequency.setValueAtTime(720,now);
    gain.gain.setValueAtTime(0.0001,now);
    gain.gain.exponentialRampToValueAtTime(0.0065/(i+1),now+1.6);
    gain.gain.exponentialRampToValueAtTime(0.0001,now+9.4);
    osc.connect(filter).connect(gain).connect(masterGain);
    osc.start(now);
    osc.stop(now+9.7);
  });
}
async function startMusic(){
  if(musicOn)return true;
  try{
    const Ctx=window.AudioContext||window.webkitAudioContext;
    if(!Ctx)throw new Error("AudioContext no disponible");
    if(!audioCtx){
      audioCtx=new Ctx();
      masterGain=audioCtx.createGain();
      masterGain.gain.value=.42;
      masterGain.connect(audioCtx.destination);
    }
    if(audioCtx.state==="suspended")await audioCtx.resume();
    musicOn=true;
    playAmbientChord();
    musicTimer=setInterval(playAmbientChord,8000);
    syncMusicUi();
    return true;
  }catch(err){
    musicOn=false;
    syncMusicUi();
    return false;
  }
}
async function stopMusic(){
  musicOn=false;
  if(musicTimer){clearInterval(musicTimer);musicTimer=null}
  if(audioCtx){
    try{await audioCtx.close()}catch(e){}
    audioCtx=null;masterGain=null;
  }
  syncMusicUi();
}
async function toggleMusic(){musicOn?await stopMusic():await startMusic()}
function initCategories(){
  [...new Set(niches.map(n=>n.category))].sort().forEach(c=>{
    const o=document.createElement("option");o.value=c;o.textContent=c;$("categoryFilter").appendChild(o)
  })
}
function filtered(){
  const q=$("searchInput").value.trim().toLowerCase(),cat=$("categoryFilter").value,md=+$("minDemand").value,ms=+$("maxSupply").value,mg=+$("minGap").value;
  let rows=niches.filter(n=>(!q||n.name.toLowerCase().includes(q)||n.category.toLowerCase().includes(q))&&(cat==="all"||n.category===cat)&&n.demand>=md&&n.supply<=ms&&gap(n)>=mg);
  const sort=$("sortBy").value;
  rows.sort((a,b)=>sort==="demand"?b.demand-a.demand:sort==="supply"?a.supply-b.supply:sort==="name"?a.name.localeCompare(b.name,"es"):gap(b)-gap(a));
  return rows
}
function updateMetrics(rows){
  const base=rows.length?rows:niches,best=[...base].sort((a,b)=>gap(b)-gap(a))[0];
  $("kpiBestGap").textContent=`+${gap(best)}`;$("kpiBestNiche").textContent=best.name;$("kpiDemand").textContent=`${avg(base,"demand")}%`;$("kpiSupply").textContent=`${avg(base,"supply")}%`;$("kpiHigh").textContent=base.filter(n=>gap(n)>=30).length;
  $("summaryText").textContent=`La mayor brecha visible es “${best.name}”: Demanda ${best.demand} vs. Oferta ${best.supply}, con +${gap(best)} puntos.`
}
function render(){
  const rows=filtered();grid.innerHTML="";$("resultsCount").textContent=`${rows.length} resultado${rows.length===1?"":"s"}`;updateMetrics(rows);
  if(!rows.length){grid.innerHTML='<div class="empty">No hay subnichos que cumplan estos filtros. Restablece o amplía los rangos.</div>';return}
  rows.forEach(n=>{
    const b=document.createElement("button");b.type="button";b.className=`niche-card ${selected===n.name?"active":""}`;b.setAttribute("aria-pressed",selected===n.name?"true":"false");
    b.innerHTML=`<div class="card-top"><div><div class="category">${n.category}</div><div class="niche-name">${n.name}</div></div><span class="level">${level(n)}</span></div><div class="bars"><div class="bar-row"><span>Dem.</span><div class="mini-meter"><i class="demand-bar" style="width:${n.demand}%"></i></div><b>${n.demand}</b></div><div class="bar-row"><span>Oferta</span><div class="mini-meter"><i class="supply-bar" style="width:${n.supply}%"></i></div><b>${n.supply}</b></div></div><div class="gap-highlight"><span>Brecha</span><strong>+${gap(n)}</strong></div>`;
    b.addEventListener("click",()=>selectNiche(n.name));grid.appendChild(b)
  });
  if(!selected||!rows.some(n=>n.name===selected))selectNiche(rows[0].name,false)
}
function selectNiche(name,rerender=true){
  const n=niches.find(x=>x.name===name);if(!n)return;selected=n.name;
  $("detailName").textContent=n.name;$("detailLevel").textContent=`Oportunidad ${level(n)}`;$("detailGap").textContent=`+${gap(n)}`;$("detailDemand").textContent=`${n.demand}%`;$("detailSupply").textContent=`${n.supply}%`;$("detailGapSmall").textContent=`+${gap(n)}`;
  $("detailDemandBar").style.width=`${n.demand}%`;$("detailSupplyBar").style.width=`${n.supply}%`;$("detailGapBar").style.width=`${Math.min(100,Math.max(0,gap(n))*2)}%`;
  $("detailAngle").textContent=n.angle;$("detailContent").textContent=n.content;$("detailBuyer").textContent=n.buyer;
  $("detailLevel").style.color=gap(n)>=30?"var(--good)":gap(n)>=15?"var(--mid)":"var(--low)";
  if(rerender)render()
}
function syncRangeLabels(){$("minDemandValue").textContent=$("minDemand").value;$("maxSupplyValue").textContent=$("maxSupply").value;$("minGapValue").textContent=$("minGap").value}
function resetFilters(){$("searchInput").value="";$("categoryFilter").value="all";$("minDemand").value=0;$("maxSupply").value=100;$("minGap").value=0;$("sortBy").value="gap";syncRangeLabels();render()}

["searchInput","categoryFilter","minDemand","maxSupply","minGap","sortBy"].forEach(id=>{
  const el=$(id);el.addEventListener(id==="searchInput"||["minDemand","maxSupply","minGap"].includes(id)?"input":"change",()=>{syncRangeLabels();render()})
});
$("resetFilters").addEventListener("click",resetFilters);
$("musicBtn").addEventListener("click",toggleMusic);

initCategories();syncRangeLabels();render();syncMusicUi();