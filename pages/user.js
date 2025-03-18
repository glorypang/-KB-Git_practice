let username = '행복한쿼카';

const updateUsername = () => {};

const usernameDisplay = document.querySelector('.username-display');

// 제목에 유저 이름 반영
const displayUsername = () => {
  document.querySelector('.username-display').innerHTML = username;
};

const editUsernameButton = document.querySelector('.edit-username-button');
const editUsername = () => {
  const usernameValue = document.querySelector('#username').value;
  if (!usernameValue) {
    alert('이름을 입력하세요!');
    return;
  }

  username = usernameValue;
  displayUsername();
};
editUsernameButton.addEventListener('click', editUsername);

displayUsername();
