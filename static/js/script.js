// script.js
document.addEventListener('DOMContentLoaded', function () {
    window.toggleForm = function (formId) {
        const form = document.getElementById(formId);
        form.style.display = form.style.display === 'none' ? 'block' : 'none';
    };

    window.joinChat = function (event) {
        event.preventDefault();
        const groupKey = document.getElementById('groupKeyJoin').value;
        const guestName = document.getElementById('guestNameJoin').value;
        alert(`Joined chat with Group Key: ${groupKey}, Guest Name: ${guestName}`);
        toggleForm('joinChatForm');
    };

    window.createChat = function (event) {
        event.preventDefault();
        const groupKey = document.getElementById('groupKeyCreate').value;
        const adminName = document.getElementById('adminNameCreate').value;
        alert(`Created chat with Group Key: ${groupKey}, Admin Name: ${adminName}`);
        toggleForm('createChatForm');
    };
});
