      /**************************************
      const e1 = document.querySelector(".e1");
      function teenSum(a, b) {
        return (a >= 13 && a <= 19) || (b >= 13 && b <= 19) ? 19 : a + b;
      }
      e1.innerHTML = `teenSum(3, 4) → ${teenSum(
        3,
        4
      )}<br>teenSum(10, 13) → ${teenSum(10, 13)}<br>teenSum(2, 20) → ${teenSum(
        2,
        20
      )}`;*/
      /**************************************
      const e2 = document.querySelector(".e2");
      function filter_list(l) {
        return l.filter((element) => Number.isInteger(element));
      }
      e2.innerHTML = `filter_list([1,2,'a','b']) → [${filter_list([
        1,
        2,
        "a",
        "b",
      ])}]<br>filter_list([1,'a','b',0,15]) → [${filter_list([
        1,
        "a",
        "b",
        0,
        15,
      ])}]<br>filter_list([1,2,'aasf','1','123',123]) → [${filter_list([
        1,
        2,
        "aasf",
        "1",
        "123",
        123,
      ])}]`;*/
      /**************************************
      const e3 = document.querySelector(".e3");
      function createPhoneNumber(numbers) {
        return `(${numbers.slice(0, 3).join("")}) ${numbers
          .slice(3, 6)
          .join("")}-${numbers.slice(6, 10).join("")}`;
      }
      e3.innerHTML = `createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) → ${createPhoneNumber(
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
      )}<br>createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) → ${createPhoneNumber(
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
      )}<br>createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) → ${createPhoneNumber(
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
      )}`;*/
      /**************************************
      const e4 = document.querySelector(".e4");
      function moveZeros(arr) {
        const filteredArray = arr.filter((element) => element !== 0);
        const zerosArray = arr.filter((element) => element === 0);
        return filteredArray.concat(zerosArray);
      }
      e4.innerHTML = `moveZeros([false,1,0,1,2,0,1,3,"a"]) → ${moveZeros([
        false,
        1,
        0,
        1,
        2,
        0,
        1,
        3,
        "a",
      ])}<br>moveZeros([1,2,0,1,0,1,0,3,0,1]) → ${moveZeros([
        1, 2, 0, 1, 0, 1, 0, 3, 0, 1,
      ])}`;*/
      /***************************************
      const e5 = document.querySelector(".e5");
      function arrayDiff(a, b) {
        return a.filter(item => !b.includes(item));
      }
      e5.innerHTML = `arrayDiff([1,2,2,2,3],[2]) = ${arrayDiff(
        [1, 2, 2, 2, 3],
        [2]
      )}<br>arrayDiff([1,2],[1]) = ${arrayDiff(
        [1, 2],
        [1]
      )}<br>arrayDiff([], [1,2]) = ${arrayDiff([], [1, 2])}`;
      **************************************/
      /**
       * @param {string} sentence
       * @return {boolean}
       */
      /*
      var checkIfPangram = function(sentence) {
          let char_set = 'abcdefghijklmnopqrstuvwxyz';
          for (let a=0 ; a<char_set.length ; a++){
              if (sentence.indexOf(char_set[a])===-1){
                  return false;
              }
          }
          return true;
      };

    var checkIfPangram = function(sentence) {
        const englishAlphabet = "abcdefghijklmnopqrstuvwxyz";
        for (let char of englishAlphabet) {
            if (!sentence.includes(char)) {
                return false; 
            }
        }
        return true;
    };
          */
