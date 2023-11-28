const RoughWork = () => {
  let amount = 30;
  let chocoPrice = 2;
  let wrapperNeed = 3;

  let amountSpent = amount;
  let chocolatesBought = amountSpent / chocoPrice;
  let wrappers = chocolatesBought;
  let remainingWrappers = 0;

  while (wrappers >= wrapperNeed) {
    let exchangedChocolates = wrappers / wrapperNeed;

    chocolatesBought += exchangedChocolates;

    remainingWrappers = (wrappers % wrapperNeed) + exchangedChocolates;

    wrappers = remainingWrappers;
  }

  console.log( parseInt(chocolatesBought));
  console.log( parseInt(remainingWrappers));
};

export default RoughWork;