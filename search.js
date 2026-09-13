/**
 * Maison de Santé de Polliat - Instant Search Engine
 */

const SITE_INDEX = [
  // Médecins & Équipe Médicale
  { title: "Dr Hadrien FEY", category: "Médecin Généraliste", desc: "Médecin de famille, Maître de stage des universités (Lyon 1). Échographie clinique, dermoscopie, pédiatrie, gynécologie. Tél : 04 28 36 00 70.", url: "equipe_medecins.html" },
  { title: "Dr Lou SILVENTE", category: "Médecin Généraliste Assistante", desc: "Médecin assistante aux côtés du Dr FEY. Consultations de médecine générale et suivi régulier.", url: "equipe_dr-lou-silvlente.html" },
  { title: "Dr Eva HENRY", category: "Docteur Junior (10e année)", desc: "Interne Docteur Junior (à compter de nov. 2026 pour 1 an). Consultations en pleine autonomie clinique supervisée.", url: "equipe_dr-junior-eva-henry.html" },
  { title: "Dr Marie-Agnès BERNABEU-BRULÉ", category: "Médecin Généraliste", desc: "Médecin généraliste associée au 10 rue de l'Iragnon. Tél : 04 74 30 40 20.", url: "equipe_medecins.html" },
  { title: "Dr Damien CHARTON", category: "Médecin Généraliste", desc: "Médecin généraliste associé au 10 rue de l'Iragnon. Tél : 04 74 30 40 20.", url: "equipe_medecins.html" },
  { title: "Dr Kathleen PIZA", category: "Médecin Généraliste", desc: "Médecin généraliste associée au 10 rue de l'Iragnon. Tél : 04 74 30 40 20.", url: "equipe_medecins.html" },
  { title: "Dr Élodie POTREL", category: "Médecin Généraliste", desc: "Médecin généraliste associée au 10 rue de l'Iragnon. Tél : 04 74 30 40 20.", url: "equipe_medecins.html" },
  
  // Pratique Avancée & Assistante
  { title: "Davide DOS REIS", category: "Infirmier en Pratique Avancée (IPA)", desc: "Suivi clinique approfondi des pathologies chroniques stabilisées (diabète, HTA, insuffisance cardiaque), renouvellement d'ordonnances en binôme médical.", url: "equipe_infirmier-pratique-avancee.html" },
  { title: "Jennifer", category: "Assistante Médicale", desc: "Accueil, pré-consultation (tension, poids, constantes), préparation des dossiers complexes, standard IA 24h/7j au 04 28 36 00 70.", url: "equipe_assistante-medicale.html" },

  // Paramédical & Soignants
  { title: "Mme Amandine ROTA COIN", category: "Infirmière ASALÉE", desc: "Éducation thérapeutique, diabète, BPCO, arrêt du tabac, repérage mémoire et risques cardiovasculaires (100% pris en charge).", url: "equipe_infirmiere-asalee.html" },
  { title: "Infirmières Libérales (IDEL)", category: "Soins à domicile & cabinet", desc: "Mme Sandra LEPLE, Mme Carole PERDRIX, Mme Angélique PRABEL, Mme Justine POIX. Soins 7j/7. Tél : 06 07 06 75 69.", url: "equipe_infirmieres-liberales.html" },
  { title: "Masseurs-Kinésithérapeutes", category: "Kinésithérapie", desc: "Mme Brigitte PARRENIN, Mme Pauline COUARD. Du lundi au vendredi sur RDV. Tél : 04 74 47 07 81.", url: "equipe_kinesitherapeutes.html" },
  { title: "Ergothérapeutes", category: "Ergothérapie", desc: "Mme Chloé CONVERT (07 68 83 23 48), Mme Mélissa GOY (06 50 17 07 27). Autonomie, pédiatrie, réadaptation.", url: "equipe_ergotherapeutes.html" },
  { title: "Orthophoniste", category: "Orthophonie", desc: "Mme Aline GRAND. Inscription liste d'attente Perfactive. Tél : 07 56 82 86 75.", url: "equipe_orthophoniste.html" },
  { title: "Diététicienne-Nutritionniste", category: "Nutrition & Diététique", desc: "Mme Jessy EVRARD. Suivi personnalisé et téléconsultation madietenligne.fr. Tél : 06 59 73 67 71.", url: "equipe_dieteticienne.html" },
  { title: "Pharmacie de Polliat", category: "Pharmacie d'Officine", desc: "Dr Aurélie GENTON, Dr Michèle SCHWARTZ. Délivrance, conseils, vaccinations. Tél : 04 74 30 40 48.", url: "equipe_pharmaciennes.html" },
  { title: "Dr Véronica SULUGIUC", category: "Médecin Échographiste Radiologue", desc: "Échographies générales et spécialisées, uniquement sur rendez-vous en ligne.", url: "equipe_radiologue.html" },
  
  // Plateforme & Thématiques
  { title: "CareSquad - Prise de Rendez-vous en Ligne", category: "Plateforme Patient", desc: "Portail officiel de réservation de rendez-vous en ligne et messagerie sécurisée : rdv.caresquad.fr/maisondesante-polliat.", url: "https://rdv.caresquad.fr/maisondesante-polliat" },
  { title: "Planning Samedi Matin (Urgences)", category: "Permanence des Soins", desc: "Tableau de présence du médecin de garde le samedi de 8h à 12h pour les urgences médicales.", url: "rdv.html#samedi" },
  { title: "Demande de Médecin Traitant", category: "Nouveaux Patients", desc: "Conditions d'accès et démarche pour demander un médecin traitant à la Maison de Santé de Polliat.", url: "rdv.html#nouveaux-patients" },
  { title: "Projet de Santé de la MSP", category: "Coordination & ARS", desc: "Le projet de santé pluridisciplinaire, partage sécurisé des données de santé et labellisation ARS.", url: "projet-de-sante.html" },
  { title: "Dépistage des Cancers", category: "Prévention", desc: "Dépistages organisés : cancer colorectal (Mars Bleu), cancer du sein (Octobre Rose), frottis utérin, mélanome.", url: "prevention.html" },
  { title: "Arrêter de fumer (Sevrage tabagique)", category: "Prévention & ASALÉE", desc: "Accompagnement personnalisé au sevrage tabagique au sein de la Maison de santé.", url: "prevention.html#tabac" },
  { title: "Accès & Coordonnées", category: "Pratique", desc: "10 rue de l'Iragnon, 01310 Polliat. Parking gratuit, accès PMR, plan et téléphones.", url: "acces-contact.html" },
  { title: "Boîte à idées & Satisfaction", category: "Écoute usagers", desc: "Donnez votre avis sur l'accueil et les soins, déposez vos suggestions pour la Maison de Santé.", url: "avis.html" },
  { title: "Téléconsultation CareSquad", category: "Rendez-vous", desc: "Modalités de réalisation des téléconsultations sécurisées avec votre praticien.", url: "rdv.html#teleconsultation" }
];

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('site-search-input');
  const searchResults = document.getElementById('site-search-results');

  if (!searchInput || !searchResults) return;

  function performSearch(query) {
    const q = query.toLowerCase().trim();
    if (q.length < 2) {
      searchResults.style.display = 'none';
      searchResults.innerHTML = '';
      return;
    }

    const matches = SITE_INDEX.filter(item => {
      return item.title.toLowerCase().includes(q) ||
             item.category.toLowerCase().includes(q) ||
             item.desc.toLowerCase().includes(q);
    });

    if (matches.length === 0) {
      searchResults.innerHTML = `
        <div style="padding: 16px; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
          Aucun résultat pour « <strong>${escapeHtml(query)}</strong> ». Essayez : <em>fey, jennifer, ipa, médecin, kiné, samedi, vaccin, urgence...</em>
        </div>
      `;
      searchResults.style.display = 'block';
      return;
    }

    let html = '';
    matches.slice(0, 7).forEach(m => {
      const isExternal = m.url.startsWith('http');
      const targetAttr = isExternal ? ' target="_blank" rel="noopener"' : '';
      html += `
        <a href="${m.url}" class="search-result-item"${targetAttr}>
          <div style="font-size: 0.76rem; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">${m.category}</div>
          <div class="search-result-title">${m.title} ${isExternal ? '↗' : ''}</div>
          <div class="search-result-desc">${m.desc}</div>
        </a>
      `;
    });

    searchResults.innerHTML = html;
    searchResults.style.display = 'block';
  }

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, match => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[match]));
  }

  searchInput.addEventListener('input', (e) => {
    performSearch(e.target.value);
  });

  searchInput.addEventListener('focus', (e) => {
    if (e.target.value.trim().length >= 2) {
      searchResults.style.display = 'block';
    }
  });

  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.style.display = 'none';
    }
  });
});
