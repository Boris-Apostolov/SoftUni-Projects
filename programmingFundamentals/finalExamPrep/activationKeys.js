function activationKeys(input) {
    let activationKey = input.shift();
  
    for (let i = 0; i < input.length; i++) {
      let [command, firstArgument, secondArgument, thirdArgument] = input[
        i
      ].split(">>>");
  
      switch (command) {
        case "Contains":
          if (activationKey.includes(firstArgument)){
            console.log(`${activationKey} contains ${firstArgument}`);
          } else {
            console.log("Substring not found!");
          }
          break;
        case "Flip":
          let temp1 = "";
          let ind2 = Number(secondArgument);
          let ind3 = Number(thirdArgument);
          let replaced = activationKey.substring(ind2, ind3);
          if (firstArgument === "Upper") {
            temp1 = activationKey.substring(ind2, ind3).toUpperCase();
            activationKey = activationKey.replace(replaced, temp1);
            console.log(activationKey);
          } else if (firstArgument === "Lower") {
            temp1 = activationKey.substring(ind2, ind3).toLowerCase();
            activationKey = activationKey.replace(replaced, temp1);
            console.log(activationKey);
          }
          break;
        case "Slice":
          let temp = "";
          index1 = Number(firstArgument);
          index2 = Number(secondArgument);
          if (
            (index1 && index2) >= 0 &&
            (index1 && index2) < activationKey.length
          ) {
            temp = activationKey.substring(index1, index2);
            activationKey = activationKey.replace(temp, "");
          }
          console.log(activationKey);
          break;
        case "Generate":
          break;
      }
    }
    console.log(`Your activation key is: ${activationKey}`);
  }
activationKeys(['abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate']) 