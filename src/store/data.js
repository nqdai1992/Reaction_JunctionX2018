export const promotionList = {
  pro1: {
    thumbnail: "services/restaurant-1.png",
    name: "Hutong",
    category: "hotpot, buffet",
    promotion: "Discount 20% for group of 4"
  },
  pro2: {
    thumbnail: "services/restaurant-2.jpg",
    name: "Gong cha",
    category: "milk tea",
    promotion: "Buy 4 get 1 free"
  },
  pro3: {
    thumbnail: "services/karaoke-1.jpg",
    name: "Just dance karaoke",
    category: "karaoke",
    promotion: "One free beer for each person in groups of 5"
  }
};

export const users = {
  per1: {
    name: "Hung Dang",
    age: "26",
    phone: "0368273625",
    avatar: "",
    paymentMethod: "",
    transactionHistory: {
      spending: [
        {
          title: "Buy lunch at Hutong",
          category: "food",
          time: "",
          amount: 259000
        },
        {
          title: "Justdance",
          category: "entertainment",
          time: "",
          amount: 159000
        },
        {
          title: "Gong cha milk tea",
          category: "food",
          time: "",
          amount: 59000
        }
      ],
      lending: [
        {
          people: "Trang",
          description: "drink beer",
          time: "10/10/2018",
          amount: "100000",
          condition: "not paid"
        },
        {
          people: "Dai",
          description: "picnic",
          time: "4/2/2018",
          amount: "550000",
          condition: "paid"
        }
      ],
      debt: [
        {
          people: "Tien",
          description: "eat pizza",
          time: "8/10/2018",
          amount: "125000",
          condition: "not paid"
        },
        {
          people: "Nga",
          description: "buy hackathon kit",
          time: "8/10/2018",
          amount: "75000",
          condition: "not paid"
        }
      ]
    }
  }
};

export const friendLists = {
  id1: { name: "Trang", age: "26" },
  id2: { name: "Dai", age: "27" },
  id3: { name: "Tien", age: "36" },
  id4: { name: "Nga", age: "18" }
};
