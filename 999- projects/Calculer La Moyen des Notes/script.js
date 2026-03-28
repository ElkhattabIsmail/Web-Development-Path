// 1. Tableau pour stocker les notes
let notes = [];

// 2. Fonction pour ajouter une note
function ajouterNote() {
    // Indice : utilisez document.getElementById()
    const champNote = document.getElementById('note');
    const note = parseFloat(champNote.value);
    
    // Indice : utilisez isNaN() pour vérifier si c'est un nombre
    if (isNaN(note) || note < 0 || note > 20) {
        alert('Veuillez entrer une note valide entre 0 et 20');
        return;
    }
    
    // Ajouter la note au tableau
    notes.push(note);
    // Indice : utilisez push()
    
    // Afficher les notes
    afficherNotes();
    
    champNote.value = '';
    // Vider le champ
    // Indice : mettez value à une chaîne vide
}
function SupprimerrNote()
{
    notes.pop();
    afficherNotes();
}
// 3. Fonction pour afficher les notes
function afficherNotes() {
    const listeDiv = document.getElementById('listeNotes');
    // Indice : utilisez innerHTML
    
    // Indice : utilisez forEach ou for...of

     // Reset before adding
    listeDiv.innerHTML = "";

    notes.forEach(note => {
        listeDiv.innerHTML += `<span class="note">${note.toFixed(2)} | </span> `;
    });

}

// console.log(false || 0); // output if two value are false is the last one.

// 4. Fonction pour calculer la moyenne
function calculerMoyenne() {
    // Récupérer et vérifier le nom
    const NomEtudiant = document.getElementById('nomEtudiant');

    if (NomEtudiant.value === ''){
        alert('Veuillez entrer Le Nom D\'etudiant!');
        return;
    }
        
    // Vérifier qu'il y a des notes
    // Indice : vérifiez notes.length
    if (notes.length === 0){
         alert('Il n\'y a pas de points pour calculer la moyenne!');
        return;
    }
       
    
    // Calculer la somme
    // Indice : utilisez reduce() ou une boucle

    /*
        reduce() in JavaScript
        reduce() is an array method that reduces an array to a single value (number, string, object, etc.).

        📌 Syntax
        array.reduce((accumulator, currentValue) => {
        return updatedAccumulator;
        }, initialValue);
        Parameters:

        accumulator → stores the result
        currentValue → current element in array
        initialValue → starting value (recommended)

        ⚠️ Important Notes
        If you don’t provide initialValue, reduce() uses the first element as the accumulator.
        Always provide initialValue to avoid unexpected behavior (especially with empty arrays).

        💡 When to Use reduce()
        * Use it when you want to:
        * Sum values
        * Build an object
        * Transform an array into something else
        * Perform complex accumulations
    */

     // Calculer la moyenne
     let TotalNotes = notes.reduce((Acc, num) => {
        return Acc + num;
        }, 0);

    let moyenne = TotalNotes / notes.length;
    console.log(moyenne);
    
    // Déterminer l'appréciation
    let appreciation = "";
    let classe = "";
    
    if (moyenne >= 16) {
        appreciation = 'Exellent 👌';
        classe = "success";
    } 
    else if (moyenne >= 14) {
        appreciation = 'Trés Bien ✅';
        classe = "success";
    }
    else if (moyenne >= 12) {
        appreciation = 'Bien 👈👉';
        classe = "warning";
    }
    else if (moyenne >= 10) {
        appreciation = 'Passable 👈👉';
        classe = "warning";
    }
    else{
        appreciation = 'Insuffisant ❌';
        classe = "danger";
    }
    // Continuer...
    
    // Afficher le résultat
    const resultatDiv = document.getElementById('resultat');
    // Indice : modifiez innerHTML et className
    // Indice : utilisez style.display = 'block' pour affichers
    
    resultatDiv.style.display = 'block';
    // ✅ Use innerHTML
    resultatDiv.innerHTML = `
        <strong>${NomEtudiant.value}</strong>, 
        votre moyenne est de <strong>${moyenne.toFixed(2)}/20</strong> 
        <br> <strong> - ${appreciation}  </strong>`;
   
    
    resultatDiv.className = classe;    
}