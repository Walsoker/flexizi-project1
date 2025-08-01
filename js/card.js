const pros = [
    {
      id: 1,
      nom: "Moussa Diop",
      metier: "Plombier certifié",
      note: 4.8,
      avis: 56,
      ville: "Dakar",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      description: "Spécialiste en installation sanitaire avec 10 ans d'expérience.",
      competences: ["Tuyauterie", "Chauffe-eau"],
      tarif: 25,
      badge: "TOP RATED"
    },
    // Ajoute d'autres pros ici...
  ];
  
  function displayPros() {
    const container = document.getElementById('pros-container');
    container.innerHTML = '';
  
    pros.forEach(pro => {
      const card = `
      <div class="col">
        <div class="card pro-card h-100 border-0 shadow-sm hover-shadow">
          <div class="card-header bg-transparent border-0 position-relative">
            ${pro.badge ? `<span class="badge bg-success position-absolute top-0 start-0 m-2">${pro.badge}</span>` : ''}
            <img src="${pro.photo}" class="rounded-circle mx-auto d-block mt-3" width="100" alt="Profil">
          </div>
          <div class="card-body text-center">
            <h5 class="card-title mb-1">${pro.nom}</h5>
            <p class="text-muted mb-2">${pro.metier}</p>
            <div class="rating mb-3">
              ${generateStars(pro.note)}
              <span class="ms-1">${pro.note} (${pro.avis} avis)</span>
            </div>
            <p class="card-text">${pro.description}</p>
            <div class="skills mb-3">
              ${pro.competences.map(skill => `<span class="badge bg-light text-dark">${skill}</span>`).join('')}
            </div>
          </div>
          <div class="card-footer bg-transparent border-0">
            <div class="d-flex justify-content-between align-items-center">
              <span class="h5 mb-0">${pro.tarif}€/h</span>
              <button class="btn btn-outline-primary">Contacter</button>
            </div>
          </div>
        </div>
      </div>
      `;
      container.innerHTML += card;
    });
  }
  
  // Helper pour les étoiles
  function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars += '<i class="fas fa-star text-warning"></i>';
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars += '<i class="fas fa-star-half-alt text-warning"></i>';
      } else {
        stars += '<i class="far fa-star text-warning"></i>';
      }
    }
    return stars;
  }
  
  // Initialisation
  window.onload = displayPros;