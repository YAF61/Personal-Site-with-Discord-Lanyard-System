fetch('https://api.lanyard.rest/v1/users/discordidnigir - enter your discord id')
  .then(response => response.json())
  .then(data => {
    const avatarUrl = `https://cdn.discordapp.com/avatars/${data.data.discord_user.id}/${data.data.discord_user.avatar}.png`;
    const username = data.data.discord_user.username;
    const status = data.data.discord_status ? data.data.discord_status : 'offline';

    // İngilizce durumları Türkçe'ye çevirme
    const turkceDurumlar = {
        online: "Çevrimiçi",
        idle: "Boşta",
        dnd: "Rahatsız Etme",
        offline: "Çevrimdışı"
    };

    // API'den gelen İngilizce durumu Türkçe'ye çevirme
    const turkceDurum = turkceDurumlar[status] || "Bilinmiyor";

    // Durumu HTML içine yerleştirme
    document.getElementById('discord-avatar').src = avatarUrl;
    document.getElementById('discord-username').textContent = username;
    document.getElementById('discord-status-text').textContent = `Durum: ${turkceDurum}`;
})
.catch(error => console.error('Error fetching Lanyard data:', error));
