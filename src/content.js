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

const biro = ["Genocida", "Biroliro", "Bolso", "Minionmaster", "Filho da Puta", "Assassino", "Bozo", "Escroto", "Bananinha", "Não-é-coveiro", "Incompetente", "Sacana"]
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
