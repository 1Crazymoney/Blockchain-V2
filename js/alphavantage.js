// ███▓███████▓▓╬╬╬╬╬╬╬╬╬╬╬╬▓███▓▓▓▓█▓╬╬╬▓█
// ███████▓█████▓▓╬╬╬╬╬╬╬╬▓███▓╬╬╬╬╬╬╬▓╬╬▓█ 
// ████▓▓▓▓╬╬▓█████╬╬╬╬╬╬███▓╬╬╬╬╬╬╬╬╬╬╬╬╬█
// ███▓▓▓▓╬╬╬╬╬╬▓██╬╬╬╬╬╬▓▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ 
// ████▓▓▓╬╬╬╬╬╬╬▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ 
// ███▓█▓███████▓▓███▓╬╬╬╬╬╬▓███████▓╬╬╬╬▓█ 
// ████████████████▓█▓╬╬╬╬╬▓▓▓▓▓▓▓▓╬╬╬╬╬╬╬█ 
// ███▓▓▓▓▓▓▓╬╬▓▓▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ 
// ████▓▓▓╬╬╬╬▓▓▓▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ 
// ███▓█▓▓▓▓▓▓▓▓▓▓▓▓▓▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ 
// █████▓▓▓▓▓▓▓▓█▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ 
// █████▓▓▓▓▓▓▓██▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬██ 
// █████▓▓▓▓▓████▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬██ 
// ████▓█▓▓▓▓██▓▓▓▓██╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬██ 
// ████▓▓███▓▓▓▓▓▓▓██▓╬╬╬╬╬╬╬╬╬╬╬╬█▓╬▓╬╬▓██ 
// █████▓███▓▓▓▓▓▓▓▓████▓▓╬╬╬╬╬╬╬█▓╬╬╬╬╬▓██ 
// █████▓▓█▓███▓▓▓████╬▓█▓▓╬╬╬▓▓█▓╬╬╬╬╬╬███ 
// ██████▓██▓███████▓╬╬╬▓▓╬▓▓██▓╬╬╬╬╬╬╬▓███ 
// ███████▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╬╬╬╬╬╬╬╬╬╬╬████ 
// ███████▓▓██▓▓▓▓▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓████ 
// ████████▓▓▓█████▓▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█████ 
// █████████▓▓▓█▓▓▓▓▓███▓╬╬╬╬╬╬╬╬╬╬╬▓██████ 
// ██████████▓▓▓█▓▓▓╬▓██╬╬╬╬╬╬╬╬╬╬╬▓███████ 
// ███████████▓▓█▓▓▓▓███▓╬╬╬╬╬╬╬╬╬▓████████ 
// ██████████████▓▓▓███▓▓╬╬╬╬╬╬╬╬██████████ 
// ███████████████▓▓▓██▓▓╬╬╬╬╬╬▓███████████


/*㈰㈱㈲㈳㈴㈵㈶㈷㈸㈹㈺㈻㈼㈽㈾㈿㉀㉁㉂㉃㈰㈱㈲㈳㈴㈵㈶㈷㈸㈹㈺㈻㈼㈽㈾㈿㉀㉁㉂㉃㉁
	validando  formulário de pesquisa das ações
㈰㈱㈲㈳㈴㈵㈶㈷㈸㈹㈺㈻㈼㈽㈾㈿㉀㉁㉂㉃㈰㈱㈲㈳㈴㈵㈶㈷㈸㈹㈺㈻㈼㈽㈾㈿㉀㉁㉂㉁㉂㉃*/	

// nome da ação cujo quer pesquisar as ações
var symbol = 'ITSA4.SA';

