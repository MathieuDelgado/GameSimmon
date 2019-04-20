let ElementRouge=document.getElementById("red");
let ElementVert=document.getElementById("green");
let ElementBleu=document.getElementById("blue");
let ElementJaune=document.getElementById("yellow");
let TabCoulBase=["red","green","blue","yellow"];
let TabCoulFonce=["#700a0a","#154707","#1916a3","#757322"];
let TabElemt=[ElementRouge,ElementVert,ElementBleu,ElementJaune];

/*DONNEES POUR LE CLIC*/
let variableDuClic=5;
let memoireClick="";
let TabdeMesClics=[];

/*DONNEES POUR LE MECANISME*/
let var4Aleatoire=(Math.trunc(Math.random()*4));
let Tabvar4Aleatoire=[];
let memoireClickAleatoire="";

/*FONCTIONS POUR LE CLICK*/
function attribueCaractere(){
	if(variableDuClic===0){
		memoireClick+="R";
		console.log(memoireClick);
	}
	else if(variableDuClic===1){
		memoireClick+="V";
		console.log(memoireClick);
	}
	else if(variableDuClic===2){
		memoireClick+="B";
		console.log(memoireClick);
	}
	else if(variableDuClic===3){
		memoireClick+="J";
		console.log(memoireClick);
	}
}
function CoulAppliquee(variableDuClic){
    TabElemt[variableDuClic].style.backgroundColor = TabCoulFonce[variableDuClic];
	setTimeout(function() {
    TabElemt[variableDuClic].style.backgroundColor = TabCoulBase[variableDuClic];
}, 1000);
}




/*FONCTIONS POUR LE MECANISME*/
function attribueCaractereAleatoire(){
	if(var4Aleatoire===0){
		memoireClickAleatoire+="R";

	}
	else if(var4Aleatoire===1){
		memoireClickAleatoire+="V";
	}
	else if(var4Aleatoire===2){
		memoireClickAleatoire+="B";
	}
	else if(var4Aleatoire===3){
		memoireClickAleatoire+="J";
	}
}

function mecanismeAleatoire(){
	TabElemt[var4Aleatoire].style.backgroundColor = TabCoulFonce[var4Aleatoire];
		setTimeout(
			function() {
				TabElemt[var4Aleatoire].style.backgroundColor = TabCoulBase[var4Aleatoire];
						},1000 
			);
};

/*FIN DES FONCTIONS*/





/*alert("tu joue");

mecanismeAleatoire();
attribueCaractereAleatoire();
Tabvar4Aleatoire.push(var4Aleatoire);

console.log(Tabvar4Aleatoire);
console.log(memoireClickAleatoire);

*/

/*Ecouteur JE JOUE*/
	TabElemt[0].addEventListener("click", function(e){
		variableDuClic=0;
		CoulAppliquee(variableDuClic);
		attribueCaractere(variableDuClic);
	}
		)

	TabElemt[1].addEventListener("click", function(e){
		variableDuClic=1;
		CoulAppliquee(variableDuClic);
		attribueCaractere(variableDuClic);
	}
		)

	TabElemt[2].addEventListener("click", function(e){
		variableDuClic=2;
		CoulAppliquee(variableDuClic);
		attribueCaractere(variableDuClic);
	}
		)

	TabElemt[3].addEventListener("click", function(e){
		variableDuClic=3;
		CoulAppliquee(variableDuClic);
		attribueCaractere(variableDuClic);
	}
		);




console.log(memoireClick);
console.log(variableDuClic);
























	//l'ordi et moi jouons une première fois
	//l'ordi
/*			mecanismeAleatoire(var4Aleatoire);
			attribueCaractereAleatoire();
	//moi
			ElementRouge.addEventListener("click", function(e){
				variableDuClic=0;
				CoulAppliquee(variableDuClic);
				attribueCaractere(variableDuClic);
			}
				)

			ElementVert.addEventListener("click", function(e){
				variableDuClic=1;
				CoulAppliquee(variableDuClic);
				attribueCaractere(variableDuClic);
			}
				)

			ElementBleu.addEventListener("click", function(e){
				variableDuClic=2;
				CoulAppliquee(variableDuClic);
				attribueCaractere(variableDuClic);
			}
				)

			ElementJaune.addEventListener("click", function(e){
				variableDuClic=3;
				CoulAppliquee(variableDuClic);
				attribueCaractere(variableDuClic);
			}
				);
		Tabvar4Aleatoire= [var4Aleatoire];*/


/*
while(memoireClickAleatoire===memoireClick){

	//L'ordi joue les nombres du tableau et le dernier nombre aléatoire  var4AleatoireInterne





	let var4AleatoireInterne=(Math.trunc(Math.random()*4));
	Tabvar4Aleatoire.push(var4AleatoireInterne);	
		for (let i=0 ; i<Tabvar4Aleatoire.length ; i++){
			mecanismeAleatoire(Tabvar4Aleatoire[i]);
			attribueCaractereAleatoire();
		}
			//partie Click = Je joue

			ElementRouge.addEventListener("click", function(e){
				variableDuClic=0;
				CoulAppliquee(variableDuClic);
				attribueCaractere(variableDuClic);
			}
				)

			ElementVert.addEventListener("click", function(e){
				variableDuClic=1;
				CoulAppliquee(variableDuClic);
				attribueCaractere(variableDuClic);
			}
				)

			ElementBleu.addEventListener("click", function(e){
				variableDuClic=2;
				CoulAppliquee(variableDuClic);
				attribueCaractere(variableDuClic);
			}
				)

			ElementJaune.addEventListener("click", function(e){
				variableDuClic=3;
				CoulAppliquee(variableDuClic);
				attribueCaractere(variableDuClic);
			}
				);

			if (memoireClickAleatoire===memoireClick){
				console.log("Gagné !");
			}

}


		console.log("Perdu !");
		Tabvar4Aleatoire=[];
		memoireClickAleatoire="";
		memoireClick="";






*/


