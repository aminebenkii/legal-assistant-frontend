// src/data/suggestions.ts

export const IntroMessages = {
  en: {
    title: "Need Legal Help?",
    button: "Start Chatting",
    body: `
      <p>⚖️ <strong>How it works</strong></p>
      <p>Chat with your AI legal assistant for quick answers and links to helpful resources.</p>
      <ul class="list-disc pl-5 space-y-1">
        <li>Understand basic legal terms and processes</li>
        <li>Get pointers on contracts, employment or tenant rights</li>
      </ul>
      <p class="mt-2">Information provided is general and not legal advice.</p>
      <p class="mt-2"><em>Examples:</em><br>
      “How do I cancel a contract?”<br>
      “What are my rights as a tenant in Québec?”</p>
    `.trim()
  },

  fr: {
    title: "Besoin d'aide juridique ?",
    button: "Commencer la discussion",
    body: `
      <p>⚖️ <strong>Comment ça marche</strong></p>
      <p>Discutez avec votre assistant juridique virtuel pour obtenir des réponses rapides et des liens vers des ressources officielles.</p>
      <ul class="list-disc pl-5 space-y-1">
        <li>Comprenez les notions et procédures juridiques de base</li>
        <li>Trouvez des informations sur les contrats, l'emploi ou les droits des locataires</li>
      </ul>
      <p class="mt-2">Ces informations sont générales et ne constituent pas un conseil juridique.</p>
      <p class="mt-2"><em>Exemples :</em><br>
      « Comment résilier un contrat ? »<br>
    « Quels sont mes droits de locataire au Québec ? »</p>
    `.trim()
  },

  ar: {
    title: "هل تحتاج إلى مساعدة قانونية؟",
    button: "ابدأ الدردشة",
    body: `
      <p>⚖️ <strong>كيف يعمل</strong></p>
      <p>تحدث مع مساعدك القانوني الذكي للحصول على إجابات سريعة وروابط لمصادر مفيدة.</p>
      <ul class="list-disc pl-5 space-y-1">
        <li>فهم المصطلحات والإجراءات القانونية الأساسية</li>
        <li>الحصول على توجيهات حول العقود أو العمل أو حقوق المستأجرين</li>
      </ul>
      <p class="mt-2">المعلومات المقدمة عامة وليست نصيحة قانونية.</p>
      <p class="mt-2"><em>أمثلة:</em><br>
      "كيف أفسخ عقداً؟"<br>
      "ما هي حقوقي كمستأجر؟"</p>
    `.trim()
  }
}



export const WelcomeMessage = {
  en: `
Hey there! 👋
Welcome to your Legal Assistant.
Ask me about everyday legal issues —
I'll do my best to help. ⚖️
`.trim(),

  fr: `
Bonjour ! 👋
Bienvenue sur votre assistant juridique.
Posez-moi vos questions juridiques courantes —
je ferai de mon mieux pour vous aider. ⚖️
`.trim()
,
  ar: `
مرحباً! 👋
أهلاً بك في مساعدك القانوني.
اطرح أسئلتك القانونية اليومية —
سأبذل جهدي لمساعدتك. ⚖️
`.trim()
}



export const suggestions = [
  {
    key: "faq",
    label: {
      en: "FAQs",
      fr: "FAQs",
      ar: "أسئلة شائعة",
    },
    userText: {
      en: "What are some common legal questions?",
      fr: "Quelles sont les questions juridiques courantes ?",
      ar: "ما هي الأسئلة القانونية الشائعة؟",
    },
    botReply: {
      en: `
Here are a few topics people often ask about:

- tenant rights
- small claims process
- cancelling a contract

What would you like help with?
      `.trim(),

      fr: `
Voici quelques sujets souvent demandés :

- droits des locataires
- procédure des petites créances
- résiliation d'un contrat

De quoi avez-vous besoin ?
      `.trim(),

      ar: `
إليك بعض المواضيع التي يسأل عنها الناس عادةً:

- حقوق المستأجر
- إجراءات محكمة الدعاوى الصغيرة
- فسخ عقد

بماذا يمكنني مساعدتك؟
      `.trim(),
    },
  },
  {
    key: "tenant",
    label: {
      en: "Tenant Rights",
      fr: "Droits des locataires",
      ar: "حقوق المستأجر",
    },
    userText: {
      en: "Tell me about tenant rights",
      fr: "Parle-moi des droits des locataires",
      ar: "أخبرني عن حقوق المستأجر",
    },
    botReply: {
      en: `
I can provide general information about tenant rights, including maintenance obligations, eviction procedures and rent increases. How can I help?
      `.trim(),

      fr: `
Je peux fournir des informations générales sur les droits des locataires : obligations d'entretien, procédures d'expulsion et augmentations de loyer. Comment puis-je vous aider ?
      `.trim(),

      ar: `
يمكنني تزويدك بمعلومات عامة حول حقوق المستأجر مثل التزامات الصيانة وإجراءات الإخلاء وزيادات الإيجار. كيف يمكنني المساعدة؟
      `.trim(),
    },
  },
  {
    key: "help",
    label: {
      en: "Help",
      fr: "Aide",
      ar: "مساعدة",
    },
    userText: {
      en: "Help me use this app",
      fr: "Aide-moi à utiliser cette application",
      ar: "ساعدني في استخدام هذا التطبيق",
    },
    botReply: {
      en: `
⚖️ **How it works**
Ask about everyday legal questions and I'll provide general information and resources.

- Explanations of basic legal terms
- Guidance on contracts, employment or tenant rights

This tool doesn't replace a lawyer.

_Examples:_
- “How do I cancel a contract?”
- “What are my rights if my landlord won't repair my apartment?”
&nbsp;
      `,

      fr: `
⚖️ **Comment ça marche :**

Posez vos questions juridiques du quotidien et j'offrirai des informations générales et des ressources.

- Explications de notions juridiques de base
- Conseils sur les contrats, le travail ou les droits des locataires

Cet outil ne remplace pas un avocat.

_Exemples :_
- « Comment résilier un contrat ? »
- « Quels sont mes droits si mon propriétaire ne répare pas mon logement ? »
&nbsp;`,

      ar: `
⚖️ **كيف يعمل**
اسأل عن الأسئلة القانونية اليومية وسأقدم معلومات عامة وروابط.

- شرح المصطلحات القانونية الأساسية
- إرشادات حول العقود أو العمل أو حقوق المستأجر

هذا التطبيق لا يغني عن المحامي.

_أمثلة:_
- "كيف أفسخ عقداً؟"
- "ما هي حقوقي إذا رفض المالك إصلاح شقتي؟"
&nbsp;`,
    },
  },
]
export const NetworkErrorMessage = {
  en: "\u274c Sorry, I couldn't reach the server.",
  fr: "\u274c D\u00e9sol\u00e9, je n'ai pas pu contacter le serveur.",
  ar: "\u274c عذراً، تعذر الوصول إلى الخادم."
}

