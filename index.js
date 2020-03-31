window.addEventListener("DOMContentLoaded", function(event){
    const apiList = document.querySelector('#tableau');
    var ajx = new XMLHttpRequest();
    ajx.open('GET', 'https://arfp.eu/dataset/cards');
    ajx.onload = function(){
        if(this.status === 200){
            /*var json = JSON.parse(this.responseText);*/
            var json = JSON.parse(this.responseText);
            console.log(json);


            var container_id = document.getElementById('id');
            var container_name = document.getElementById('name');
            var container_level = document.getElementById('level');
            var container_description = document.getElementById('description');
            var container_power = document.getElementById('power');
            var container_attack = document.getElementById('attack');
            var container_armor = document.getElementById('armor');
            var container_damage = document.getElementById('damage');
            var container_mitigation = document.getElementById('mitigation');
            var container_played = document.getElementById('played');
            var container_victory = document.getElementById('victory');
            var container_defeat = document.getElementById('defeat');
            var container_draw = document.getElementById('draw');

            /*add id dynamically to HTML*/
            container_id.id = "container_id";
            container_name.id = "container_name";
            container_level.id = "container_level";
            container_description.id = "container_description";
            container_power.id = "container_power";
            container_attack.id = "container_attack";
            container_armor.id = "container_armor";
            container_damage.id = "container_damage";
            container_mitigation.id = "container_mitigation";
            container_played.id = "container_played";
            container_victory.id = "container_victory";
            container_defeat.id = "container_defeat";
            container_draw.id = "container_draw";


            for(var i = 0; i < json.length; i++){ 
                /*apiList.innerHTML += (xx + '<th id="id"><tr><td>' + json[i].id + '</td></tr></th>');*/
                var th_id = document.createElement('div');
                var th_name = document.createElement('div');
                var th_level = document.createElement('div');
                var th_description = document.createElement('div');
                var th_power = document.createElement('div');
                var th_attack = document.createElement('div');
                var th_armor = document.createElement('div');
                var th_damage = document.createElement('div');
                var th_mitigation = document.createElement('div');
                var th_played = document.createElement('div');
                var th_victory = document.createElement('div');
                var th_defeat = document.createElement('div');
                var th_draw = document.createElement('div');

                th_id.textContent = '' + json[i].id;
                th_name.textContent = '' + json[i].name;
                th_level.textContent = '' + json[i].level;
                th_description.textContent = '' + json[i].description;
                th_power.textContent = '' + json[i].power;
                th_attack.textContent = '' + json[i].attack;
                th_armor.textContent = '' + json[i].armor;
                th_damage.textContent = '' + json[i].damage;
                th_mitigation.textContent = '' + json[i].mitigation;
                th_played.textContent = '' + json[i].played;
                th_victory.textContent = '' + json[i].victory;
                th_defeat.textContent = '' + json[i].defeat;
                th_draw.textContent = '' + json[i].draw;

                container_id.appendChild(th_id);
                container_name.appendChild(th_name);
                container_level.appendChild(th_level);
                container_description.appendChild(th_description);
                container_power.appendChild(th_power);
                container_attack.appendChild(th_attack);
                container_armor.appendChild(th_armor);
                container_damage.appendChild(th_damage);
                container_mitigation.appendChild(th_mitigation);
                container_played.appendChild(th_played);
                container_victory.appendChild(th_victory);
                container_defeat.appendChild(th_defeat);
                container_draw.appendChild(th_draw);
            }

            // recherche de celui qui à le plus de attack
            // et affichage de ses données

            document.getElementById("btn_max_attack").addEventListener("click", 
                function(){
                    var attack_max = 0;
                    for(var i = 0; i < json.length; i++){
                        if(json[i].attack > attack_max){
                            attack_max = json[i].attack
                        }
                        console.log(json[i].attack);
                    }

                    var id_character_max_attack = '';
                    var name_character_max_attack = '';
                    var played_character_max_attack = '';
                    var victory_character_max_attack = '';
                    var power_character_max_attack = '';
                    var attack_character_max_attack = '';
                    var defense_character_max_attack = '';
                    console.log(" ATTACK MAX " + attack_max);
                    for(var i = 0; i < json.length; i++){
                        if(json[i].attack == attack_max){
                            console.log(json[i].id);
                            console.log(json[i].name);
                            id_character_max_attack = json[i].id;
                            name_character_max_attack = json[i].name;
                            played_character_max_attack = json[i].played;
                            victory_character_max_attack = json[i].victory;
                            power_character_max_attack = json[i].power;
                            attack_character_max_attack = json[i].attack;
                            defeat_character_max_attack = json[i].defeat;
                        }
                    }
                    var header_name = document.getElementById('header_name');
                    header_name.id = "header_name";
                    var div_header_name = document.createElement('div');
                    div_header_name.textContent = '' + name_character_max_attack;
                    header_name.appendChild(div_header_name);

                    var header_id = document.getElementById('header_id');
                    header_id.id = "header_id";
                    var div_header_id = document.createElement('div');
                    div_header_id.textContent = '' + id_character_max_attack;
                    header_id.appendChild(div_header_id);

                    var header_played = document.getElementById('header_played');
                    header_played.id = "header_played";
                    var div_header_played = document.createElement('div');
                    div_header_played.textContent = '' + played_character_max_attack;
                    header_played.appendChild(div_header_played);

                    var header_victory = document.getElementById('header_victory');
                    header_victory.id = "header_victory";
                    var div_header_victory = document.createElement('div');
                    div_header_victory.textContent = '' + victory_character_max_attack;
                    header_victory.appendChild(div_header_victory);

                    var id_aside_power = document.getElementById('id_aside_power');
                    id_aside_power.id = "id_aside_power";
                    var div_aside_power = document.createElement('div');
                    div_aside_power.textContent = '' + power_character_max_attack;
                    id_aside_power.appendChild(div_aside_power);

                    var id_aside_attack = document.getElementById('id_aside_attack');
                    id_aside_attack.id = "id_aside_attack";
                    var div_aside_attack = document.createElement('div');
                    div_aside_attack.textContent = '' + attack_character_max_attack;
                    id_aside_attack.appendChild(div_aside_attack);

                    var id_aside_defeat = document.getElementById('id_aside_defeat');
                    id_aside_defeat.id = "id_aside_defeat";
                    var div_aside_defeat = document.createElement('div');
                    div_aside_defeat.textContent = '' + defeat_character_max_attack;
                    id_aside_defeat.appendChild(div_aside_defeat);
                }
            );

        

            document.getElementById("btn_max_armor").addEventListener("click", 
                function(){
                    var armor_max = 0;
                    for(var i = 0; i < json.length; i++){
                        if(json[i].armor > armor_max){
                            armor_max = json[i].armor
                        }
                        console.log(json[i].armor);
                    }

                    var id_character_max_armor = '';
                    var name_character_max_armor = '';
                    var played_character_max_armor = '';
                    var victory_character_max_armor = '';
                    var power_character_max_armor = '';
                    var attack_character_max_armor = '';
                    var defense_character_max_armor = '';
                    console.log(" ARMOR MAX " + armor_max);
                    for(var i = 0; i < json.length; i++){
                        if(json[i].armor == armor_max){
                            console.log(json[i].id);
                            console.log(json[i].name);
                            id_character_max_armor = json[i].id;
                            name_character_max_armor = json[i].name;
                            played_character_max_armor = json[i].played;
                            victory_character_max_armor = json[i].victory;
                            power_character_max_armor = json[i].power;
                            attack_character_max_armor = json[i].attack;
                            defeat_character_max_armor = json[i].defeat;
                        }
                    }
                    var header_name = document.getElementById('header_name');
                    header_name.id = "header_name";
                    var div_header_name = document.createElement('div');
                    div_header_name.textContent = '' + name_character_max_armor;
                    header_name.appendChild(div_header_name);

                    var header_id = document.getElementById('header_id');
                    header_id.id = "header_id";
                    var div_header_id = document.createElement('div');
                    div_header_id.textContent = '' + id_character_max_armor;
                    header_id.appendChild(div_header_id);

                    var header_played = document.getElementById('header_played');
                    header_played.id = "header_played";
                    var div_header_played = document.createElement('div');
                    div_header_played.textContent = '' + played_character_max_armor;
                    header_played.appendChild(div_header_played);

                    var header_victory = document.getElementById('header_victory');
                    header_victory.id = "header_victory";
                    var div_header_victory = document.createElement('div');
                    div_header_victory.textContent = '' + victory_character_max_armor;
                    header_victory.appendChild(div_header_victory);

                    var id_aside_power = document.getElementById('id_aside_power');
                    id_aside_power.id = "id_aside_power";
                    var div_aside_power = document.createElement('div');
                    div_aside_power.textContent = '' + power_character_max_armor;
                    id_aside_power.appendChild(div_aside_power);

                    var id_aside_attack = document.getElementById('id_aside_attack');
                    id_aside_attack.id = "id_aside_attack";
                    var div_aside_attack = document.createElement('div');
                    div_aside_attack.textContent = '' + attack_character_max_armor;
                    id_aside_attack.appendChild(div_aside_attack);

                    var id_aside_defeat = document.getElementById('id_aside_defeat');
                    id_aside_defeat.id = "id_aside_defeat";
                    var div_aside_defeat = document.createElement('div');
                    div_aside_defeat.textContent = '' + defeat_character_max_armor;
                    id_aside_defeat.appendChild(div_aside_defeat);
                }
            );
        }
    };
    ajx.send();
});

