// tests/test-data/test-cases.ts
export const testCases = [
  // ============================
  // POSITIVE FUNCTIONAL TESTS (24)
  // ============================
  {
    id: "Pos_Fun_0001",
    name: "Simple present tense with modifier",
    inputLength: "S",
    input: "mata dhaen slow gathiyak dhaenavaa.",
    expected: "මට දැන් slow ගතියක් දැනවා.",
    status: "Pass",
    categories: ["Daily language usage", "Simple sentence", "S (≤30 characters)", "Accuracy validation"]
  },
  {
    id: "Pos_Fun_0002",
    name: "Compound sentence with English technical term",
    inputLength: "M",
    input: "mama gedhara yanavaa, haebaeyi Zoom meeting ekak thiyenava nisaa office enna oonee.",
    expected: "මම ගෙදර යනවා, හැබැයි Zoom meeting එකක් තියෙනවා නිසා office එන්න ඕනේ.",
    status: "Pass",
    categories: ["Mixed Singlish + English", "Compound structure", "M (31–299 characters)", "Accuracy validation"]
  },
  {
    id: "Pos_Fun_0003",
    name: "Complex conditional with mixed language",
    inputLength: "M",
    input: "oya email eka eva naam mama document tika attach karalaa evannam, naethnam mata call ekak dhaapang.",
    expected: "ඔයා email එක එවා නම් මම document ටික attach කරලා එවන්නම්, නැත්නම් මට call එකක් දාපන්ග්.",
    status: "Pass",
    categories: ["Mixed Singlish + English", "Complex sentence", "M (31–299 characters)", "Robustness validation"]
  },
  {
    id: "Pos_Fun_0004",
    name: "Formal interrogative with politeness marker",
    inputLength: "S",
    input: "oba vahanseta kohomadha, adha bana thiyeneedha?",
    expected: "ඔබ වහන්සෙට කොහොමද, අද බන තියෙනේද?",
    status: "Pass",
    categories: ["Greeting / request / response", "Interrogative (question)", "S (≤30 characters)", "Accuracy validation"]
  },
  {
    id: "Pos_Fun_0005",
    name: "Imperative with urgency marker",
    inputLength: "S",
    input: "vahaama WhatsApp eka check karanna!",
    expected: "වහාම WhatsApp එක check කරන්න!",
    status: "PASS",
    categories: ["Imperative (command)", "Simple sentence", "S (≤30 characters)", "Accuracy validation"]
  },
  {
    id: "Pos_Fun_0006",
    name: "Double negative construction",
    inputLength: "S",
    input: "mama ehema karannee naeththam  mama ehema kiyanne naehae.",
    expected: "මම එහෙම කරන්නේ නැත්තම්  මම එහෙම කියන්නෙ නැහැ.",
    status: "PASS",
    categories: ["Negation (negative form)", "Complex sentence", "S (≤30 characters)", "Accuracy validation"]
  },
  {
    id: "Pos_Fun_0007",
    name: "Formal greeting with honorific",
    inputLength: "S",
    input: "aayuboovan vahansese, suba udhaesanak!",
    expected: "ආයුබෝවන් වහන්සේ, සුභ උදෑසනක්!",
    status: "Pass",
    categories: ["Greeting / request / response", "Simple sentence", "S (≤30 characters)", "Accuracy validation"]
  },
  {
    id: "Pos_Fun_0008",
    name: "Complex polite request with explanation",
    inputLength: "M",
    input: "karuNaakaralaa LinkedIn profile eka balanna, mama job vacancy ekakata apply karanna hadhanne .",
    expected: "කරුණාකරලා LinkedIn profile එක බලන්න, මම job vacancy එකකට apply කරන්න හදන්නෙ .",
    status: "Pass",
    categories: ["Mixed Singlish + English", "Complex sentence", "M (31–299 characters)", "Accuracy validation"]
  },
  {
    id: "Pos_Fun_0009",
    name: "Urban slang with code-mixing",
    inputLength: "S",
    input: "machang, weekend eka Lit! TikTok live ekak karannam.",
    expected: "මචන්ග්, weekend එක Lit! TikTok live එකක් කරන්නම්.",
    status: "Pass",
    categories: ["Slang / informal language", "Simple sentence", "S (≤30 characters)", "Robustness validation"]
  },
  {
    id: "Pos_Fun_0010",
    name: "Emotional expression with intensifier",
    inputLength: "S",
    input: "mata hariyata baya hithenavaa, presentation eka denna oone nisaa.",
    expected: "මට හරියට බය හිතෙනවා, presentation එක දෙන්න ඕනේ නිසා.",
    status: "Pass",
    categories: ["Daily language usage", "Complex sentence", "S (≤30 characters)", "Accuracy validation"]
  },
  {
    id: "Pos_Fun_0011",
    name: "Idiomatic multi-word expression",
    inputLength: "S",
    input: "mata poddak inna baya hithenavaa, gihin ennam.",
    expected: "මට පොඩික් ඉන්න බය හිතෙනවා, ගිහින් එන්නම්.",
    status: "Pass",
    categories: ["Word combination / phrase pattern", "Complex sentence", "S (≤30 characters)", "Accuracy validation"]
  },
  {
    id: "Pos_Fun_0012",
    name: "Reduplication for intensity",
    inputLength: "S",
    input: "tikak tikak vathura bonavaa, aDhika vaessa unath.",
    expected: "ටිකක් ටිකක් වතුර බොනවා, අධික වැස්ස උනත්.",
    status: "Pass",
    categories: ["Word combination / phrase pattern", "Complex sentence", "S (≤30 characters)", "Accuracy validation"]
  },
  {
    id: "Pos_Fun_0013",
    name: "Past perfect construction",
    inputLength: "S",
    input: "mama iyee office giyath, haebaeyi bank ekata kalin nithara giyaa.",
    expected: "මම ඉයේ office ගියත්, හැබැයි bank එකට කලින් නිතර ගියා.",
    status: "Pass",
    categories: ["Past tense", "Compound sentence", "S (≤30 characters)", "Accuracy validation"]
  },
  {
    id: "Pos_Fun_0014",
    name: "Future continuous tense",
    inputLength: "S",
    input: "mama iiLaGa sathiyee gedhara yan innava, traffic jam ekak naethuvaanam.",
    expected: "මම ඊළඟ සතියේ ගෙදර යන් ඉන්නව, traffic jam එකක් නැතුවානම්.",
    status: "Pass",
    categories: ["Future tense", "Complex sentence", "S (≤30 characters)", "Accuracy validation"]
  },
  {
    id: "Pos_Fun_0015",
    name: "Third person narrative",
    inputLength: "S",
    input: "eyaa Colombo office eken Kandy branch ekata transfer vela, promotion ekak labaa gaththa.",
    expected: "එයා Colombo office එකෙන් Kandy branch එකට transfer වෙල, promotion එකක් ලබා ගත්ත.",
    status: "Pass",
    categories: ["Pronoun variation (I/you/we/they)", "Compound sentence", "S (≤30 characters)", "Accuracy validation"]
  },
  {
    id: "Pos_Fun_0016",
    name: "Collective plural with inclusive marker",
    inputLength: "S",
    input: "api saththu dhennaam, oyaalaa kavuru dha?",
    expected: "අපි සත්තු දෙන්නාම්, ඔයාලා කවුරු ද?",
    status: "Pass",
    categories: ["Plural form", "Interrogative (question)", "S (≤30 characters)", "Accuracy validation"]
  },
  {
    id: "Pos_Fun_0017",
    name: "Technical documentation style",
    inputLength: "M",
    input: 'WiFi network eka select karala "Connect" button eka click karanna. Password eka "admin@123".',
    expected: 'WiFi network එක select කරලා "Connect" button එක click කරන්න. Password එක "admin@123.',
    status: "Pass",
    categories: ["Mixed Singlish + English", "Imperative (command)", "M (31–299 characters)", "Accuracy validation"]
  },
  {
    id: "Pos_Fun_0018",
    name: "Financial transaction language",
    inputLength: "M",
    input: "mata Rs 150000 bank transfer karanna oonee. IBAN: GB29NWBK60161331926819, SWIFT: NWBKGB2L",
    expected: "මට Rs 150000 bank transfer කරන්න ඕනේ. IBAN: GB29NWBK60161331926819, SWIFT: NWBKGB2L",
    status: "Pass",
    categories: ["Punctuation / numbers", "Simple sentence", "M (31–299 characters)", "Accuracy validation"]
  },
  {
    id: "Pos_Fun_0019",
    name: "Multiple punctuation complex",
    inputLength: "S",
    input: 'kohomadha??? hariyata salli gananavaa... "vaedak" naehae!',
    expected: 'කොහොමද??? හරියට සල්ලි ගනනවා... "වැඩක්" නැහැ!',
    status: "Pass",
    categories: ["Punctuation / numbers", "Complex sentence", "S (≤30 characters)", "Formatting preservation"]
  },
  {
    id: "Pos_Fun_0020",
    name: "Date and measurement combo",
    inputLength: "M",
    input: "2025-12-25 dhina mama 5 kg parcel ekak evannam. Dimensions: 30cm x 20cm x 15cm. Delivery 3.00 PM.",
    expected: "2025-12-25 දින මම 5 kg parcel එකක් එවන්නම්. Dimensions: 30cm x 20cm x 15cm. Delivery 3.00 PM.",
    status: "Pass",
    categories: ["Punctuation / numbers", "Simple sentence", "M (31–299 characters)", "Accuracy validation"]
  },
  {
    id: "Pos_Fun_0021",
    name: "Formatted text with tabs",
    inputLength: "M",
    input: "Name: kamal  Age: 25 City: Colombo Salary: Rs. 75,000",
    expected: "Name: කමල්  Age: 25 City: Colombo Salary: Rs. 75,000",
    status: "Pass",
    categories: ["Formatting (spaces / line breaks / paragraph)", "Simple sentence", "M (31–299 characters)", "Formatting preservation"]
  },
  {
    id: "Pos_Fun_0022",
    name: "Academic/professional paragraph",
    inputLength: "L",
    input: "dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura saha naayayaeem heethuven maarga sQQvarDhana aDhikaariya sathu maarga kotas 430k vinaashayata pathva aethi athara. Ehi samastha dhiga pramaaNaya kiloomiitar 300k pamaNa vana bava pravaahana, mahaamaarga saha naagarika sQQvarDhana amaathYA bimal rathnaayaka saDHahan kaLeeya. API call rate limiting implementation karanna oona real-time systems valata.",
    expected: "දිට්වා සුළි කුණාටුව සමඟ ඇති වූ ගංවතුර සහ නායයෑම් හේතුවෙන් මාර්ග සංවර්ධන අධිකාරිය සතු මාර්ග කොටස් 430ක් විනාශයට පත්ව ඇති අතර. එහි සමස්ත දිග ප්‍රමාණය කිලෝමීටර් 300ක් පමණ වන බව ප්‍රවාහන, මහාමාර්ග සහ නාගරික සංවර්ධන අමාත්‍ය බිමල් රත්නායක සඳහන් කළේය. API call rate limiting implementation කරන්න ඕන real-time systems වලට.",
    status: "Pass",
    categories: ["Formatting (spaces / line breaks / paragraph)", "Complex sentence", "L (≥300 characters)", "Robustness validation"]
  },
  {
    id: "Pos_Fun_0023",
    name: "Medical/health terminology",
    inputLength: "M",
    input: "mata fever thiyenava, doctor appointment ekak gannooona. BP check karanna oonee, ECG ekath karalaa.",
    expected: "මට fever තියෙනව, doctor appointment එකක් ගන්නෝඔන. BP check කරන්න ඕනේ, ECG එකත් කරලා.",
    status: "Pass",
    categories: ["Daily language usage", "Complex sentence", "M (31–299 characters)", "Accuracy validation"]
  },
  {
    id: "Pos_Fun_0024",
    name: "Recipe instructions",
    inputLength: "M",
    input: "rice 2 cups, water 4 cups. boil karanna, then slow fire dhaala 20 minutes hadhanna. salt tikak dhaapan.",
    expected: "rice 2 cups, water 4 cups. boil කරන්න, then slow fire දාල 20 minutes හදන්න. salt ටිකක් දාපන්.",
    status: "Pass",
    categories: ["Punctuation / numbers", "Imperative (command)", "M (31–299 characters)", "Accuracy validation"]
  },

  // ============================
  // NEGATIVE FUNCTIONAL TESTS (10)
  // ============================
  {
    id: "Neg_Fun_0001",
    name: "Extreme concatenation stress test",
    inputLength: "M",
    input: "mamagedharayanavaahaebaeyivahinanisaadhaennayanneenaeeofficegiyathumeetingekakalinnitharagiya",
    expected: "මම ගෙදර යනවා හැබැයි වහින නිසා දැන්න යන්නේ නැහැ office ගියත් meeting එක කලින් නිතර ගියා",
    actual: "mamagedharayanavaahaebaeyivahinanisaadhaennayanneenaeeofficegiyathumeetingekakalinnitharagiya",
    status: "Fail",
    categories: ["Typographical error handling", "Simple sentence", "M (31–299 characters)", "Robustness validation"]
  },
  {
    id: "Neg_Fun_0002",
    name: "Mixed case gibberish",
    inputLength: "S",
    input: "MaMa gEdHaRa YaNaVaA. oYaA kOhOmAdHa?",
    expected: "මම ගෙදර යනවා. ඔයා කොහොමද?",
    actual: "මම ගෙඩ්හRඅ YඅණVඅඅ. ඔYඅඅ කොහොමඩ්හ?",
    status: "fail",
    categories: ["Typographical error handling", "Simple sentence", "S (≤30 characters)", "Robustness validation"]
  },
  {
    id: "Neg_Fun_0003",
    name: "URL and email in middle of text",
    inputLength: "M",
    input: "website eka https://example.com/register, email admin@domain.lk",
    expected: "website eka https://example.com/register, email admin@domain.lk",
    actual: "website එක හ්ට්ට්ප්ස්://example.com/register, email admin@domain.ල්ක්",
    status: "fail",
    categories: ["Formatting (spaces / line breaks / paragraph)", "Simple sentence", "M (31–299 characters)", "Robustness validation"]
  },
  {
    id: "Neg_Fun_0004",
    name: "Code injection attempt",
    inputLength: "S",
    input: "meeka html and css vitharadha?",
    expected: "මේක html and css විතරද?",
    actual: "මේක හ්ට්ම්ල් and cස්ස් විතරද?",
    status: "fail",
    categories: ["Formatting (spaces / line breaks / paragraph)", "Simple sentence", "S (≤30 characters)", "Robustness validation"]
  },
  {
    id: "Neg_Fun_0005",
    name: "Brand name transliteration error",
    inputLength: "S",
    input: "machang, Kit-Kat eka rasayi maath gannavaa.",
    expected: "මචන්ග්, Kit-Kat එක රසයි මාත් ගන්නවා.",
    actual: "මචන්ග්, Kit-ඛට් එක රසයි මාත් ගන්නවා..",
    status: "fail",
    categories: ["Mixed Singlish + English", "Simple sentence", "S (≤30 characters)", "Robustness validation"]
  },
  {
    id: "Neg_Fun_0006",
    name: "English slang misinterpretation",
    inputLength: "M",
    input: "iiyee balapu film ekanam goated . mn eekata dhenavaa 9/10 k.",
    expected: "ඊයේ බලපු film එකනම් goated . ම්න් ඒකට දෙනවා 9/10 ක්.",
    actual: "ඊයේ බලපු film එකනම් ගොඅටෙඩ් . ම්න් ඒකට දෙනවා 9/10 ක්.",
    status: "fail",
    categories: ["Slang / informal language", "Simple sentence", "M (31–299 characters)", "Robustness validation"]
  },
  {
    id: "Neg_Fun_0007",
    name: "Brand name incorrect transliteration",
    inputLength: "M",
    input: "magee yaaluvaa gee Iphone eka dhavas 3kata kalin naethi vunaa nee",
    expected: "මගේ යාලුවා ගේ Iphone එක දවස් 3කට කලින් නැති වුනා නේ.",
    actual: "මගේ යාලුවා ගේ ඉප්හොනෙ එක දවස් 3කට කලින් නැති වුනා නේ",
    status: "fail",
    categories: ["Names / places / common English words", "Simple sentence", "M (31–299 characters)", "Robustness validation"]
  },
  {
    id: "Neg_Fun_0008",
    name: "Internet speed unit incorrect transliteration",
    inputLength: "M",
    input: "apeе gedhara wifi speed eka 4 Mbps.",
    expected: "අපේ ගෙදර wifi speed එක 4 Mbps.",
    actual: "අපේ ගෙදර wifi speed එක 4 ම්බ්ප්ස්.",
    status: "Fail",
    categories: ["Mixed Singlish + English", "Simple sentence", "M (31–299 characters)", "Robustness validation"]
  },
  {
    id: "Neg_Fun_0009",
    name: "Common abbreviation incorrectly transliterated",
    inputLength: "S",
    input: "aluth Tv ekak ganna onee.",
    expected: "අලුත් Tv එකක් ගන්න ඕනේ.",
    actual: "අලුත් ඨ්ව් එකක් ගන්න ඕනේ.",
    status: "fail",
    categories: ["Mixed Singlish + English", "Simple sentence", "S (≤30 characters)", "Robustness validation"]
  },
  {
    id: "Neg_Fun_0010",
    name: "Email username incorrectly transliterated",
    inputLength: "M",
    input: "magee email eka vasantha1009@email.com",
    expected: "මගේ email එක vasantha1009@email.com.",
    actual: "මගේ email එක වසන්ත1009@email.com.",
    status: "fail",
    categories: ["Punctuation / numbers", "Simple sentence", "M (31–299 characters)", "Robustness validation"]
  },

  // ============================
  // UI TESTS (2)
  // ============================
  {
    id: "Pos_UI_0001",
    name: "Output updates character-by-character during typing",
    inputLength: "S",
    input: "kohomadha",
    expected: "කොහොමද",
    status: "Pass",
    categories: ["Usability flow (real-time conversion)", "Simple sentence", "S (≤30 characters)", "Real-time output update behavior"],
    isUITest: true,
    typingSequence: true
  },
  {
    id: "Neg_UI_0001",
    name: "UI freezes with rapid typing",
    inputLength: "M",
    input: "mamagedharayanavaa".repeat(3),
    expected: "මමගෙදරයනවාමමගෙදරයනවාමමගෙදරයනවා",
    actual: "මමගෙදරයනවා",
    status: "Fail",
    categories: ["Empty/cleared input handling", "Simple sentence", "M (31–299 characters)", "Real-time output update behavior"],
    isUITest: true,
    rapidTyping: true
  }
];

