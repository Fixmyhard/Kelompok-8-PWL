function loadPage(page) {
    const frame = document.getElementById('contentFrame');
    const defaultContent = document.getElementById('defaultContent');
    
    frame.src = page;
    frame.style.display = 'block';
    defaultContent.style.display = 'none';
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'admin8@gmail.com' && password === 'qwerty') {
      window.location.href = '../admin/adminpage.html';
    } else {
      alert('Email atau Password salah.');
    }
  });

  window.onload = function() {
        document.getElementById('profileName').innerText = localStorage.getItem('profileName') || 'Christiaan Neethling Barnard';
        document.getElementById('profileProfession').innerText = localStorage.getItem('profileProfession') || 'Cardiac Surgeon & Pioneer';
        document.getElementById('profileDescription').innerText = localStorage.getItem('profileDescription') || 'Known for performing the world\'s first human heart transplant in 1967...';
        document.getElementById('skillsList').innerText = localStorage.getItem('skills') || 'Surgical techniques, cardiac care, medical research, and patient advocacy.';
        document.getElementById('projectsList').innerHTML = (localStorage.getItem('projects') || '<li class="bg-gray-700 p-4 rounded-lg shadow">Heart Transplantation: Revolutionizing cardiac surgery.</li><li class="bg-gray-700 p-4 rounded-lg shadow">Pioneering work in artificial hearts and cardiac surgery.</li><li class="bg-gray-700 p-4 rounded-lg shadow">Authoring numerous medical papers on cardiac health.</li>');
        document.getElementById('funFactText').innerText = localStorage.getItem('funFact') || 'Christiaan Barnard\'s groundbreaking heart transplant...';
        document.getElementById('contactEmail').innerText = localStorage.getItem('contactEmail') || 'dariusdarren86@gmail.com';
    };

    function saveSectionData(section) {
        if (section === 'profile') {
            localStorage.setItem('profileName', document.getElementById('editProfileName').value);
            localStorage.setItem('profileProfession', document.getElementById('editProfileProfession').value);
            localStorage.setItem('profileDescription', document.getElementById('editProfileDescription').value);
        } else if (section === 'skills') {
            localStorage.setItem('skills', document.getElementById('editSkills').value);
        } else if (section === 'projects') {
            localStorage.setItem('projects', document.getElementById('editProjects').value);
        } else if (section === 'funFact') {
            localStorage.setItem('funFact', document.getElementById('editFunFact').value);
        } else if (section === 'contact') {
            localStorage.setItem('contactEmail', document.getElementById('editContactEmail').value);
        }
        alert(`${section.charAt(0).toUpperCase() + section.slice(1)} saved successfully!`);
        window.location.reload();
    }

    