// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Function to open a modal
    window.openModal = function (modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
    };

    // Function to close a modal
    window.closeModal = function (modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = 'none';
    };

    // Function to handle joining a chat
    window.joinChat = function (event) {
        event.preventDefault();
        console.log('Joining chat...');
        const groupKey = document.getElementById('groupKeyJoin').value;
        const guestName = document.getElementById('guestNameJoin').value;
        console.log('Group Key:', groupKey);
        console.log('Guest Name:', guestName);
        alert(`Joined chat with Group Key: ${groupKey}, Guest Name: ${guestName}`);
        closeModal('joinChatModal');
    };

    // Function to handle creating a chat
    window.createChat = function (event) {
        event.preventDefault();
        console.log('Creating chat...');
        const groupKey = document.getElementById('groupKeyCreate').value;
        const adminName = document.getElementById('adminNameCreate').value;
        console.log('Group Key:', groupKey);
        console.log('Admin Name:', adminName);
        alert(`Created chat with Group Key: ${groupKey}, Admin Name: ${adminName}`);
        closeModal('createChatModal');
    };

    window.openModal = function (modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
    };
});
