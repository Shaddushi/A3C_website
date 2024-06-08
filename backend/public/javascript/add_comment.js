
/* Change la couleur des étoiles selon l'étoile cliqué et modifie l'insert pour la note */

    function new_note(img) {
        const div_rating = document.getElementById("star_rating")
        const note = document.getElementById("note")
        let number = img.getAttribute("value");
        for (let i = 0; i < number ; i++){
            div_rating.children[i].src = "/images/star_filled.png";
        }
        for (let i = number; i < 5 ; i++){
            div_rating.children[i].src = "/images/star_empty.png";
        }
        note.value = number;
    }


//Pour ajouter un commentaire


const form = document.getElementById('addCommentForm');

form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const nameInput = document.getElementById('name');
    const commentInput = document.getElementById('comment');
    const noteInput = document.getElementById('note');

    const name = nameInput.value.trim();
    const comment = commentInput.value.trim();
    const note = noteInput.value.trim();
    const response = await fetch('/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name,comment,note }),
    });
    if (!response.ok) {
      errorMessage.textContent = 'Failed to add data';
      return;
    }
    window.location.href = '/';
  });



