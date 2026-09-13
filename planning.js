/**
 * Module Dynamique de Planning - Urgences Samedi & Congés
 */

async function loadPlanning() {
  const container = document.getElementById('samedi-planning-container');
  const alertNextDoc = document.getElementById('next-duty-doctor');

  if (!container && !alertNextDoc) return;

  try {
    const response = await fetch('planning.json');
    if (!response.ok) return;
    const data = await response.json();

    // Rendu du prochain samedi
    if (alertNextDoc && data.urgence_samedi && data.urgence_samedi.length > 0) {
      // Trouver le prochain samedi par rapport à aujourd'hui (date de référence 2026-09-13)
      const now = new Date();
      let nextSlot = data.urgence_samedi[0];

      for (const slot of data.urgence_samedi) {
        const parts = slot.date.split('/');
        const slotDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}T12:00:00`);
        if (slotDate >= now) {
          nextSlot = slot;
          break;
        }
      }

      alertNextDoc.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
          <div>
            <strong>Prochaine garde samedi (${nextSlot.date}) :</strong> ${nextSlot.medecin} (${nextSlot.horaires})
          </div>
          <span class="badge-current-week">Urgences uniquement</span>
        </div>
      `;
    }

    // Rendu du tableau complet si présent
    if (container && data.urgence_samedi) {
      let html = `
        <table class="planning-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Médecin de garde (urgences)</th>
              <th>Horaires</th>
              <th>Consignes</th>
            </tr>
          </thead>
          <tbody>
      `;

      data.urgence_samedi.forEach(slot => {
        html += `
          <tr>
            <td><strong>${slot.date}</strong></td>
            <td><span style="font-weight: 600; color: var(--primary-deep);">${slot.medecin}</span></td>
            <td>${slot.horaires}</td>
            <td><span class="hero-chip" style="font-size:0.78rem; padding: 2px 8px;">${slot.remarque}</span></td>
          </tr>
        `;
      });

      html += `
          </tbody>
        </table>
      `;

      container.innerHTML = html;
    }

    // Rendu congés
    const congesContainer = document.getElementById('conges-container');
    if (congesContainer && data.conges) {
      let congesHtml = '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin-top: 14px;">';
      data.conges.forEach(item => {
        congesHtml += `
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px;">
            <div style="font-weight: 700; color: var(--text-main);">${item.praticien}</div>
            <div style="font-size: 0.88rem; color: var(--primary-dark); font-weight: 600; margin-top: 4px;">📅 ${item.periode}</div>
            ${item.remplacement ? `<div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 4px;">Remplacement : ${item.remplacement}</div>` : ''}
          </div>
        `;
      });
      congesHtml += '</div>';
      congesContainer.innerHTML = congesHtml;
    }

  } catch (e) {
    console.error('Erreur chargement planning.json', e);
  }
}

document.addEventListener('DOMContentLoaded', loadPlanning);
