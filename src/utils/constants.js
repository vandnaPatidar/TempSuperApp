export const plans = [
  {
    id: "1",
    planName: "Smart Guaranteed Pension Plan",
    planType: "Annuity",
    topDisplay: [
      {
        name: "Income Benefit",
        value: "$ 75.5 L",
      },
      {
        name: "Maturity Benefit",
        value: "$ 95 L",
      },
    ],
    hiddenDetails: [
      {
        name: "Life Cover",
        value: "$ 2 Cr",
      },
      {
        name: "Policy Term",
        value: "25 years",
      },
      {
        name: "Income Period",
        value: "2019 - 2049",
      },
      {
        name: "Monthly Premium",
        value: "$ 95,000",
      },
      {
        name: "Quarterly Premium",
        value: "$ 2.85 L",
      },
      {
        name: "Annual Premium",
        value: "$ 11.4 L",
      },
    ],
  },
  {
    id: "2",
    planName: "Smart Wealth Plan",
    planType: "PAR",
    topDisplay: [
      {
        name: "Maturity Benefit",
        value: "$ 1.5 Cr",
      },
    ],
    hiddenDetails: [
      {
        name: "Life Cover",
        value: "$ 2 Cr",
      },
      {
        name: "Policy Term",
        value: "25 years",
      },
      // {
      //   name: "Income Period",
      //   value: "2019 - 2049",
      // },
      {
        name: "Monthly Premium",
        value: "$ 95,000",
      },
      {
        name: "Quarterly Premium",
        value: "$ 2.85 L",
      },
      {
        name: "Annual Premium",
        value: "$ 11.4 L",
      },
    ],
  },
  {
    id: "3",
    planName: "Flexi Protect Solution",
    planType: "non-PAR",
    topDisplay: [
      {
        name: "Maturity Benefit",
        value: "$ 1.5 Cr",
      },
    ],
    hiddenDetails: [
      {
        name: "Life Cover",
        value: "$ 2 Cr",
      },
      {
        name: "Policy Term",
        value: "25 years",
      },
      {
        name: "Monthly Premium",
        value: "$ 95,000",
      },
      {
        name: "Quarterly Premium",
        value: "$ 2.85 L",
      },
      {
        name: "Annual Premium",
        value: "$ 11.4 L",
      },
    ],
  },
  {
    id: "4",
    planName: "Wealth Income Plan",
    planType: "Protection",
    topDisplay: [
      {
        name: "Maturity Benefit",
        value: "$ 1.5 Cr",
      },
    ],
    hiddenDetails: [
      {
        name: "Life Cover",
        value: "$ 2 Cr",
      },
      {
        name: "Policy Term",
        value: "25 years",
      },
      {
        name: "Income Period",
        value: "2019 - 2049",
      },
      {
        name: "Monthly Premium",
        value: "$ 95,000",
      },
      {
        name: "Quarterly Premium",
        value: "$ 2.85 L",
      },
      {
        name: "Annual Premium",
        value: "$ 11.4 L",
      },
    ],
  },
];

export const leads = [
  {
    id: 1,
    initials: "MC",
    leadName: "Mohith Chauhan",
    customerId: "12312424",
    noOfQuotes: "2 Quotes",
    backgroundColor: "#F7D037",
  },
  {
    id: 2,
    initials: "MB",
    leadName: "Manyata Bhatia",
    customerId: "123124124",
    noOfQuotes: "1 Quote",
    backgroundColor: "#21A2D0",
  },
  {
    id: 3,
    initials: "NS",
    leadName: "Namrata Shinde",
    customerId: "123124124",
    noOfQuotes: "3 Quote",
    backgroundColor: "rgba(238, 43, 102, 0.90)",
  },
  {
    id: 4,
    initials: "SP",
    leadName: "Sindhu Paliwal",
    customerId: "123124124",
    noOfQuotes: "5 Quotes",
    backgroundColor: "#143A72",
  },
  {
    id: 5,
    initials: "PR",
    leadName: "Pankaj Rathi",
    customerId: "123124124",
    noOfQuotes: "4 Quotes",
    backgroundColor: "rgba(70, 174, 125, 0.90)",
  },
  {
    id: 6,
    initials: "NG",
    leadName: "Nikhil Gupta",
    customerId: "123124124",
    noOfQuotes: "2 Quotes",
    backgroundColor: "#F7D037",
  },
];

export const images = {
  CHEVRON_DOWN: require("../../images/chevron-down.png"),
  CHEVRON_UP: require("../../images/chevron-up.png"),
  CHEVRON_RIGHT: require("../../images/chevron-right.png"),
  CHEVRON_RIGHT_BLACK: require("../../images/chevron-right-black.png"),
  PLUS_BUTTON: require("../../images/Close.png"),
  MAXLIFE_LOGO: require("../../images/Maxlife-Logo.png"),
  LEADS: require("../../images/Group.png"),
  // LEADS: require("../../images/Groups.svg"),
  ARROW_RIGHT: require("../../images/arrow-right.png"),
};

export const GO_WITH_THIS_QUOTE = "Go with this quote";
export const leadsAtGlance = [
  // {
  //   name: "Status",
  //   id: 0,
  // },
  // {
  //   name: "Source",
  //   id: 1,
  // },
  "Status",
  "Source",
  "Created Date",
  "Campaign",
  "Lead Score",
];
export const leadsAtGlanceData = [
  [
    {
      image: require("../../images/Group.png"),
      statusName: "Fresh Leads",
      statusCount: 175,
    },
    {
      image: require("../../images/Group.png"),
      statusName: "Calls Done",
      statusCount: 32,
    },
    {
      image: require("../../images/Group.png"),
      statusName: "Meeting Scheduled",
      statusCount: 38,
    },
  ],
  [
    {
      image: require("../../images/Group.png"),
      statusName: "Refferal Leads",
      statusCount: 15,
    },
    {
      image: require("../../images/Group.png"),
      statusName: "Self Leads",
      statusCount: 2,
    },
    {
      image: require("../../images/Group.png"),
      statusName: " Cross Sell Leads",
      statusCount: 8,
    },
  ],
  [
    {
      image: require("../../images/Group.png"),
      statusName: "Today",
      statusCount: 1,
    },
    {
      image: require("../../images/Group.png"),
      statusName: "> 1 Week",
      statusCount: 0,
    },
    {
      image: require("../../images/Group.png"),
      statusName: " < 1 Week",
      statusCount: 0,
    },
  ],
];

export const status = [
  {
    image: require("../../images/Group.png"),
    statusName: "Fresh Leads",
    statusCount: 175,
  },
  {
    image: require("../../images/Group.png"),
    statusName: "Calls Done",
    statusCount: 32,
  },
  {
    image: require("../../images/Group.png"),
    statusName: "Meeting Scheduled",
    statusCount: 38,
  },
];
