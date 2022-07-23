const _ = {
  once(func) {
    // 아래 변수들은 아래 선언/리턴되는 함수 안에서 참조됩니다.
    // 리턴되는 함수의 scope 내에 존재하므로, 리턴되는 함수를 언제 실행해도 이 변수들에 접근할 수 있습니다.
    let result;
    let alreadyCalled = false;

    return function (...args) {
      // TIP: arguments 키워드 혹은, spread operator를 사용하세요.
      if (!alreadyCalled) {
        alreadyCalled = true;
        result = func(...args);
      }
      return result;
    };
  },
};

module.exports = _;