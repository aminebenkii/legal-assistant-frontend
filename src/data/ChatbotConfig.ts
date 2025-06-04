// src/data/suggestions.ts

export const IntroMessages = {
  en: {
    title: "Ready to Explore?",    
    button: "Start Chatting",
    body: `
      <p>✈️ <strong>How it works</strong></p>
      <p>Just chat with your AI assistant — describe your trip, and it finds the cheapest flights based on your flexibility.</p>
      <ul class="list-disc pl-5 space-y-1">
        <li>Search for the <strong>best one-way deals</strong> in a date range</li>
        <li>Find <strong>cheap round trips</strong> in a month or custom range, even with flexible stay durations</li>
      </ul>
      <p class="mt-2">The more flexible you are, the better the price.</p>
      <p class="mt-2"><em>Examples:</em><br>
      “One-way to Barcelona in the first week of June”<br>
      “Round trip to Cagliari in July, stay 8–10 nights”</p>
    `.trim()
  },

  fr: {
    title: "Prêt à explorer ?",
    button: "Commencer la discussion",
    body: `
      <p>✈️ <strong>Comment ça marche</strong></p>
      <p>Parle simplement avec ton assistant — décris ton voyage, il trouve les vols les moins chers selon ta flexibilité.</p>
      <ul class="list-disc pl-5 space-y-1">
        <li>Cherche les <strong>meilleurs allers simples</strong> sur une plage de dates</li>
        <li>Trouve des <strong>allers-retours pas chers</strong> sur un mois ou une période, même avec durée de séjour flexible</li>
      </ul>
      <p class="mt-2">Plus tu es flexible, plus les prix seront bas.</p>
      <p class="mt-2"><em>Exemples :</em><br>
      « Aller simple pour Barcelone la première semaine de juin »<br>
      « Aller-retour pas cher pour Cagliari en juillet, séjour de 8 à 10 nuits »</p>
    `.trim()
  }
}



export const WelcomeMessage = {
  en: `
Hey there! 👋  
Welcome to Flight Sniper.  
Tell me where you're headed —  
and we'll hunt down the best deal together. ✈️
`.trim(),

  fr: `
Bonjour ! 👋  
Bienvenue sur Flight Sniper.  
Dites-moi où vous souhaitez partir —  
et on dénichera les meilleures offres ensemble. ✈️
`.trim()
}



export const suggestions = [
  {
    key: "oneway",
    label: {
      en: "One Way Flights",
      fr: "Vols Aller Simple",
    },
    userText: {
      en: "I'd like to search one way flights",
      fr: "Je veux chercher un vol aller simple",
    },
    botReply: {
      en: `
Looking for cheap one-way flights on a specific day or within a date range?  

Start by telling me your **origin** and **destination** — let’s hunt down the best deals!
      `.trim(),

      fr: `
Vous cherchez un vol aller simple pas cher à une date précise ou sur une plage de dates ?  

Commencez par me donner votre **ville de départ** et votre **destination** — et on va dénicher les meilleures offres !
      `.trim(),
    },
  },
  {
    key: "roundtrip",
    label: {
      en: "Round Trip Flights",
      fr: "Vols Aller-Retour",
    },
    userText: {
      en: "Show me round trip flights",
      fr: "Montre-moi des vols aller-retour",
    },
    botReply: {
      en: `
Looking for a cheap round trip? Got some flexibility on dates and stay duration?  

Just tell me your **origin** and **destination** — and let's find you the best combinations!
      `.trim(),

      fr: `
Vous cherchez un aller-retour pas cher ? Vous êtes un peu flexible sur les dates et la durée du séjour ?

Dites-moi simplement votre **ville de départ** et votre **destination** — et on trouvera les meilleures combinaisons !
      `.trim(),
    },
  },
  {
    key: "help",
    label: {
      en: "Help",
      fr: "Aide",
    },
    userText: {
      en: "Help me use this app",
      fr: "Aide-moi à utiliser cette application",
    },
    botReply: {
      en: `
✈️ **How it works**  
Just chat with your AI assistant — describe your trip, and it finds the cheapest flights based on your flexibility.

- Search for the **best one-way deals** in a date range  
- Find **cheap round trips** in a month or custom range, even with flexible stay durations  

The more flexible you are, the better the price.

_Examples:_  
- “One-way to Barcelona in the first week of June”  
- “Round trip to Cagliari in July, stay 8–10 nights”  
&nbsp;
      `,

      fr: `
✈️ **Comment ça marche :**

Parle simplement avec ton assistant — décris ton voyage, il trouve les vols les moins chers selon ta flexibilité.

- Cherche les **meilleurs allers simples** sur une plage de dates  
- Trouve des **allers-retours pas chers** sur un mois ou une période, même avec durée de séjour flexible  

Plus tu es flexible, plus les prix seront bas.

_Exemples :_  
- « Aller simple pour Barcelone la première semaine de juin »  
- « Aller-retour pas cher pour Cagliari en juillet, séjour de 8 à 10 nuits »  
&nbsp;`,
    },
  },
]
