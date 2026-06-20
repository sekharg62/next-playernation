export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  image: string;
  imageAlt: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  readTimeMinutes: number;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "grassroots-football-match-stats-guide",
    title: "How Grassroots Players Can Use Match Stats to Improve Faster",
    excerpt:
      "Pro clubs have used data for years. Here is how grassroots players can use pass maps, shot charts, and match ratings to train smarter.",
    description:
      "Learn how grassroots football players can use match stats, pass maps, and player ratings from Player Nation to identify strengths, fix weaknesses, and improve faster every season.",
    image:
      "https://images.unsplash.com/photo-1434648957308-5e6a859697e8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Football player match statistics dashboard on a phone",
    category: "Player Development",
    publishedAt: "2026-03-10",
    updatedAt: "2026-03-10",
    readTimeMinutes: 6,
    content: [
      "For most of football history, detailed match data belonged to professional clubs with full analyst teams. Grassroots players were left guessing — relying on memory, a few goals, and whatever their coach noticed from the sideline.",
      "That gap is closing. When you upload a full match, modern tools can track passes, shots, tackles, recoveries, and dozens of other actions across ninety minutes. The result is not just a scoreline, but a picture of how you actually played.",
      "Start with three numbers after each game: your pass completion rate, your defensive actions, and your involvement in the final third. Together they tell you whether you controlled the game, broke it up, or created danger.",
      "Pass maps are especially useful for midfielders and defenders. If most of your completed passes travel sideways, you may be playing too safe. If your map clusters in one zone, opponents can predict your movement and close you down earlier.",
      "For attackers, shot maps reveal more than goals. Are you shooting from high-value areas? Are you taking too many low-probability efforts? A striker who converts one of five chances may still be doing the right thing if the chances were quality.",
      "The biggest advantage is consistency. One match is a snapshot. Ten matches become a trend. Track your ratings and key stats across a season and you will spot patterns no single highlight reel can show — late-game fatigue, stronger performances on one flank, or improved pressing after training changes.",
      "Player Nation was built for exactly this workflow: upload your match, get pro-style reports, and turn every game into feedback you can use next week. Data does not replace instinct or coaching, but it gives every player the same objective starting point pros have used for years.",
    ],
  },
  {
    slug: "what-pass-maps-reveal-about-your-game",
    title: "What Your Pass Map Reveals About Your Game",
    excerpt:
      "Pass maps look simple, but they expose habits, risk levels, and where you really influence the pitch.",
    description:
      "Understand what football pass maps show about positioning, decision-making, and risk — and how Player Nation helps grassroots players read their own game like a pro analyst.",
    image:
      "https://images.unsplash.com/photo-1570498839593-e565b39455fc?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Football pass map visualization on a mobile app screen",
    category: "Analytics",
    publishedAt: "2026-02-22",
    updatedAt: "2026-02-22",
    readTimeMinutes: 5,
    content: [
      "A pass map is one of the clearest ways to see how a player connects a team. Every completed pass is plotted on the pitch, showing where you received the ball and where you sent it next.",
      "Coaches often talk about scanning and playing forward. Your pass map makes that conversation concrete. A cluster of short sideways passes in your own half may mean you are not finding the next line. A strong diagonal into the final third usually signals positive intent.",
      "Defenders can use pass maps to check build-up patterns. Are you comfortable playing through pressure, or do you default to long clearances under stress? Neither is always wrong, but the map shows which habit you rely on when the game speeds up.",
      "Wide players should look at width. If your passes rarely reach the touchline or cut inside early every time, your team loses spacing. Midfielders should look at connections: are you linking with both the back line and the forwards, or operating in an isolated pocket?",
      "The best part of reviewing a pass map after each match is comparison. Over a month, you can see whether a tactical tweak worked, whether fitness is affecting late-game distribution, and whether you are growing into a more influential role.",
      "With Player Nation, pass maps are generated automatically from uploaded matches — no manual tagging, no spreadsheet work. That means more time reviewing decisions and less time preparing data.",
    ],
  },
  {
    slug: "youth-football-highlight-reels-development",
    title: "Why Highlight Reels Matter for Youth Football Development",
    excerpt:
      "Highlights are not just for social media. Used well, they help young players learn faster and communicate progress with coaches and parents.",
    description:
      "Discover why automated highlight reels matter for youth football development, recruiting conversations, and building confidence in young players using Player Nation.",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Youth football player watching match highlights on a phone",
    category: "Youth Football",
    publishedAt: "2026-02-05",
    updatedAt: "2026-02-05",
    readTimeMinutes: 5,
    content: [
      "Highlights have become part of modern football culture, but for young players they can be more than content for social media. A good highlight reel is a learning tool — a focused replay of the moments that defined a match.",
      "The problem is time. Parents and players rarely have an evening to scrub through full-match video, clip each action, and export files. By the time highlights are ready, the next game is already around the corner.",
      "Automated highlight generation changes that workflow. When software identifies goals, assists, key passes, and defensive actions, players can review their best and worst moments while the game is still fresh.",
      "For development, the goal is not only to celebrate good plays. Young players should watch near-misses too: the shot saved, the through ball intercepted, the tackle that started a counter. Those clips support better conversations with coaches about decision-making under pressure.",
      "Parents benefit as well. Match stats can feel abstract until you see the moments behind the numbers. A highlight reel paired with a player report gives families a fuller picture of progress — not just whether their child scored, but how they contributed across the game.",
      "Used consistently across a season, highlights and ratings together build confidence and accountability. Players see growth. Coaches save time. Families stay engaged.",
      "Player Nation combines automated highlights with detailed match reports so every game leaves players with both the clips they want to share and the insights they need to improve.",
    ],
  },
];

export function getBlogImageUrl(image: string): string {
  return image.startsWith("http") ? image : `${process.env.NEXT_PUBLIC_SITE_URL || "https://playernation.com"}${image}`;
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedBlogPosts(limit = 3): BlogPost[] {
  return blogPosts.slice(0, limit);
}
