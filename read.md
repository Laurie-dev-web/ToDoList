<h1>Les Etapes</h1>

Créer un nouveau repo et intégrer :
_- readme.md - index.html - todolist.js_

Changer le titre en ToDo List

Créer un champ input, un boutton, et une list vide.

Relié js au html.

Créer des const pour récuperer chaque élément du DOM:
_-champ de saisie -bouton -liste_

Vérifier et valider avec la console.

<b> La suite plus compliqué pour moi</b>

La derniere étape de l'exercice étant faite en premier.

j'ai creer un bouton qui contient un _eventListener_ qui réagit au click.

A l'interieur j'ai selectionnée "input" et lui donner une value et un emplacement vide, a chaque fin d'intéraction

<h1>Difficulté eu</h1>

J'avais fait une fonction addList qui devait englober les querySelector de "ul" et "li".

Or dans mon _EvenListener_ pour mon _newlistLI.innerText = inputTag.value;_ je devait récuperer mon LI, mais celle ci n'etait pas inclu dans mon button.

Alors tout ce qui était dans mon _addlist_, je l'ai déplacer dans mon button avant mon _newlistLI.innerText = inputTag.value;_

Ma difficulté a été de savoir ou placer mon ul et il. J'avais tout les commades nécéssaires pour le faire fonctionné, juste pas le bon ordre.

# final

' newlistLI.innerText = inputTag.value; '

Mon code fonctionne.
