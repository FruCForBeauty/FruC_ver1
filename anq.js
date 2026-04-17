// HTMLの読み込みが完了してから中の処理を実行する
document.addEventListener('DOMContentLoaded', () => {

    const groups = document.querySelectorAll('.question-group');
  
    groups.forEach(group => {
      const buttons = group.querySelectorAll('.survey-btn');
  
      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          buttons.forEach(b => {
            if (b === btn) {
              b.classList.add('active');
              b.classList.remove('dimmed');
            } else {
              b.classList.remove('active');
              b.classList.add('dimmed');
            }
          });
        });
      });
    });
  
  });