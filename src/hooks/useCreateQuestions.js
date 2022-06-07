function useCreateQuestions(data) {
  let randomCountries = [];

  let questions = [];
  for (let i = 0; i < 10; i++) {
    if (data !== null) {
      const index = Math.floor(Math.random() * data.length);
      if (!randomCountries.includes(index)) {
        randomCountries.push(data[index]);
      } else i--;
    }
  }

  randomCountries.forEach((country) => {
    const questionType = Math.random() < 0.5;

    let question = {};
    let randomOptionsIndex = [];
    for (let i = 0; i < 3; i++) {
      const index = Math.floor(Math.random() * data.length);
      if (!randomOptionsIndex.includes(index)) {
        randomOptionsIndex.push(index);
      } else i--;
      if (questionType) {
        question = {
          type: "capital",
          correctAnswer: country.name.common,
          question: country.capital,
          options: [
            country.name.common,
            ...randomOptionsIndex.map((option) => data[option].name.common),
          ].sort(() => 0.5 - Math.random()),
        };
      } else {
        question = {
          type: "flag",
          correctAnswer: country.name.common,
          question: country.flags.svg,
          options: [
            country.name.common,
            ...randomOptionsIndex.map((option) => data[option].name.common),
          ].sort(() => 0.5 - Math.random()),
        };
      }
    }
    questions.push(question);
  });

  return { questions };
}

export default useCreateQuestions;