// Helper function to get test cases by type
export const getTestCasesByType = (type: 'positive' | 'negative' | 'ui') => {
  switch (type) {
    case 'positive':
      return testCases.filter(tc => tc.id.startsWith('Pos_Fun'));
    case 'negative':
      return testCases.filter(tc => tc.id.startsWith('Neg_Fun'));
    case 'ui':
      return testCases.filter(tc => tc.id.includes('UI'));
    default:
      return testCases;
  }
};

// Helper function to get test cases by length type
export const getTestCasesByLength = (length: 'S' | 'M' | 'L') => {
  return testCases.filter(tc => tc.inputLength === length);
};

// Helper function to get test case by ID
export const getTestCaseById = (id: string) => {
  return testCases.find(tc => tc.id === id);
};

// Summary statistics
export const testStats = {
  total: testCases.length,
  positive: testCases.filter(tc => tc.id.startsWith('Pos_Fun')).length,
  negative: testCases.filter(tc => tc.id.startsWith('Neg_Fun')).length,
  ui: testCases.filter(tc => tc.id.includes('UI')).length,
  byLength: {
    S: testCases.filter(tc => tc.inputLength === 'S').length,
    M: testCases.filter(tc => tc.inputLength === 'M').length,
    L: testCases.filter(tc => tc.inputLength === 'L').length
  }
};

// Export test categories for filtering
export const testCategories = {
  inputTypes: [
    "Daily language usage",
    "Greeting / request / response",
    "Word combination / phrase pattern",
    "Mixed Singlish + English",
    "Slang / informal language",
    "Typographical error handling",
    "Names / places / common English words",
    "Punctuation / numbers",
    "Formatting (spaces / line breaks / paragraph)",
    "Empty/cleared input handling",
    "Usability flow (real-time conversion)"
  ],
  grammarFocus: [
    "Simple sentence",
    "Compound sentence",
    "Complex sentence",
    "Interrogative (question)",
    "Imperative (command)",
    "Present tense",
    "Past tense",
    "Future tense",
    "Negation (negative form)",
    "Pronoun variation (I/you/we/they)",
    "Plural form"
  ],
  qualityFocus: [
    "Accuracy validation",
    "Robustness validation",
    "Formatting preservation",
    "Real-time output update behavior",
    "Error handling / input validation"
  ]
};
