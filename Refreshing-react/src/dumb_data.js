export let DATA = [
  {
    id: 123,
    customerName: "Bartholomew Buttercup",
    feedbacks: [
      {
        id: 987,
        feedbackMessage:
          "My pet hamster, Squeaky, says this product is... adequate. He mostly uses it as a tiny obstacle course.",
      },
    ],
  },
  {
    id: 456,
    customerName: "Agnes Periwinkle",
    feedbacks: [
      {
        id: 654,
        feedbackMessage:
          "I tried using this as a hat. It didn't fit. My cat seemed amused though.",
      },
      {
        id: 321,
        feedbackMessage: "Is it edible? Asking for a friend... who is also me.",
      },
    ],
  },
  {
    id: 789,
    customerName: "Reginald Fluffington the Third",
    feedbacks: [
      {
        id: 246,
        feedbackMessage:
          "It makes a funny noise when I tap it with a spoon. 7/10.",
      },
    ],
  },
  {
    id: 101,
    customerName: "Gertrude Bumble",
    feedbacks: [
      {
        id: 579,
        feedbackMessage:
          "I accidentally used it to water my plants. They haven't complained yet.",
      },
      {
        id: 111,
        feedbackMessage: "Does it come in purple?",
      },
    ],
  },
];

export const addNewCustomer = (name) => {
  const newCustomerObj = {
    id: Math.floor(Math.random() * 1000) + 1,
    customerName: name,
    feedbacks: [],
  };

  DATA.push(newCustomerObj);
};

export const addNewFeedback = (customerId, feedbackMessage) => {
  const customer = DATA.find((cust) => cust.id === customerId);

  if (customer) {
    const newFeedback = {
      id: Math.floor(Math.random() * 1000) + 1, // Generate a random ID for the feedback
      feedbackMessage: feedbackMessage,
    };
    customer.feedbacks.push(newFeedback);
  }
};
