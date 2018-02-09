$(window).on("load", function(){

	
	function get_data(pkmn_id) {
		$.get("https://www.pokeapi.co/api/v2/pokemon/"+pkmn_id+"/",
			function(data) {
				console.log(data.name);
				console.log(data.id);
				console.log(data.types[0].type.name);

				if(data.id == null) {
					$("#pkmn_id").text("No hay datos");
				}
				else {
					$("#pkmn_id").text(data.id);
				}

				$("#nsprite").attr("src", data.sprites.front_default);
				$("#ssprite").attr("src", data.sprites.front_shiny);

				if(data.name == null) {
					$("#name").text("No hay datos");
				}
				else {
					$("#name").text(data.name);
				}

				if(data.types[0].type.name ==null) {
					$("#type").text("No hay datos");
				}
				else {
					$("#type").text(data.types[0].type.name);
				}

				alert("Todo cargado");
			}, "json");
	}


	var current_pkmn = 549;
	get_data(current_pkmn);
	
	$("#next_btn").on({
		click: function (){
			if(current_pkmn < 802) {
				current_pkmn+=1;
				get_data(current_pkmn);
				console.log(current_pkmn);
			}
			else alert("This is the last pokemon of this Pokedex");
			
		}
	});

	$("#last_btn").on({
		click: function (){
			if(current_pkmn > 1) {
				current_pkmn-=1;
				get_data(current_pkmn);
				console.log(current_pkmn);
			}
			else alert("This is the first pokemon of the Pokedex")
		}
	});

	$("#search_btn").on({
		click: function (){
			if(parseInt($("#search").val()) > 0 && parseInt($("#search").val()) < 803){
				current_pkmn = parseInt($("#search").val());
				get_data(current_pkmn);
				console.log(current_pkmn);
			}
			else alert("No pokemon with that number");
		}
	});
})