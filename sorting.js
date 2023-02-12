const arrayContainer = document.querySelector("#array-container");
const sortButton = document.querySelector("#sort-button");
const algorithmSelect = document.querySelector("#algorithm-select");

let array = [];

const createArray = () => {
  array = [];
  for (let i = 0; i < 100; i++) {
    array.push(randomIntFromInterval(5, 500));
  }
  renderArray();
};

const renderArray = () => {
  arrayContainer.innerHTML = "";
  array.forEach((value, index) => {
    const bar = document.createElement("div");
    bar.classList.add("array-bar");
    bar.style.height = `${value}px`;
    bar.style.width = `${100 / array.length}%`;
    arrayContainer.appendChild(bar);
  });
};

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

sortButton.addEventListener("click", () => {
  const algorithm = algorithmSelect.value;
  switch (algorithm) {
    case "bubble-sort":
      bubbleSort();
      break;
    case "insertion-sort":
      insertionSort();
      break;
    case "selection-sort":
      selectionSort();
      break;
    default:
      break;
  }
});

createArray();
const bubbleSort = () => {
    let isSorted = false;
    let lastUnsorted = array.length - 1;
    while (!isSorted) {
      isSorted = true;
      for (let i = 0; i < lastUnsorted; i++) {
        if (array[i] > array[i + 1]) {
          swap(i, i + 1);
          isSorted = false;
        }
      }
      lastUnsorted--;
      renderArray();
    }
  };
  
  const insertionSort = () => {
    for (let i = 1; i < array.length; i++) {
      let current = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > current) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = current;
      renderArray();
    }
  };
  
  const selectionSort = () => {
    for (let i = 0; i < array.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      swap(i, minIndex);
      renderArray();
    }
  };
  
  const swap = (i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };
  