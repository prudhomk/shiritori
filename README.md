# Shiri-Tori しりとり

A word game in which a player submits a word, and the following player must submit a word that starts with the last character of the previous word (i.e. 'apple', 'eggplant', 'tree' and so on);

Dictionary API's for use in determining word accuracy: 

https://developer.oxforddictionaries.com/documentation

https://api.lexicala.com/documentation

https://www.twinword.com/api/word-dictionary.php

Challenges: 

Picking an option:
two choices to solve word check problem...

-API calls (and call limits)
  -Depending on which API, need to figure out how to make use of it
  -Core feature needed is just to see if a word exists (is a word), no need for any other parts for MVP
  -Additional info about a word would be nice for categories (stretch), and would rely upon using a filter
  -if word is checked upon entry, call limit will be exceeded very quickly

OR

-create my own dictionary database
-would require storing as many words as possible (scraper)
  -would need to find good sources to scrape
-would alleviate call limits to an extent
-build up my own API making use of a created dataset


