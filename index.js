const item = [
    { year: "2014", result: "L" },
    { year: "2015", result: "L" },
    { year: "2016", result: "W" },
    { year: "2017", result: "L" }
  ];

  function superbowlWin(record) {
    const win = record.find(item => item.result === "W");
    return win ? win.year : undefined;
  }

  console.log(superbowlWin(item))
