export type Flavor = {
  id: string;
  name: string;
  description: string;
  mascotNote: string;
};

export type Mascot = {
  id: string;
  name: string;
  role: string;
  quote: string;
};

export type AcademyLesson = {
  id: string;
  title: string;
  simpleDefinition: string;
  mascotId: string;
  example: string;
};

export type Badge = {
  id: string;
  name: string;
  threshold: number;
  description: string;
};

export type BusinessPlanSection = {
  id: string;
  title: string;
  badge: string;
  points: string[];
};

export const siteConfig = {
  brand: {
    name: "Matix's Dill-icious Pickles",
    tagline: "Homegrown Cucumbers. Homemade Pickles. Big Pickle Dreams.",
    shortTaglines: ["Crunch With Purpose", "From Garden To Jar", "Warning: May Cause Extreme Pickle Happiness"],
    founder: "Matix",
    founderTitle: "CEO & Chief Pickle Officer"
  },
  product: {
    pricePerJar: 6,
    estimatedCostPerJar: 2.4,
    savingsRate: 0.5,
    reinvestmentRate: 0.5
  },
  flavors: [
    {
      id: "classic-dill",
      name: "Classic Dill",
      description: "The original crunchy jar with bright dill flavor.",
      mascotNote: "Captain Crunch says this is the training-level pickle."
    },
    {
      id: "garlic-dill",
      name: "Garlic Dill",
      description: "A bold jar for garlic fans and sandwich builders.",
      mascotNote: "Dillbert recommends opening this one near snack time."
    },
    {
      id: "extra-crunch",
      name: "Extra Crunch",
      description: "Built for maximum snap, crunch, and happy faces.",
      mascotNote: "Pickle Pup gives this jar four paws up."
    },
    {
      id: "spicy-dill",
      name: "Spicy Dill",
      description: "A little heat for brave pickle explorers.",
      mascotNote: "Captain Crunch calls this the hero mode jar."
    },
    {
      id: "sweet-dill",
      name: "Sweet Dill",
      description: "A softer, sweeter crunch for snack plates.",
      mascotNote: "Money Jar Jerry says sweet flavors can still mean serious business."
    }
  ] satisfies Flavor[],
  mascots: [
    {
      id: "captain-crunch",
      name: "Captain Crunch",
      role: "Superhero pickle",
      quote: "Every big business starts with one brave crunch."
    },
    {
      id: "professor-pickle",
      name: "Professor Pickle",
      role: "Business teacher",
      quote: "Revenue is the money that comes in before costs."
    },
    {
      id: "dillbert",
      name: "Dillbert",
      role: "Goofy assistant",
      quote: "I tested the crunch science with my face."
    },
    {
      id: "pickle-pup",
      name: "Pickle Pup",
      role: "Friendly dog mascot",
      quote: "Sniff first. Crunch second. Wag always."
    },
    {
      id: "money-jar-jerry",
      name: "Money Jar Jerry",
      role: "Savings jar coach",
      quote: "Some profit gets saved, and some helps the garden grow."
    }
  ] satisfies Mascot[],
  academyLessons: [
    {
      id: "revenue",
      title: "Revenue",
      simpleDefinition: "Revenue is all the money customers pay before costs.",
      mascotId: "professor-pickle",
      example: "10 jars x $6 = $60 revenue."
    },
    {
      id: "cost",
      title: "Cost",
      simpleDefinition: "Costs are what Matix spends to make each jar.",
      mascotId: "dillbert",
      example: "Jars, cucumbers, dill, garlic, labels, and supplies are costs."
    },
    {
      id: "profit",
      title: "Profit",
      simpleDefinition: "Profit is what is left after costs.",
      mascotId: "money-jar-jerry",
      example: "$60 revenue - $24 costs = $36 profit."
    },
    {
      id: "reinvestment",
      title: "Reinvestment",
      simpleDefinition: "Reinvestment means using some profit to make the business better.",
      mascotId: "money-jar-jerry",
      example: "Matix could buy more seeds, jars, or labels."
    },
    {
      id: "customer-service",
      title: "Customer Service",
      simpleDefinition: "Customer service means helping people feel cared for.",
      mascotId: "pickle-pup",
      example: "A thank-you note can make a jar feel special."
    },
    {
      id: "marketing",
      title: "Marketing",
      simpleDefinition: "Marketing helps people discover something useful or fun.",
      mascotId: "captain-crunch",
      example: "A funny pickle sign can help neighbors remember the business."
    },
    {
      id: "branding",
      title: "Branding",
      simpleDefinition: "Branding is the look, voice, and feeling people remember.",
      mascotId: "professor-pickle",
      example: "Dill-icious names, mascots, and labels make the jars memorable."
    }
  ] satisfies AcademyLesson[],
  businessPlan: [
    {
      id: "idea",
      title: "My Business Idea",
      badge: "1",
      points: ["Make homemade pickles from cucumbers I grow.", "Share the crunch with people who love tasty snacks."]
    },
    {
      id: "mission",
      title: "My Mission",
      badge: "2",
      points: ["Make super tasty pickles.", "Make people smile.", "Save up for awesome adventures."]
    },
    {
      id: "product",
      title: "My Product",
      badge: "3",
      points: ["Hand-picked cucumbers.", "Crunchy jars made with care.", "$6 per jar."]
    },
    {
      id: "customers",
      title: "My Customers",
      badge: "4",
      points: ["Neighbors.", "Friends and family.", "Teachers and local pickle fans."]
    },
    {
      id: "marketing",
      title: "My Marketing Plan",
      badge: "5",
      points: ["Make funny signs.", "Offer samples when an adult says it is okay.", "Tell the story from garden to jar."]
    },
    {
      id: "growth",
      title: "My Plan To Grow",
      badge: "6",
      points: ["Try garlic, spicy, sweet, and extra-crunch flavors.", "Sell at local events with adult help.", "Keep making the label cooler."]
    },
    {
      id: "money",
      title: "Money Plan",
      badge: "7",
      points: ["Sell jars for $6 each.", "Buy ingredients and jars.", "Save some profit and reinvest some profit."]
    },
    {
      id: "superpower",
      title: "My Superpower",
      badge: "8",
      points: ["I work hard.", "I do not give up.", "I believe in my pickles."]
    }
  ] satisfies BusinessPlanSection[],
  badges: [
    {
      id: "first-sale",
      name: "First Sale",
      threshold: 1,
      description: "The business made its first customer happy."
    },
    {
      id: "ten-jars",
      name: "10 Jars Sold",
      threshold: 10,
      description: "A real neighborhood pickle stand is forming."
    },
    {
      id: "twenty-five-jars",
      name: "25 Jars Sold",
      threshold: 25,
      description: "Matix is learning repeatable production."
    },
    {
      id: "neighborhood-hero",
      name: "Neighborhood Pickle Hero",
      threshold: 50,
      description: "Customers are telling friends."
    },
    {
      id: "garden-master",
      name: "Garden Master",
      threshold: 75,
      description: "The garden is turning into a business engine."
    },
    {
      id: "crunch-commander",
      name: "Crunch Commander",
      threshold: 100,
      description: "The brand has serious crunch power."
    }
  ] satisfies Badge[]
} as const;

export type SiteConfig = typeof siteConfig;