function validar(){		
	var aux = document.getElementById('txtSymbol').value;
	symbol = aux;
	
	if (aux === undefined || aux ==null || aux.length<5) {
		document.getElementById('error').style.display = 'block';
		document.getElementById('error').innerHTML = 'Código de ação inválido!';
		document.getElementById('txtSymbol').focus();		
	}
	else {
		document.getElementById('error').style.display = 'none';
		lineChartData = [ ['',0,0] ];
		symbol = aux;
		urlDaily = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&interval=5min&apikey=${apiKey}`;		
		// Solicitando os dados para a API
		requestData(urlDaily);				
	}	
}


/*㈰㈱㈲㈳㈴㈵㈶㈷㈸㈹㈺㈻㈼㈽㈾㈿㉀㉁㉂㉃㈰㈱㈲㈳㈴㈵㈶㈷㈸㈹㈺㈻㈼㈽㈾㈿㉀㉁㉂㉃㉁
	Programação do uso da API AlphaVantage
㈰㈱㈲㈳㈴㈵㈶㈷㈸㈹㈺㈻㈼㈽㈾㈿㉀㉁㉂㉃㈰㈱㈲㈳㈴㈵㈶㈷㈸㈹㈺㈻㈼㈽㈾㈿㉀㉁㉂㉁㉂㉃*/	

// Sua chave para acesso à API
var apiKey = 'A0TQ9ZT29KV921CS';

// URL para solicitar dados de cotação diária de uma ação
var urlDaily = 
	`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&interval=5min&apikey=${apiKey}`;

// Variáveis globais para receber os dados utilizados pelos gráficos
var barChartData;
var lineChartData = [ [,,] ];

// Função para requisitar os dados da API
async function requestData( url ) { 

	const options = {
		method: 'GET',
		mode: 'cors',
		cache: 'default'
	};
	
	await fetch( url, options )
		.then( response => { response.json() 
			.then ( data => showData(data) )
		})
		.catch ( e => showError(e.message) )
} 
/*㈰㈱㈲㈳㈴㈵㈶㈷㈸㈹㈺㈻㈼㈽㈾㈿㉀㉁㉂㉃㈰㈱㈲㈳㈴㈵㈶㈷㈸㈹㈺㈻㈼㈽㈾㈿㉀㉁㉂㉃㉁
// Função para informar possíveis erros
㈰㈱㈲㈳㈴㈵㈶㈷㈸㈹㈺㈻㈼㈽㈾㈿㉀㉁㉂㉃㈰㈱㈲㈳㈴㈵㈶㈷㈸㈹㈺㈻㈼㈽㈾㈿㉀㉁㉂㉁㉂㉃*/	

function showError(msg) {	
	document.getElementById('error').style.display = 'block';
	document.getElementById('error').innerHTML = 'Erro: ' + msg;
	document.getElementById('txtSymbol').focus();		
}
/*㈰㈱㈲㈳㈴㈵㈶㈷㈸㈹㈺㈻㈼㈽㈾㈿㉀㉁㉂㉃㈰㈱㈲㈳㈴㈵㈶㈷㈸㈹㈺㈻㈼㈽㈾㈿㉀㉁㉂㉃㉁
//	Função para exibição dos dados 
㈰㈱㈲㈳㈴㈵㈶㈷㈸㈹㈺㈻㈼㈽㈾㈿㉀㉁㉂㉃㈰㈱㈲㈳㈴㈵㈶㈷㈸㈹㈺㈻㈼㈽㈾㈿㉀㉁㉂㉁㉂㉃*/

function showData(data) {
	
	let aux = data['Time Series (Daily)'];
	let rowsCount = 0;		
	let maxima = 0;
	let minima = 99999999;
	let media = 0;
	
	document.getElementById('series-table').tBodies[0].innerHTML = '';
		
	for ( const field in aux ) {	
		let auxDate = new Date(field);
		let day = ( (auxDate.getDate()+1) <10) ? ('0'+ (auxDate.getDate()+1) ) : (auxDate.getDate() + 1);
		let month = ( (auxDate.getMonth()+1) <10) ? ('0'+ (auxDate.getMonth()+1) ) : (auxDate.getMonth()+1);
		let year = auxDate.getFullYear();		
		let formatDate =  day + '/' + month + '/' + year;	
		
		let openValue = parseFloat(aux[field]['1. open']).toFixed(2);
		let closeValue = parseFloat(aux[field]['4. close']).toFixed(2);		
		
		// Adicionando os últimos 4 registros na tabela da página index
		if ( rowsCount < 5 ) {
			addTableContent(formatDate, openValue, closeValue);			
		}			
		
		if (maxima < parseFloat(aux[field]['4. close'])) {
			maxima = parseFloat(aux[field]['4. close']);
		}
		
		if (minima > parseFloat(aux[field]['4. close'])) {
			minima = parseFloat(aux[field]['4. close']);			
		}
		
		media += parseFloat(aux[field]['4. close']);		
		
		lineChartData[rowsCount] = [formatDate, 
			parseFloat(aux[field]['1. open']), 
			parseFloat(aux[field]['4. close'])
		];
		
		//lineChartData.push(auxValues );
		rowsCount++;
	} // for	
	
	media = media / rowsCount;
	
	if (minima == 99999999) { maxima = 0; }
	
	// Informando valores para o gráfico de colunas
	barChartData = [ ['', maxima, media, minima] ];		
	google.charts.load('current', {packages: ['corechart', 'bar']});		
	google.charts.setOnLoadCallback(drawMultSeries);
	
	// Informando valores para o gráfico de linhas		
	google.charts.load('current', {packages: ['corechart', 'line']});		
	google.charts.setOnLoadCallback(drawCurveTypes);	
}

//	Função para adicionar dados à tabela da página index.html
function addTableContent(date, open, close){
	var myTable = document.getElementById('series-table').tBodies[0];	
	myTable.innerHTML = myTable.innerHTML + `<tr><td>${date}</td><td>${open}</td><td>${close}</td></tr>`;
}

/*㈰㈱㈲㈳㈴㈵㈶㈷㈸㈹㈺㈻㈼㈽㈾㈿㉀㉁㉂㉃㈰㈱㈲㈳㈴㈵㈶㈷㈸㈹㈺㈻㈼㈽㈾㈿㉀㉁㉂㉃㉁
// Gráficos Google Charts para os valores recebidos via API
㈰㈱㈲㈳㈴㈵㈶㈷㈸㈹㈺㈻㈼㈽㈾㈿㉀㉁㉂㉃㈰㈱㈲㈳㈴㈵㈶㈷㈸㈹㈺㈻㈼㈽㈾㈿㉀㉁㉂㉁㉂㉃*/

// Gráfico de colunas para valores de referência
function drawMultSeries() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Preço');
	data.addColumn('number', 'Máxima');
    data.addColumn('number', 'Média');
    data.addColumn('number', 'Mínima');


    data.addRows(barChartData);

    var options = {
        title: 'Referências de preço do ativo',
        hAxis: {
          title: 'Referência',
        },
        vAxis: {
          title: 'Valores'
        }
    };

    var chart = new google.visualization.ColumnChart( document.getElementById('chart-column') );
    chart.draw(data, options);
}


// Gráfico de linha para série diária de valores
function drawCurveTypes() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Data');
    data.addColumn('number', 'Abertura');
    data.addColumn('number', 'Fechamento');

    data.addRows(lineChartData.reverse());

    var options = {
		title: 'Diária de preços de ativos',  
        hAxis: {
          title: 'Data'
        },
        vAxis: {
          title: 'Valores'
        },
        series: {
          1: {curveType: 'function'}
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart-line'));
    chart.draw(data, options);
}


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	Função para animação ()
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	(function () {
	var canvas,
	  ctx,
	  circ,
	  nodes,
	  mouse,
	  SENSITIVITY,
	  SIBLINGS_LIMIT,
	  DENSITY,
	  NODES_QTY,
	  ANCHOR_LENGTH,
	  MOUSE_RADIUS;
  
	SENSITIVITY = 100;
	SIBLINGS_LIMIT = 10;
	DENSITY = 50;
	NODES_QTY = 0;
	ANCHOR_LENGTH = 20;
	MOUSE_RADIUS = 200;
  
	circ = 2 * Math.PI;
	nodes = [];
  
	canvas = document.querySelector("canvas");
	resizeWindow();
	mouse = {
	  x: canvas.width / 2,
	  y: canvas.height / 2,
	};
	ctx = canvas.getContext("2d");
	if (!ctx) {
	  alert("Ooops! Your browser does not support canvas :'(");
	}
  
	function Node(x, y) {
	  this.anchorX = x;
	  this.anchorY = y;
	  this.x = Math.random() * (x - (x - ANCHOR_LENGTH)) + (x - ANCHOR_LENGTH);
	  this.y = Math.random() * (y - (y - ANCHOR_LENGTH)) + (y - ANCHOR_LENGTH);
	  this.vx = Math.random() * 2 - 1;
	  this.vy = Math.random() * 2 - 1;
	  this.energy = Math.random() * 100;
	  this.radius = Math.random();
	  this.siblings = [];
	  this.brightness = 0;
	}
  
	Node.prototype.drawNode = function () {
	  var color = "rgba(255, 0, 0, " + this.brightness + ")";
	  ctx.beginPath();
	  ctx.arc(
		this.x,
		this.y,
		2 * this.radius + (2 * this.siblings.length) / SIBLINGS_LIMIT,
		0,
		circ
	  );
	  ctx.fillStyle = color;
	  ctx.fill();
	};
  
	Node.prototype.drawConnections = function () {
	  for (var i = 0; i < this.siblings.length; i++) {
		var color = "rgba(295, 0, 0, " + this.brightness + ")";
		ctx.beginPath();
		ctx.moveTo(this.x, this.y);
		ctx.lineTo(this.siblings[i].x, this.siblings[i].y);
		ctx.lineWidth = 1 - calcDistance(this, this.siblings[i]) / SENSITIVITY;
		ctx.strokeStyle = color;
		ctx.stroke();
	  }
	};
  
	Node.prototype.moveNode = function () {
	  this.energy -= 2;
	  if (this.energy < 1) {
		this.energy = Math.random() * 100;
		if (this.x - this.anchorX < -ANCHOR_LENGTH) {
		  this.vx = Math.random() * 2;
		} else if (this.x - this.anchorX > ANCHOR_LENGTH) {
		  this.vx = Math.random() * -2;
		} else {
		  this.vx = Math.random() * 4 - 2;
		}
		if (this.y - this.anchorY < -ANCHOR_LENGTH) {
		  this.vy = Math.random() * 2;
		} else if (this.y - this.anchorY > ANCHOR_LENGTH) {
		  this.vy = Math.random() * -2;
		} else {
		  this.vy = Math.random() * 4 - 2;
		}
	  }
	  this.x += (this.vx * this.energy) / 100;
	  this.y += (this.vy * this.energy) / 100;
	};
  
	function initNodes() {
	  ctx.clearRect(0, 0, canvas.width, canvas.height);
	  nodes = [];
	  for (var i = DENSITY; i < canvas.width; i += DENSITY) {
		for (var j = DENSITY; j < canvas.height; j += DENSITY) {
		  nodes.push(new Node(i, j));
		  NODES_QTY++;
		}
	  }
	}
  
	function calcDistance(node1, node2) {
	  return Math.sqrt(
		Math.pow(node1.x - node2.x, 2) + Math.pow(node1.y - node2.y, 2)
	  );
	}
  
	function findSiblings() {
	  var node1, node2, distance;
	  for (var i = 0; i < NODES_QTY; i++) {
		node1 = nodes[i];
		node1.siblings = [];
		for (var j = 0; j < NODES_QTY; j++) {
		  node2 = nodes[j];
		  if (node1 !== node2) {
			distance = calcDistance(node1, node2);
			if (distance < SENSITIVITY) {
			  if (node1.siblings.length < SIBLINGS_LIMIT) {
				node1.siblings.push(node2);
			  } else {
				var node_sibling_distance = 0;
				var max_distance = 0;
				var s;
				for (var k = 0; k < SIBLINGS_LIMIT; k++) {
				  node_sibling_distance = calcDistance(node1, node1.siblings[k]);
				  if (node_sibling_distance > max_distance) {
					max_distance = node_sibling_distance;
					s = k;
				  }
				}
				if (distance < max_distance) {
				  node1.siblings.splice(s, 1);
				  node1.siblings.push(node2);
				}
			  }
			}
		  }
		}
	  }
	}
  
	function redrawScene() {
	  resizeWindow();
	  ctx.clearRect(0, 0, canvas.width, canvas.height);
	  findSiblings();
	  var i, node, distance;
	  for (i = 0; i < NODES_QTY; i++) {
		node = nodes[i];
		distance = calcDistance(
		  {
			x: mouse.x,
			y: mouse.y,
		  },
		  node
		);
		if (distance < MOUSE_RADIUS) {
		  node.brightness = 1 - distance / MOUSE_RADIUS;
		} else {
		  node.brightness = 0;
		}
	  }
	  for (i = 0; i < NODES_QTY; i++) {
		node = nodes[i];
		if (node.brightness) {
		  node.drawNode();
		  node.drawConnections();
		}
		node.moveNode();
	  }
	  requestAnimationFrame(redrawScene);
	}
  
	function initHandlers() {
	  document.addEventListener("resize", resizeWindow, false);
	  canvas.addEventListener("mousemove", mousemoveHandler, false);
	}
  
	function resizeWindow() {
	  canvas.width = window.innerWidth;
	  canvas.height = window.innerHeight;
	}
  
	function mousemoveHandler(e) {
	  mouse.x = e.clientX;
	  mouse.y = e.clientY;
	}
  
	initHandlers();
	initNodes();
	redrawScene();
  })();

