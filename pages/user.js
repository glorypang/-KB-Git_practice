let username = '행복한쿼카';

const updateUsername = () => {};

const usernameDisplay = document.querySelector('.username-display');

// 제목에 유저 이름 반영
const displayUsername = () => {
  document.querySelector('.username-display').innerHTML = username;
};

const editUsernameButton = document.querySelector('.edit-username-button');
const editUsername = () => {};

displayUsername();
