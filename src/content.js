/* File: content.js
 * ---------------
 * Hello! You'll be making most of your changes
 * in this file. At a high level, this code replaces
 * the substring "cal" with the string "butt" on web pages.
 *
 * This file contains javascript code that is executed
 * everytime a webpage loads over HTTP or HTTPS.
 */

var elements = document.getElementsByTagName('*');

var biro = ["Biroliro", "Bolso", "Minionmaster", "Filho da Puta", "Assassino", "Bozo", "Escroto", "Bananinha", "Não-é-coveiro", "Incompetente", "Sacana", "Ignóbil", "Basculho", "Baixo", "Repugnante", "Canalha", "Deplorável", "Mesquinho", "Patife", "Ordinário", "Reles", "Pulha", "Sórdido", "Torpe", "Velhaco", "Abominável", "Detestável", "Ralé", "Biltre", "Infame", "Bandalho", "Aberração", "Calhorda", "Desprezível", "Pífio", "Ignorante", "Vil", "Ribaldo", "Soez", "Jacodes", "Cafajeste", "Bronco", "Inculto", "Boçal", "Néscio", "Estúpido", "Rude", "Verme", "Desgraçado", "Maldito", "Jumento", "Monstruoso", "Sádico", "Burro", "Insensível", "Mentecapto", "Demônio", "Desalmado", "Incapaz", "Covarde", "Crápula", "Incompetente", "Doentio", "Sociopata", "Peste", "Idiota", "Energúmeno", "Reaça", "Desequilibrado", "Imoral", "Rato", "Mandrião", "Beócio", "Abjeto", "Descarado", "Pusilânime", "Enxurro", "Choldra", "Gentalha", "Labrusco", "Desrespeitoso", "Cruel", "Facínora", "Atroz", "Maligno", "Cafona", "Execrável", "Infando", "Nefando", "Abominável", "Inclemente", "Mau", "Sicário", "Viperino", "Tirano", "Impiedoso", "Desumano", "Malfeitor", "Celerado", "Estrupício", "Chorume", "Louco", "Escroto", "Lixo", "Inútil", "Escória", "Ogro", "Mitômano", "Ególatra", "Tosco", "Verdugo", "Mentiroso", "Asno", "Babaca", "Déspota", "Autoritário", "Morte", "Opressor", "Tapado", "Mandão", "Autocrata", "Desnecessário", "Safardana", "Prepotente", "Abusivo", "Injusto", "Reacionário", "Fascista", "Cínico", "Animal", "Desaforado", "Histrião", "Grosseiro", "Vulgar", "Malandro", "Inconveniente", "Sujo", "Sem-vergonha", "Obsceno", "Brega", "Charlatão", "Perverso", "Monstro", "Ditador", "Embusteiro", "Horrível", "Desnaturado", "Carrasco", "Egocêntrico", "Mariola", "Salafrário", "Imbecil", "Lunático", "Bufão", "Garganta", "Farofeiro", "Farsante", "Oportunista", "Indefensável", "Broxável", "Carniceiro", "Irresponsável", "Excrementíssimo", "Marginal", "Praga", "Traiçoeiro", "Criminoso", "Terrorista", "Asqueroso", "Cu de boi", "Podre", "Capiroto", "Embuste", "Lazarento", "Indecoroso", "Desmoralizado", "Imprudente", "Maléfico", "Parasita", "Delinquente", "Seboso", "Coisa-ruim", "Quadrilheiro", "Arrombado", "Mau-caráter", "Frouxo", "Fracassado", "Ressentido", "Obtuso", "Boçal", "Brutamontes", "Cavalgadura", "Descortês", "Lorpa", "Pateta", "Cretino", "Parvo", "Pacóvio", "Inapto", "Desqualificado", "Pequi roído", "Genocida"]
const random = Math.floor(Math.random() * biro.length);

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/Bolsonaro/gi, biro[random]); // replaces "cal," "Cal", etc. with "butt"

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
              }
        }
    }
}
