export function translateText(
  text: string
) {

  /* CLEAN INPUT */

  const cleaned =
    text
      .replace(
        "translate",
        ""
      )
      .trim();

  const dictionary:
    Record<string, string> = {

    "मुझे होटल जाना है":
      "എനിക്ക് ഹോട്ടലിലേക്ക് പോകണം",

    "मुझे अस्पताल जाना है":
      "എനിക്ക് ആശുപത്രിയിൽ പോകണം",

    "मुझे पानी चाहिए":
      "എനിക്ക് വെള്ളം വേണം",

    "मुझे रेलवे स्टेशन जाना है":
      "എനിക്ക് റെയിൽവേ സ്റ്റേഷനിലേക്ക് പോകണം",

    "मैं शाकाहारी हूँ":
      "ഞാൻ സസ്യാഹാരിയാണ്",
  };

  return (
    dictionary[cleaned] ||
    "Translation unavailable"
  );
}